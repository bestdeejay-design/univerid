(() => {
  const slides = Array.from(document.querySelectorAll('.pitch-slide'));
  const nav = document.getElementById('slideNav');
  const counter = document.getElementById('slideCounter');
  const progress = document.getElementById('pitchProgress');
  const progressFill = document.getElementById('pitchProgressFill');
  const previous = document.getElementById('previousSlide');
  const next = document.getElementById('nextSlide');
  const copyButton = document.getElementById('copyPitch');
  const copyText = document.getElementById('shortPitchText');
  const copyFeedback = document.getElementById('copyFeedback');
  if (!slides.length || !nav || !counter || !progress || !previous || !next) return;

  let activeIndex = 0;
  const dots = slides.map((slide, index) => {
    const heading = slide.querySelector('h1, h2');
    const button = document.createElement('button');
    button.className = 'pitch-dot';
    button.type = 'button';
    button.title = heading ? heading.textContent.trim() : `Слайд ${index + 1}`;
    button.setAttribute('aria-label', `Перейти к слайду ${index + 1}: ${button.title}`);
    button.addEventListener('click', () => goTo(index, true));
    nav.append(button);
    return button;
  });

  function setActive(index) {
    activeIndex = Math.max(0, Math.min(index, slides.length - 1));
    counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    progress.setAttribute('aria-valuemax', String(slides.length));
    progress.setAttribute('aria-valuenow', String(activeIndex + 1));
    progressFill.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;
    dots.forEach((dot, index) => {
      if (index === activeIndex) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === slides.length - 1;
  }

  function goTo(index, focusHeading = false) {
    const target = Math.max(0, Math.min(index, slides.length - 1));
    slides[target].scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    setActive(target);
    if (focusHeading) {
      const heading = slides[target].querySelector('h1, h2');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        window.setTimeout(() => heading.focus({ preventScroll: true }), 80);
      }
    }
  }

  previous.addEventListener('click', () => goTo(activeIndex - 1, true));
  next.addEventListener('click', () => goTo(activeIndex + 1, true));
  document.querySelectorAll('[data-go]').forEach((button) => {
    button.addEventListener('click', () => goTo(Number(button.dataset.go), true));
  });

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(slides.indexOf(visible.target));
  }, { threshold: [0.35, 0.55, 0.75] });
  slides.forEach((slide) => observer.observe(slide));

  document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target instanceof HTMLElement && event.target.matches('input, textarea, select, [contenteditable="true"]')) return;
    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      if (activeIndex < slides.length - 1) { event.preventDefault(); goTo(activeIndex + 1, true); }
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      if (activeIndex > 0) { event.preventDefault(); goTo(activeIndex - 1, true); }
    }
  });

  async function copyPitch() {
    const text = copyText.textContent.trim();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const field = document.createElement('textarea');
        field.value = text;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.append(field);
        field.select();
        const success = document.execCommand('copy');
        field.remove();
        if (!success) throw new Error('Clipboard is unavailable');
      }
      copyFeedback.textContent = 'Текст скопирован';
    } catch (_) {
      copyFeedback.textContent = 'Выделите и скопируйте текст вручную';
    }
    window.setTimeout(() => { copyFeedback.textContent = ''; }, 3500);
  }

  if (copyButton && copyText && copyFeedback) copyButton.addEventListener('click', copyPitch);
  setActive(0);
})();

(() => {
  const modules = Array.isArray(window.UNIVERID_MODULES) ? window.UNIVERID_MODULES : [];
  const list = document.getElementById('routeList');
  const title = document.getElementById('detailTitle');
  const preview = document.getElementById('detailPreview');
  const sub = document.getElementById('detailSub');
  const items = document.getElementById('detailItems');
  const kicker = document.getElementById('detailKicker');
  const itemCount = document.getElementById('detailCount');
  const search = document.getElementById('routeSearch');
  const previous = document.getElementById('previousModule');
  const next = document.getElementById('nextModule');
  const progress = document.getElementById('routeProgress');
  const progressText = document.getElementById('routeProgressText');
  const progressFill = document.getElementById('routeProgressFill');
  let activeIndex = 0;
  const stepButtons = [];

  if (!list || !title || !items || !previous || !next || !modules.length) {
    if (title) title.textContent = 'Карта модулей не загрузилась';
    if (preview) preview.textContent = 'Обновите страницу или откройте каталог модулей.';
    return;
  }

  modules.forEach((module, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'route-step';
    button.dataset.index = String(index);
    button.setAttribute('aria-label', `Направление ${index + 1}: ${module.title}`);

    const number = document.createElement('span');
    number.className = 'route-index';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = String(index + 1).padStart(2, '0');
    const label = document.createElement('span');
    label.className = 'route-label';
    label.textContent = module.title;

    button.append(number, label);
    button.addEventListener('click', () => renderModule(index));
    li.append(button);
    list.append(li);
    stepButtons.push({ button, item: li, module });
  });

  function renderModule(index) {
    activeIndex = Math.max(0, Math.min(index, modules.length - 1));
    const module = modules[activeIndex];
    const moduleItems = Array.isArray(module.items) ? module.items : [];

    kicker.textContent = `Направление ${String(activeIndex + 1).padStart(2, '0')} · концепция`;
    title.textContent = module.title;
    preview.textContent = module.preview;
    sub.textContent = module.sub || 'Возможное направление развития; состав и приоритеты требуют отдельного обсуждения.';
    itemCount.textContent = `${moduleItems.length} идей`;

    const listItems = moduleItems.map((value) => {
      const li = document.createElement('li');
      li.textContent = value;
      return li;
    });
    items.replaceChildren(...listItems);

    stepButtons.forEach(({ button }, buttonIndex) => {
      if (buttonIndex === activeIndex) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });

    const currentStep = activeIndex + 1;
    progressText.textContent = `${currentStep} из ${modules.length}`;
    progress.setAttribute('aria-valuemax', String(modules.length));
    progress.setAttribute('aria-valuenow', String(currentStep));
    progressFill.style.width = `${(currentStep / modules.length) * 100}%`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === modules.length - 1;
    next.replaceChildren(document.createTextNode(activeIndex === modules.length - 1 ? 'Последнее направление' : 'Следующий модуль '));
    if (activeIndex < modules.length - 1) {
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';
      next.append(arrow);
    }
  }

  function filterSteps(value) {
    const query = value.trim().toLocaleLowerCase('ru');
    stepButtons.forEach(({ item, module }) => {
      const text = [module.title, module.preview, module.sub, ...(module.items || [])]
        .join(' ')
        .toLocaleLowerCase('ru');
      item.hidden = Boolean(query) && !text.includes(query);
    });
  }

  previous.addEventListener('click', () => renderModule(activeIndex - 1));
  next.addEventListener('click', () => renderModule(activeIndex + 1));
  search.addEventListener('input', () => filterSteps(search.value));
  document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target instanceof HTMLElement && event.target.matches('input, textarea, select, [contenteditable="true"]')) return;
    if (event.key === 'ArrowRight' && activeIndex < modules.length - 1) {
      event.preventDefault();
      renderModule(activeIndex + 1);
    } else if (event.key === 'ArrowLeft' && activeIndex > 0) {
      event.preventDefault();
      renderModule(activeIndex - 1);
    }
  });

  renderModule(0);
})();

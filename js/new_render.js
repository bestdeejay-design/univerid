// Simple data-driven renderer for the new design page
(function(){
  const root = document.getElementById('demo-root');
  if (!root || !window.NEW_DEMO) return;
  const sections = NEW_DEMO.sections;
  sections.forEach(sec => {
    const secEl = document.createElement('section');
    secEl.id = sec.id;
    secEl.className = 'section';
    secEl.innerHTML = `
      <div class="container">
        <h2>${sec.heading}</h2>
        <p>${sec.text}</p>
      </div>`;
    root.appendChild(secEl);
  });
})();

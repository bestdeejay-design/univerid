(() => {
  const modules = Array.isArray(window.UNIVERID_MODULES) ? window.UNIVERID_MODULES : [];
  const grid = document.getElementById('moduleGrid');
  const search = document.getElementById('moduleSearch');
  const count = document.getElementById('moduleCount');
  const empty = document.getElementById('catalogEmpty');
  const dialog = document.getElementById('moduleDialog');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogSub = document.getElementById('dialogSub');
  const dialogItems = document.getElementById('dialogItems');
  const dialogClose = document.getElementById('dialogClose');
  let returnFocus = null;

  if (!grid || !search || !count || !empty || !dialog) return;

  function createCard(module, index) {
    const button = document.createElement('button');
    button.className = 'module-card';
    button.type = 'button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'moduleDialog');

    const top = document.createElement('span');
    top.className = 'module-card-top';
    const number = document.createElement('span');
    number.className = 'module-number';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = String(index + 1).padStart(2, '0');
    const itemCount = document.createElement('span');
    itemCount.className = 'module-count';
    itemCount.textContent = `${module.items.length} пунктов в карте`;
    top.append(number, itemCount);

    const title = document.createElement('h3');
    title.textContent = module.title;
    const preview = document.createElement('p');
    preview.textContent = module.preview;
    const action = document.createElement('span');
    action.className = 'module-card-link';
    action.append(document.createTextNode('Посмотреть направление '));
    const arrow = document.createElement('span');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '→';
    action.append(arrow);

    button.append(top, title, preview, action);
    button.addEventListener('click', () => openModule(module, index, button));
    return button;
  }

  function render(query = '') {
    const normalized = query.trim().toLocaleLowerCase('ru');
    const matches = modules
      .map((module, index) => ({ module, index }))
      .filter(({ module }) => {
        if (!normalized) return true;
        const searchable = [module.title, module.preview, module.sub, ...(module.items || [])]
          .join(' ')
          .toLocaleLowerCase('ru');
        return searchable.includes(normalized);
      });

    grid.replaceChildren(...matches.map(({ module, index }) => createCard(module, index)));
    count.textContent = normalized
      ? `Найдено: ${matches.length} из ${modules.length}`
      : `${modules.length} направлений концепции`;
    empty.hidden = matches.length > 0;
    grid.hidden = matches.length === 0;
  }

  function openModule(module, index, trigger) {
    returnFocus = trigger;
    dialogTitle.textContent = module.title;
    dialogSub.textContent = module.sub || module.preview;
    document.getElementById('dialogKicker').textContent = `Направление ${String(index + 1).padStart(2, '0')} · концепция`;

    const items = (module.items || []).map((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      return li;
    });
    dialogItems.replaceChildren(...items);
    dialog.showModal();
    dialogClose.focus();
  }

  search.addEventListener('input', () => render(search.value));
  dialogClose.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
    returnFocus = null;
  });

  render();
})();

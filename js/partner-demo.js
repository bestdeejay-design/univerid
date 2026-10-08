(() => {
  const scenarios = {
    internship: {
      icon: '01',
      kicker: 'Карьерный маршрут',
      title: 'Стажировка для студентов выбранного направления',
      description: 'Компания описывает возможность и критерии, университет помогает определить целевую аудиторию, студент может самостоятельно решить, откликаться ли.',
      steps: [
        { title: 'Описание возможности', short: 'Роль, требования и сроки', detail: 'Работодатель формулирует задачу, направление подготовки, формат участия и критерии отбора.' },
        { title: 'Подбор аудитории', short: 'Программа и курс', detail: 'Вместе определяются направления обучения и аудитория, которой уместно показать возможность.' },
        { title: 'Отклик и участие', short: 'Интерес по желанию', detail: 'Студент знакомится с предложением и решает, хочет ли оставить отклик или принять участие.' },
        { title: 'Обратная связь', short: 'Переход к следующему шагу', detail: 'Стороны оценивают согласованные показатели: от интереса к возможности до интервью или практики.' }
      ],
      metrics: ['Охват целевой аудитории', 'Просмотр и интерес к возможности', 'Доля добровольных откликов', 'Переходы к интервью или практике']
    },
    project: {
      icon: '02',
      kicker: 'Проектный маршрут',
      title: 'Задача компании или учебный кейс',
      description: 'Компания предлагает прикладную задачу, университет помогает встроить её в подходящий формат, а студенты могут попробовать себя в командной работе.',
      steps: [
        { title: 'Постановка задачи', short: 'Контекст и ожидаемый формат', detail: 'Партнёр описывает задачу, доступные материалы, ограничения и формат результата без раскрытия чувствительных данных.' },
        { title: 'Сбор команды', short: 'Направления и роли', detail: 'Согласуются критерии участия, профиль компетенций и правила формирования команд.' },
        { title: 'Работа над кейсом', short: 'Промежуточная обратная связь', detail: 'Участники решают задачу; компания и университет определяют формат поддержки и обратной связи.' },
        { title: 'Итоги и продолжение', short: 'Результат и дальнейший контакт', detail: 'Можно оценить участие и качество взаимодействия, а затем решить, повторять ли сценарий.' }
      ],
      metrics: ['Количество заинтересовавшихся', 'Регистрации и фактическое участие', 'Завершение проектного этапа', 'Обратная связь участников и компании']
    },
    event: {
      icon: '03',
      kicker: 'Событийный маршрут',
      title: 'Встреча, мастер-класс или карьерный день',
      description: 'Компания и университет проводят событие, а участники проходят понятный путь от анонса и регистрации до участия и обратной связи.',
      steps: [
        { title: 'План события', short: 'Тема, формат и аудитория', detail: 'Согласуются тема, дата, формат, целевая аудитория, площадка и ответственные стороны.' },
        { title: 'Приглашение', short: 'Информирование и регистрация', detail: 'Участникам показывается описание события и понятный способ зарегистрироваться.' },
        { title: 'Участие', short: 'Посещение по желанию', detail: 'На пилоте можно проверить процесс регистрации, напоминаний и отметки фактического участия.' },
        { title: 'Разбор', short: 'Обратная связь и следующий контакт', detail: 'Партнёр и университет разбирают посещаемость, обратную связь и интерес к продолжению.' }
      ],
      metrics: ['Охват приглашения', 'Регистрации и посещаемость', 'Доля участников целевой группы', 'Оценка события и интерес к продолжению']
    }
  };

  const tabButtons = Array.from(document.querySelectorAll('.scenario-tab'));
  const scenarioPanel = document.getElementById('scenarioPanel');
  const funnel = document.getElementById('demoFunnel');
  const metricList = document.getElementById('metricList');
  const detail = document.getElementById('stepDetail');
  const stepCount = document.getElementById('stepCount');
  let activeStep = 0;

  function renderScenario(key) {
    const scenario = scenarios[key];
    if (!scenario) return;
    activeStep = 0;

    document.getElementById('summaryIcon').textContent = scenario.icon;
    document.getElementById('summaryKicker').textContent = scenario.kicker;
    document.getElementById('scenarioTitle').textContent = scenario.title;
    document.getElementById('scenarioDescription').textContent = scenario.description;

    tabButtons.forEach((button) => {
      const selected = button.dataset.scenario === key;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && scenarioPanel) scenarioPanel.setAttribute('aria-labelledby', button.id);
    });

    funnel.replaceChildren(...scenario.steps.map((step, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'funnel-step' + (index === activeStep ? ' is-active' : '');
      button.setAttribute('aria-current', index === activeStep ? 'step' : 'false');
      button.innerHTML = `<span class="funnel-index">${String(index + 1).padStart(2, '0')}</span><span><strong></strong><small></small></span><span class="funnel-chevron" aria-hidden="true">›</span>`;
      button.querySelector('strong').textContent = step.title;
      button.querySelector('small').textContent = step.short;
      button.addEventListener('click', () => setStep(scenario, index));
      return button;
    }));

    metricList.replaceChildren(...scenario.metrics.map((metric) => {
      const item = document.createElement('li');
      item.textContent = metric;
      return item;
    }));

    setStep(scenario, 0);
  }

  function setStep(scenario, index) {
    activeStep = index;
    const selected = scenario.steps[index];
    stepCount.textContent = `Шаг ${index + 1} из ${scenario.steps.length}`;
    detail.innerHTML = `<strong>${selected.title}.</strong> <span></span>`;
    detail.querySelector('span').textContent = selected.detail;
    Array.from(funnel.children).forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-current', active ? 'step' : 'false');
    });
  }

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => renderScenario(button.dataset.scenario));
    button.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + direction + tabButtons.length) % tabButtons.length;
      tabButtons[nextIndex].focus();
      tabButtons[nextIndex].click();
    });
  });

  renderScenario('internship');
})();

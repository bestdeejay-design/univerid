// UniverID Mobile Demo App

// Data stored in memory - Russian university transcript format
const appData = {
  // Профиль студента
  profile: {
    name: 'Алексей Петров (демо)',
    group: 'ИТ-401 (пример)',
    faculty: 'Учебное подразделение (пример)',
    course: 4,
    form: 'Бюджет',
    email: 'student@example.invalid',
    phone: 'Не указан',
    avatar: 'АП',
    qrCode: 'DEMO-ONLY',
    room: 'Корпус / комната не заданы',
    // Подписки пользователя
    subscriptions: {
      clubs: ['it', 'science'], // ID клубов, в которых состоит
      eventCategories: ['schedule', 'clubs', 'institute'] // категории событий
    }
  },
  
  // transcript: дисциплина, часы, семестр, тип контроля, оценка, дата
  transcript: [
    // Семестр 1
    { name: 'Математика', hours: 144, semester: 1, type: 'Экзамен', grade: '5', date: '15.01.2025' },
    { name: 'Физика', hours: 108, semester: 1, type: 'Экзамен', grade: '4', date: '17.01.2025' },
    { name: 'Информатика', hours: 108, semester: 1, type: 'Зачёт', grade: 'зачтено', date: '20.12.2024' },
    { name: 'История России', hours: 72, semester: 1, type: 'Зачёт', grade: 'зачтено', date: '22.12.2024' },
    // Семестр 2
    { name: 'Математика', hours: 108, semester: 2, type: 'Экзамен', grade: '5', date: '15.06.2025' },
    { name: 'Программирование', hours: 144, semester: 2, type: 'Экзамен', grade: '5', date: '18.06.2025' },
    { name: 'Английский язык', hours: 72, semester: 2, type: 'Зачёт', grade: 'зачтено', date: '20.05.2025' },
    { name: 'Физкультура', hours: 36, semester: 2, type: 'Зачёт', grade: 'зачтено', date: '25.05.2025' },
    // Семестр 3 (текущий)
    { name: 'Алгоритмы и структуры данных', hours: 108, semester: 3, type: 'Экзамен', grade: '4', date: '' },
    { name: 'Базы данных', hours: 108, semester: 3, type: 'Зачёт', grade: 'зачтено', date: '' },
    { name: 'Теория вероятностей', hours: 72, semester: 3, type: 'Экзамен', grade: '', date: '' },
    { name: 'Сети и телекоммуникации', hours: 72, semester: 3, type: 'Зачёт', grade: '', date: '' }
  ],
  
  // Current schedule
  schedule: [
    { time: '09:00', name: 'Алгоритмы', room: 'ауд. 101', current: true },
    { time: '11:00', name: 'Базы данных', room: 'ауд. 204', current: false },
    { time: '14:00', name: 'Теория вероятностей', room: 'лаб. 3', current: false }
  ],
  
  // Полное расписание по неделям
  scheduleFull: {
    // Демонстрационная неделя 1 (4 октября 2026)
    '2026-10-04': [
      { day: 'Понедельник', time: '09:00', name: 'Алгоритмы и структуры данных', type: 'Лекция', room: 'ауд. 201', teacher: 'проф. Петров А.С.' },
      { day: 'Понедельник', time: '11:00', name: 'Базы данных', type: 'Лабораторная', room: 'лаб. 3', teacher: 'доц. Сидоров В.К.' },
      { day: 'Понедельник', time: '14:00', name: 'Теория вероятностей', type: 'Практика', room: 'ауд. 105', teacher: 'асс. Иванова М.П.' },
      { day: 'Вторник', time: '09:00', name: 'Сети и телекоммуникации', type: 'Лабораторная', room: 'лаб. 5', teacher: 'доц. Козлова Т.Н.' },
      { day: 'Вторник', time: '11:00', name: 'Алгоритмы и структуры данных', type: 'Практика', room: 'лаб. 2', teacher: 'проф. Петров А.С.' },
      { day: 'Среда', time: '09:00', name: 'Базы данных', type: 'Лекция', room: 'ауд. 204', teacher: 'доц. Сидоров В.К.' },
      { day: 'Среда', time: '11:00', name: 'Иностранный язык', type: 'Практика', room: 'ауд. 301', teacher: 'преп. Михайлова О.Л.' },
      { day: 'Четверг', time: '10:00', name: 'Теория вероятностей', type: 'Лекция', room: 'ауд. 105', teacher: 'асс. Иванова М.П.' },
      { day: 'Четверг', time: '14:00', name: 'Сети и телекоммуникации', type: 'Лекция', room: 'ауд. 102', teacher: 'доц. Козлова Т.Н.' },
      { day: 'Пятница', time: '09:00', name: 'Базы данных', type: 'Практика', room: 'лаб. 3', teacher: 'доц. Сидоров В.К.' },
      { day: 'Пятница', time: '11:00', name: 'Физическая культура', type: 'Практика', room: 'спортзал', teacher: 'преп. Волков С.Д.' }
    ],
    // Демонстрационная неделя 2 (11 октября 2026)
    '2026-10-11': [
      { day: 'Понедельник', time: '09:00', name: 'Алгоритмы и структуры данных', type: 'Практика', room: 'лаб. 1', teacher: 'проф. Петров А.С.' },
      { day: 'Понедельник', time: '11:00', name: 'Базы данных', type: 'Лабораторная', room: 'лаб. 3', teacher: 'доц. Сидоров В.К.' },
      { day: 'Понедельник', time: '14:00', name: 'Теория вероятностей', type: 'Лекция', room: 'ауд. 105', teacher: 'асс. Иванова М.П.' },
      { day: 'Вторник', time: '09:00', name: 'Сети и телекоммуникации', type: 'Лекция', room: 'ауд. 102', teacher: 'доц. Козлова Т.Н.' },
      { day: 'Вторник', time: '11:00', name: 'Алгоритмы и структуры данных', type: 'Лабораторная', room: 'лаб. 2', teacher: 'проф. Петров А.С.' },
      { day: 'Среда', time: '09:00', name: 'Базы данных', type: 'Лекция', room: 'ауд. 204', teacher: 'доц. Сидоров В.К.' },
      { day: 'Среда', time: '11:00', name: 'Иностранный язык', type: 'Практика', room: 'ауд. 301', teacher: 'преп. Михайлова О.Л.' },
      { day: 'Четверг', time: '10:00', name: 'Теория вероятностей', type: 'Практика', room: 'ауд. 105', teacher: 'асс. Иванова М.П.' },
      { day: 'Четверг', time: '14:00', name: 'Сети и телекоммуникации', type: 'Лабораторная', room: 'лаб. 5', teacher: 'доц. Козлова Т.Н.' },
      { day: 'Пятница', time: '09:00', name: 'Базы данных', type: 'Практика', room: 'лаб. 3', teacher: 'доц. Сидоров В.К.' },
      { day: 'Пятница', time: '11:00', name: 'Физическая культура', type: 'Практика', room: 'спортзал', teacher: 'преп. Волков С.Д.' }
    ]
  },
  
  // Chat contacts
  chats: [
    { name: 'Деканат', lastMsg: 'Расписание обновлено', time: '12:30', icon: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-wallet-giftcard"/></svg>' },
    { name: 'Куратор Иванова', lastMsg: 'До встречи завтра', time: '11:15', icon: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-user"/></svg>' },
    { name: 'Студсовет', lastMsg: 'Анонс: хакатон', time: 'Вчера', icon: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-union"/></svg>' },
    { name: 'Профком', lastMsg: 'Опрос: выбор темы', time: 'Вчера', icon: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-megaphone"/></svg>' }
  ],
  
  // Карьера - вакансии и стажировки
  careers: [
    { company: 'Технологическая компания (пример)', position: 'Стажёр-разработчик', salary: 'Условия не заданы', location: 'Формат не задан', type: 'Сценарий стажировки' },
    { company: 'Компания из финансового сектора (пример)', position: 'Стажёр-аналитик', salary: 'Условия не заданы', location: 'Формат не задан', type: 'Сценарий практики' },
    { company: 'Продуктовая команда (пример)', position: 'Участник проектной задачи', salary: 'Не относится к этому сценарию', location: 'Формат не задан', type: 'Проектный сценарий' }
  ],
  
  // Льготы и скидки
  benefits: [
    { name: 'Поддержка питания', desc: 'Возможный формат; условия определяются отдельно', valid: 'не подключено' },
    { name: 'Транспортная льгота', desc: 'Возможный формат; наличие и условия не подтверждены', valid: 'не подключено' },
    { name: 'Культурные предложения', desc: 'Возможный формат; условия не заданы', valid: 'не подключено' }
  ],
  
// События и мероприятия
  events: [
    // Учебные события (расписание)
    { name: 'Консультация: Базы данных', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Консультация', category: 'schedule', club: null },
    { name: 'Экзамен: Машинное обучение', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Экзамен', category: 'schedule', club: null },
    { name: 'Зачёт: Веб-разработка', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Зачёт', category: 'schedule', club: null },
    { name: 'Олимпиада по программированию', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Олимпиада', category: 'schedule', club: null },
    // Мероприятия клубов
    { name: 'Турнир по волейболу', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Спорт', category: 'clubs', club: 'Спортивные секции' },
    { name: 'Концерт авторской песни', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Концерт', category: 'clubs', club: 'Клуб авторской песни' },
    { name: 'Python-митап', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Митап', category: 'clubs', club: 'IT-клуб' },
    { name: 'Дискуссия: Будущее AI', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Дискуссия', category: 'clubs', club: 'Дискуссионный клуб' },
    { name: 'Фотопрогулка по центру', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Творчество', category: 'clubs', club: 'Творческая мастерская' },
    { name: 'Турнир дебатов', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Дебаты', category: 'clubs', club: 'Дискуссионный клуб' },
    { name: 'Хакатон: AI-проекты', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Хакатон', category: 'clubs', club: 'IT-клуб' },
    { name: 'Заседание научного общества', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Наука', category: 'clubs', club: 'Научное общество' },
    // События института
    { name: 'День открытых дверей', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Мероприятие', category: 'institute', club: null },
    { name: 'Знакомство с технологической компанией', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Пример события', category: 'institute', club: null },
    { name: 'Митап выпускников', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Мероприятие', category: 'institute', club: null },
    { name: 'Энергетический день', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Наука', category: 'science', club: 'Энергетический клуб' },
    { name: 'Разговорный клуб (английский)', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Языки', category: 'clubs', club: 'Клуб иностранных языков' },
    // События от деканата
    { name: 'Изменение в расписании', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Объявление', category: 'dekanat', club: null },
    { name: 'Информация о сессии (пример)', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Объявление', category: 'dekanat', club: null },
    { name: 'Запись на курсы повышения квалификации', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Объявление', category: 'dekanat', club: null },
    // Карьерные события
    { name: 'Ярмарка вакансий', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Карьера', category: 'career', club: null },
    { name: 'Встреча с представителем компании', date: 'Дата не задана', time: '—', place: 'Место не задано', type: 'Пример события', category: 'career', club: null }
  ],
  
  // Университетские сведения намеренно не привязаны к реальному вузу.
  aboutInstitute: {
    title: 'Профиль университета (демо)',
    description: 'В реальном пилоте название, структура, справочная информация и источники данных будут предоставлены и согласованы университетом. Здесь они не подключены.',
    address: 'Адрес и геоданные не заданы'
  },

  // Иллюстративный навигатор без реальных адресов и планов кампуса.
  navigator: {
    buildings: [
      { id: 'A', name: 'Учебный корпус A', address: 'Адрес не задан', floors: ['Аудитории и службы настраиваются университетом'] },
      { id: 'B', name: 'Учебный корпус B', address: 'Адрес не задан', floors: ['Аудитории и службы настраиваются университетом'] }
    ],
    faculties: [
      { name: 'Учебное подразделение (пример)', building: 'Корпус A', floor: 'расположение не задано' },
      { name: 'Карьерный центр (пример)', building: 'Корпус B', floor: 'расположение не задано' }
    ],
    pointsOfInterest: [
      { name: 'Библиотека', location: 'Расположение задаётся университетом', icon: 'book' },
      { name: 'Столовая', location: 'Расположение задаётся университетом', icon: 'food' },
      { name: 'Медицинский пункт', location: 'Расположение задаётся университетом', icon: 'hospital' }
    ]
  },
  
  // Ссылки на сервисы
  services: {
    moodle: null,
    payment: 'Оплата обучения'
  },
  
  // Данные для выпускников
  alumni: {
    profile: {
      name: 'Алексей Петров (демо)',
      graduationYear: 'не указан',
      specialty: 'Направление не указано',
      photo: 'АП',
      work: {
        company: 'Технологическая компания (пример)',
        position: 'Должность не указана',
        since: 'не задано'
      },
      careerHistory: [
        { company: 'Компания (пример)', position: 'Должность не указана', years: 'Период не задан' },
        { company: 'Компания цифровых сервисов (пример)', position: 'Разработчик', years: 'Период не задан' }
      ],
      email: 'graduate@example.invalid',
      phone: 'Не указан',
      linkedin: '',
      about: 'Демонстрационный профиль выпускника. Биография и сведения о работодателе не подтверждены.'
    },
    subscriptions: {
      meetings: true,
      instituteNews: true,
      endowment: true
    },
    // События для выпускников с RSVP
    events: [
      {
        id: 1,
        title: 'Встреча выпускников (пример)',
        date: 'Дата не задана',
        time: '—',
        place: 'Место не задано',
        type: 'meeting',
        registered: false,
        description: 'Иллюстративный сценарий. Дата, участники и место проведения не заданы.'
      },
      {
        id: 2,
        title: 'Встреча с представителями университета (пример)',
        date: 'Дата не задана',
        time: '—',
        place: 'Место не задано',
        type: 'institute_meeting',
        registered: false,
        description: 'Возможный формат встречи. Состав участников и тема будут определены, если сценарий согласуют.'
      },
      {
        id: 3,
        title: 'Встреча выпускников (пример)',
        date: 'Дата не задана',
        time: '—',
        place: 'Место не задано',
        type: 'aeho',
        registered: false,
        description: 'Возможный формат встречи. Реальная регистрация и список участников отсутствуют.'
      },
      {
        id: 4,
        title: 'День открытых дверей - помощь в организации',
        date: 'Дата не задана',
        time: '—',
        place: 'Место не задано',
        type: 'volunteer',
        registered: false,
        description: 'Возможный волонтёрский сценарий. Событие и организатор не подтверждены.'
      },
      {
        id: 5,
        title: 'Экскурсия в лабораторию робототехники',
        date: 'Дата не задана',
        time: '—',
        place: 'Место не задано',
        type: 'tour',
        registered: false,
        description: 'Пример экскурсионного сценария. Лаборатория, дата и организатор не заданы.'
      }
    ],
    // Иллюстративные направления без фонда, сумм, сборов и платёжного подключения.
    endowment: {
      description: 'Возможные форматы безвозвратной поддержки обсуждаются отдельно. Кредитование и инвестиции не рассматриваются.',
      programs: [
        { id: 1, name: 'Стипендиальная инициатива (пример)', description: 'Возможный формат поддержки; критерии, получатель и условия должны быть согласованы.' },
        { id: 2, name: 'Поддержка проектной задачи (пример)', description: 'Цель, сроки, права на результаты и участие спонсора определяются отдельно.' },
        { id: 3, name: 'Поддержка образовательного события (пример)', description: 'Сценарий, бюджет, отчётность и публичные упоминания согласуются до начала.' }
      ]
    },
    // Реальные профили и достижения выпускников не загружены.
    wallOfFame: { outstandingAlumni: [], awardWinners: [] }
  }
};

// Navigation history
let history = ['home'];

// Theme management
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  
  // Update theme icons
  updateThemeIcons(newTheme);
  
  // Save preference
  localStorage.setItem('univerid-theme', newTheme);
}

function updateThemeIcons(theme) {
  // Update sun/moon icons based on theme
  document.querySelectorAll('.theme-toggle .icon, .theme-toggle-small .icon-sm').forEach(icon => {
    const use = icon.querySelector('use');
    if (use) {
      use.setAttribute('href', theme === 'light' ? '#icon-moon' : '#icon-sun');
    }
  });
}

function loadTheme() {
  const saved = localStorage.getItem('univerid-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcons(saved);
}

// Режим пользователя: student или graduate
let userMode = localStorage.getItem('univerid_userMode') || 'student';

function toggleUserMode() {
  const toggle = document.getElementById('modeToggle');
  userMode = userMode === 'student' ? 'graduate' : 'student';
  localStorage.setItem('univerid_userMode', userMode);
  
  if (toggle) {
    toggle.style.left = userMode === 'graduate' ? '30px' : '2px';
  }
  const modeSwitch = document.getElementById('modeSwitch');
  if (modeSwitch) {
    modeSwitch.setAttribute('aria-checked', String(userMode === 'graduate'));
    modeSwitch.setAttribute('aria-label', userMode === 'graduate' ? 'Показать режим студента' : 'Показать режим выпускника');
  }
}

function initUserMode() {
  userMode = localStorage.getItem('univerid_userMode') || 'student';
  const toggle = document.getElementById('modeToggle');
  if (toggle) {
    toggle.style.left = userMode === 'graduate' ? '30px' : '2px';
  }
  const modeSwitch = document.getElementById('modeSwitch');
  if (modeSwitch) {
    modeSwitch.setAttribute('aria-checked', String(userMode === 'graduate'));
    modeSwitch.setAttribute('aria-label', userMode === 'graduate' ? 'Показать режим студента' : 'Показать режим выпускника');
  }
  
  // Обновить заголовок кнопки QR
  const qrBtn = document.getElementById('headerQrBtn');
  if (qrBtn) {
    qrBtn.title = userMode === 'graduate' ? 'Пропуск на мероприятие' : 'Проход в общежитие';
  }
  
  // Обновить нижнюю навигацию
  updateBottomNav();
}

function updateBottomNav() {
  const studentNav = document.querySelectorAll('.student-nav');
  const graduateNav = document.querySelectorAll('.graduate-nav');
  
  if (userMode === 'graduate') {
    studentNav.forEach(el => el.style.display = 'none');
    graduateNav.forEach(el => el.style.display = '');
  } else {
    studentNav.forEach(el => el.style.display = '');
    graduateNav.forEach(el => el.style.display = 'none');
  }
}

function handleHeaderQR() {
  if (userMode === 'graduate') {
    showPage('alumni-profile');
  } else {
    showPage('qr');
  }
}

function handleProfileClick() {
  if (userMode === 'graduate') {
    showPage('alumni-profile');
  } else {
    showPage('profile');
  }
}

// Navigation
function openApp() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  localStorage.setItem('univerid_appOpen', 'true');
  updateBottomNav();
  showPage('home');
}

function closeApp() {
  document.getElementById('landing').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');
  history = ['home'];
  localStorage.setItem('univerid_appOpen', 'false');
}

function showPage(pageName, btnElement) {
  if (btnElement) {
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }
  
  history.push(pageName);
  updateHeader(pageName);
  renderContent(pageName);
  
  // Save to localStorage
  localStorage.setItem('univerid_lastPage', pageName);
  localStorage.setItem('univerid_history', JSON.stringify(history));
  
  // Update back button visibility
  document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
}

function goBack() {
  if (history.length > 1) {
    history.pop();
    const prevPage = history[history.length - 1];
    updateHeader(prevPage);
    renderContent(prevPage);
    
    // Save history to localStorage
    localStorage.setItem('univerid_lastPage', prevPage);
    localStorage.setItem('univerid_history', JSON.stringify(history));
    
    // If going back to home, close the app
    if (history.length === 1) {
      localStorage.removeItem('univerid_lastPage');
      localStorage.removeItem('univerid_history');
      localStorage.setItem('univerid_appOpen', 'false');
    }
    
    document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
  }
}

function updateHeader(pageName) {
  const titles = {
    home: 'Главная',
    grades: 'Оценки',
    schedule: 'Расписание',
    chat: 'Сообщения',
    profile: 'Профиль',
    qr: 'Проход',
    career: 'Карьера',
    benefits: 'Льготы',
    eventsfeed: 'События',
    // Страницы выпускника
    'alumni-profile': 'Мой профиль',
    'alumni-events': 'События',
    'alumni-endowment': 'Инициативы поддержки',
    'alumni-fame': 'Доска почёта',
    'alumni-network': 'Сеть выпускников'
  };
  document.getElementById('appTitle').textContent = titles[pageName] || 'Главная';
}

function renderContent(pageName) {
  const content = document.getElementById('content');
  
  // Если выпускник - показываем Alumni Home вместо обычного home
  if (pageName === 'home' && userMode === 'graduate') {
    content.innerHTML = renderAlumniHome();
  } else if (pageName === 'home') {
    content.innerHTML = renderHome();
  } else if (pageName === 'grades') {
    content.innerHTML = renderGrades();
  } else if (pageName === 'schedule') {
    content.innerHTML = renderSchedule();
  } else if (pageName === 'chat') {
    content.innerHTML = renderChat();
  } else if (pageName === 'profile') {
    content.innerHTML = renderProfile();
  } else if (pageName === 'qr') {
    content.innerHTML = renderQR();
  } else if (pageName === 'career') {
    content.innerHTML = renderCareer();
  } else if (pageName === 'benefits') {
    content.innerHTML = renderBenefits();
  } else if (pageName === 'eventsfeed') {
    content.innerHTML = renderEventsFeed();
  } else if (pageName === 'attendance') {
    content.innerHTML = renderAttendance();
  } else if (pageName === 'session') {
    content.innerHTML = renderSession();
  } else if (pageName === 'navigator') {
    content.innerHTML = renderNavigator();
  } else if (pageName === 'cards') {
    content.innerHTML = renderCards();
  } else if (pageName === 'clubs') {
    content.innerHTML = renderClubs();
  } else if (pageName === 'notes') {
    content.innerHTML = renderNotes();
  } else if (pageName === 'about') {
    content.innerHTML = renderAbout();
  } else if (pageName === 'alumni-profile') {
    content.innerHTML = renderAlumniProfile();
  } else if (pageName === 'alumni-events') {
    content.innerHTML = renderAlumniEvents();
  } else if (pageName === 'alumni-endowment') {
    content.innerHTML = renderAlumniEndowment();
  } else if (pageName === 'alumni-fame') {
    content.innerHTML = renderAlumniFame();
  } else if (pageName === 'alumni-network') {
    content.innerHTML = renderAlumniNetwork();
  }
}

function renderHome() {
  // Calculate stats from transcript
  const exams = appData.transcript.filter(t => t.type === 'Экзамен');
  const tests = appData.transcript.filter(t => t.type === 'Зачёт');
  const completed = appData.transcript.filter(t => t.grade !== '');
  
  const examAvg = exams.length > 0 
    ? (exams.reduce((sum, g) => sum + (g.grade ? parseInt(g.grade) : 0), 0) / exams.filter(g => g.grade).length) 
    : 0;
  
  const passedCredits = completed.reduce((sum, g) => sum + (g.hours / 36), 0); // 36 часов = 1 з.е.
  
  // Модули для горизонтальной прокрутки (отсортировано по важности для студента)
  const modulesHtml = `
    <div class="modules-scroll">
      <div class="module-tile" onclick="showPage('attendance')">
        <svg class="icon"><use href="#icon-clock"/></svg>
        <span>Посещаемость</span>
      </div>
      <div class="module-tile" onclick="showPage('session')">
        <svg class="icon"><use href="#icon-clipboard"/></svg>
        <span>Сессия</span>
      </div>
      <div class="module-tile" onclick="showPage('navigator')">
        <svg class="icon"><use href="#icon-map"/></svg>
        <span>Навигатор</span>
      </div>
<div class="module-tile" onclick="showPage('clubs')">
        <svg class="icon"><use href="#icon-clubs"/></svg>
        <span>Клубы</span>
      </div>
      <div class="module-tile" onclick="showPage('notes')">
        <svg class="icon"><use href="#icon-notes"/></svg>
        <span>Заметки</span>
      </div>
      </div>
  `;
  
  // Лента событий
  const eventsHtml = `
    <div class="events-feed">
      <h3>Примеры событий · даты не заданы</h3>
      ${appData.events.map(e => `
        <div class="event-item">
          <div class="event-date" aria-label="Дата не задана">
            <span class="event-day">—</span>
            <span class="event-month">демо</span>
          </div>
          <div class="event-info">
            <h4>${e.name}</h4>
            <p>${e.time} • ${e.place}</p>
          </div>
          <span class="event-type">${e.type}</span>
        </div>
      `).join('')}
    </div>
  `;
  
  return `
    <div class="page-content">
      <div class="dashboard-grid">
        <div class="dashboard-card wide accent" style="grid-column:span 2" onclick="showPage('grades')">
          <div style="display:flex;align-items:center;gap:16px">
            <div style="flex:1">
              <svg class="icon" style="margin-bottom:8px"><use href="#icon-chart"/></svg>
              <h4>Успеваемость</h4>
              <p style="font-size:24px;font-weight:700">${examAvg > 0 ? examAvg.toFixed(1) : '—'} <span style="font-size:14px;font-weight:400">/ 5.0</span></p>
            </div>
            <div style="flex:1;border-left:1px solid rgba(255,255,255,0.1);padding-left:16px">
              <svg class="icon" style="margin-bottom:8px"><use href="#icon-book"/></svg>
              <h4>Часы</h4>
              <p style="font-size:24px;font-weight:700">${appData.transcript.reduce((s, g) => s + g.hours, 0)} <span style="font-size:14px;font-weight:400">ч.</span></p>
            </div>
          </div>
        </div>
        
        <div class="dashboard-card" onclick="showPage('attendance')">
          <svg class="icon"><use href="#icon-clock"/></svg>
          <h4>Посещ.</h4>
          <p>Не подключено</p>
        </div>
        
        <div class="dashboard-card" onclick="showPage('chat')">
          <svg class="icon"><use href="#icon-chat"/></svg>
          <h4>Чат</h4>
          <p>${appData.chats.length}</p>
        </div>
      </div>
      
      <div class="dashboard-card wide accent" style="margin-top:12px" onclick="showPage('session')">
        <div style="display:flex;align-items:center;gap:12px">
          <svg class="icon" style="font-size:32px"><use href="#icon-clipboard"/></svg>
          <div>
            <h4>До сессии</h4>
            <div style="font-size:18px;font-weight:700;color:var(--accent)">Сроки не заданы</div>
            <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">Расписание сессии не подключено</p>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1)">
          <div style="text-align:center">
            <div style="font-size:18px;font-weight:600">3</div>
            <div style="font-size:10px;color:var(--text-muted)">экзамена</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:18px;font-weight:600">4</div>
            <div style="font-size:10px;color:var(--text-muted)">зачёта</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:18px;font-weight:600">—</div>
            <div style="font-size:10px;color:var(--text-muted)">сроки не заданы</div>
          </div>
        </div>
      </div>
      
      ${modulesHtml}
      
      <div class="dashboard-card wide" style="margin-top:12px;cursor:pointer" onclick="showPage('about')">
        <h4>Профиль университета</h4>
        <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">Справочные данные и интеграции не подключены · открыть описание статуса</p>
      </div>
      
      ${eventsHtml}
    </div>
  `;
}

function renderGrades() {
  // Russian university transcript
  const transcript = appData.transcript;
  const semesters = [...new Set(transcript.map(t => t.semester))].sort((a, b) => b - a); // desc
  
  let html = '<div class="page-content"><div class="dashboard-card accent" style="margin-bottom:16px"><strong>Демонстрационная ведомость</strong><p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">Дисциплины, оценки, часы и зачётные единицы — иллюстративные данные, не полученные из системы университета.</p></div>';
  
  // Summary header
  const exams = transcript.filter(t => t.type === 'Экзамен' && t.grade);
  const passedExams = exams.filter(t => t.grade !== '2');
  const avg = passedExams.length > 0 
    ? (passedExams.reduce((sum, g) => sum + parseInt(g.grade), 0) / passedExams.length).toFixed(1) 
    : '—';
  
  const totalHours = transcript.reduce((s, g) => s + g.hours, 0);
  const totalCredits = Math.round(totalHours / 36);
  const passedCredits = transcript.filter(t => t.grade && (t.type === 'Зачёт' ? t.grade === 'зачтено' : t.grade !== '2'))
    .reduce((s, g) => s + g.hours, 0) / 36;
  
  html += `
    <div class="transcript-header">
      <div class="stat-box">
        <span class="stat-label">Средний балл</span>
        <span class="stat-value">${avg}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Часов</span>
        <span class="stat-value">${totalHours}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">З.Е.</span>
        <span class="stat-value">${passedCredits}/${totalCredits}</span>
      </div>
    </div>
  `;
  
  // Group by semester
  semesters.forEach(sem => {
    const items = transcript.filter(t => t.semester === sem);
    const semesterHours = items.reduce((s, g) => s + g.hours, 0);
    const semesterCredits = Math.round(semesterHours / 36);
    const examsInSem = items.filter(t => t.type === 'Экзамен');
    const semAvg = examsInSem.filter(e => e.grade).length > 0
      ? (examsInSem.filter(e => e.grade).reduce((s, g) => s + parseInt(g.grade), 0) / examsInSem.filter(e => e.grade).length).toFixed(1)
      : '—';
    
    html += `
      <div class="semester-block">
        <div class="semester-header">
          <span class="semester-num">Семестр ${sem}</span>
          <span class="semester-stats">${semesterHours} ч. / ${semesterCredits} з.е.</span>
        </div>
        <div class="transcript-table">
          <div class="table-header">
            <span>Дисциплина</span>
            <span>Ч.</span>
            <span>Оценка</span>
          </div>
    `;
    
    items.forEach(item => {
      const isExam = item.type === 'Экзамен';
      const grade = item.grade || '—';
      const gradeClass = !grade ? '' : isExam 
        ? (grade === '5' ? 'grade-5' : grade === '4' ? 'grade-4' : grade === '3' ? 'grade-3' : grade === '2' ? 'grade-2' : '')
        : (grade === 'зачтено' ? 'passed' : grade === 'незачтено' ? 'failed' : '');
      
      html += `
        <div class="table-row">
          <span class="discipline-name">
            <strong>${item.name}</strong>
            <small>${item.type}</small>
          </span>
          <span>${item.hours}</span>
          <span class="grade-cell ${gradeClass}">${grade}</span>
        </div>
      `;
    });
    
    if (parseFloat(semAvg) > 0) {
      html += `
        <div class="semester-avg">
          Средний балл за семестр: <strong>${semAvg}</strong>
        </div>
      `;
    }
    
    html += '</div></div>';
  });
  
  html += '</div>';
  return html;
}

function formatWeekRange(weekKey) {
  const start = new Date(weekKey + 'T12:00:00');
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  const format = (date) => date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
  return format(start) + ' — ' + format(end);
}

function renderScheduleWeek(weekKey) {
  const lessons = appData.scheduleFull[weekKey] || [];
  if (!lessons.length) {
    return '<div class="dashboard-card"><p>Данные для этой недели не заданы.</p></div>';
  }

  const days = new Map();
  lessons.forEach((lesson) => {
    if (!days.has(lesson.day)) days.set(lesson.day, []);
    days.get(lesson.day).push(lesson);
  });

  return Array.from(days.entries()).map(([day, dayLessons]) => `
    <div class="schedule-day">
      <div class="day-header">${day}</div>
      <div class="day-lessons">
        ${dayLessons.map((lesson) => `
          <div class="lesson-item">
            <div class="lesson-time">${lesson.time}</div>
            <div class="lesson-info">
              <h4>${lesson.name}</h4>
              <p>${lesson.type} • ${lesson.room} • ${lesson.teacher}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderSchedule() {
  const dates = Object.keys(appData.scheduleFull).sort();
  if (!dates.length) {
    return '<div class="page-content"><h3>Расписание</h3><p>Данные пока не заданы.</p></div>';
  }

  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const currentWeek = dates.find((key) => {
    const start = new Date(key + 'T12:00:00');
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return today >= start && today <= end;
  }) || dates[0];

  return `
    <div class="page-content">
      <h3>Расписание</h3>
      <p style="font-size:12px;color:var(--text-muted);line-height:1.55">Иллюстративный пример на две недели. Расписание, аудитории и преподаватели не загружены из системы университета.</p>
      <div class="week-selector" aria-label="Выбор демонстрационной недели">
        ${dates.map((date, index) => `
          <button class="week-btn ${date === currentWeek ? 'active' : ''}" type="button" data-week-key="${date}" aria-pressed="${date === currentWeek}" onclick="showWeek('${date}', this)">
            <span class="week-label">Демо-неделя ${index + 1}</span>
            <span class="week-dates">${formatWeekRange(date)}</span>
          </button>
        `).join('')}
      </div>
      <div class="schedule-week" id="scheduleWeek" aria-live="polite">
        ${renderScheduleWeek(currentWeek)}
      </div>
    </div>
  `;
}

function showWeek(weekKey) {
  if (!appData.scheduleFull[weekKey]) return;
  const scheduleWeek = document.getElementById('scheduleWeek');
  if (!scheduleWeek) return;

  scheduleWeek.innerHTML = renderScheduleWeek(weekKey);
  document.querySelectorAll('.week-btn').forEach((button) => {
    const active = button.dataset.weekKey === weekKey;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function renderChat() {
  let html = '<div class="page-content"><h3>Чаты</h3><div class="chat-list">';
  
  // Use emoji avatars for chat (simple)
  const avatars = {'Деканат': '<svg class="icon" style="width:18px;height:18px"><use href="#icon-wallet-giftcard"/></svg>', 'Куратор Иванова': '<svg class="icon" style="width:18px;height:18px"><use href="#icon-user"/></svg>', 'Студсовет': '<svg class="icon" style="width:18px;height:18px"><use href="#icon-union"/></svg>', 'Профком': '<svg class="icon" style="width:18px;height:18px"><use href="#icon-megaphone"/></svg>'};
  appData.chats.forEach(c => {
    const avatar = avatars[c.name] || '<svg class="icon" style="width:18px;height:18px"><use href="#icon-user"/></svg>';
    html += `
      <div class="chat-item">
        <div class="chat-avatar">${avatar}</div>
        <div class="chat-info">
          <h4>${c.name}</h4>
          <p>${c.lastMsg}</p>
        </div>
        <div class="chat-time">${c.time}</div>
      </div>
    `;
  });
  
  html += '</div></div>';
  return html;
}

function renderProfile() {
  const p = appData.profile;
  const subs = p.subscriptions;
  
  // Список категорий событий
  const eventCategories = [
    { id: 'schedule', name: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-calendar"/></svg> Расписание', desc: 'Экзамены, зачёты, консультации' },
    { id: 'dekanat', name: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-wallet-giftcard"/></svg> Деканат', desc: 'Объявления от деканата' },
    { id: 'institute', name: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-wallet-giftcard"/></svg> Институт', desc: 'Мероприятия института' },
    { id: 'clubs', name: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-target"/></svg> Клубы', desc: 'События клубов' },
    { id: 'career', name: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-briefcase"/></svg> Карьера', desc: 'Вакансии, ярмарки' },
    { id: 'science', name: '<svg class="icon" style="width:18px;height:18px"><use href="#icon-science"/></svg> Наука', desc: 'Конференции, исследования' }
  ];
  
  // Список клубов
  const clubs = [
    { id: 'sports', name: 'Спортивные секции', icon: 'soccer' },
    { id: 'songs', name: 'Клуб авторской песни', icon: 'music' },
    { id: 'it', name: 'IT-клуб', icon: 'school' },
    { id: 'art', name: 'Творческая мастерская', icon: 'palette' },
    { id: 'debate', name: 'Дискуссионный клуб', icon: 'speech' },
    { id: 'science', name: 'Научное общество', icon: 'science' },
    { id: 'energy', name: 'Энергетический клуб', icon: 'lightning' },
    { id: 'languages', name: 'Клуб иностранных языков', icon: 'globe' }
  ];
  
  return `
    <div class="page-content">
      <div class="profile-card">
        <div class="profile-avatar">${p.avatar}</div>
        <h3>${p.name}</h3>
        <p class="profile-group">${p.group}</p>
      </div>
      
      <div class="profile-info">
        <div class="info-row">
          <span class="info-label">Факультет</span>
          <span class="info-value">${p.faculty}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Курс</span>
          <span class="info-value">${p.course}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Форма обучения</span>
          <span class="info-value">${p.form}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-value">${p.email}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Телефон</span>
          <span class="info-value">${p.phone}</span>
        </div>
      </div>
      
      <!-- Подписки на события -->
      <div style="margin-top:20px">
        <h4 style="font-size:16px;margin-bottom:12px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-bell"/></svg>Подписки на события</h4>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">Выберите категории событий для ленты</p>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${eventCategories.map(cat => `
            <div class="dashboard-card" style="padding:10px 12px;cursor:pointer" onclick="toggleCategory('${cat.id}')">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div>
                  <div style="font-size:14px;font-weight:600">${cat.name}</div>
                  <div style="font-size:11px;color:var(--text-muted)">${cat.desc}</div>
                </div>
                <div style="width:40px;height:22px;border-radius:11px;background:${subs.eventCategories.includes(cat.id) ? 'var(--primary)' : 'rgba(255,255,255,0.15)'};position:relative;transition:0.3s">
                  <div style="width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:2px;${subs.eventCategories.includes(cat.id) ? 'right:2px' : 'left:2px'};transition:0.3s"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Мои клубы -->
      <div style="margin-top:20px">
        <h4 style="font-size:16px;margin-bottom:12px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-target"/></svg>Мои клубы</h4>
        <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">Запишитесь в клубы для участия в мероприятиях</p>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
          ${clubs.map(club => {
            const isMember = subs.clubs.includes(club.id);
            return `
              <div class="dashboard-card" style="padding:12px;text-align:center;cursor:pointer;${isMember ? 'border:2px solid var(--primary)' : ''}" onclick="toggleClub('${club.id}')">
                <div style="margin-bottom:6px"><svg class="icon" style="width:24px;height:24px"><use href="#icon-${club.icon}"/></svg></div>
                <div style="font-size:12px;font-weight:600">${club.name}</div>
                <div style="font-size:10px;color:${isMember ? 'var(--primary)' : 'var(--text-muted)'};margin-top:4px">${isMember ? '✓ Участник' : '+ Записаться'}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderQR() {
  const p = appData.profile;
  return `
    <div class="page-content">
      <div class="qr-card">
        <div class="qr-code">
          <div class="qr-placeholder" role="img" aria-label="Декоративный макет QR-кода, не предназначенный для сканирования"><span>ДЕМО</span></div>
        </div>
        <p class="qr-name">${p.name}</p>
        <p class="qr-group">${p.group}</p>
        <p class="qr-room">${p.room}</p>
      </div>
      <p class="qr-hint">Декоративный макет · не предназначен для сканирования или прохода</p>
    </div>
  `;
}

function openMoodle() {
  alert('Внешняя учебная система не подключена в этом прототипе.');
}

function openPayment() {
  alert('Платёжная система не подключена в этом прототипе. Реальная оплата через приложение недоступна.');
}

function renderCareer() {
  return `
    <div class="page-content">
      <h3>Вакансии и стажировки</h3>
      <div class="list">
        ${appData.careers.map(c => `
          <div class="list-item">
            <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-briefcase"/></svg></div>
            <div class="list-info">
              <h4>${c.position}</h4>
              <p>${c.company} • ${c.location}</p>
              <span class="salary">${c.salary}</span>
            </div>
            <span class="badge">${c.type}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderBenefits() {
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-tag"/></svg>Льготы и скидки</h3>
      <div class="list">
        ${appData.benefits.map(b => `
          <div class="list-item">
            <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-tag"/></svg></div>
            <div class="list-info">
              <h4>${b.name}</h4>
              <p>${b.desc}</p>
              <span class="valid">${b.valid}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderEventsFeed() {
  // Группировка событий по категориям
  const examEvents = appData.events.filter(e => e.type === 'Экзамен' || e.type === 'Зачёт' || e.type === 'Консультация');
  const clubEvents = appData.events.filter(e => e.club);
  const otherEvents = appData.events.filter(e => !e.club && e.type !== 'Экзамен' && e.type !== 'Зачёт' && e.type !== 'Консультация');
  
  let html = '<div class="page-content"><div class="dashboard-card accent" style="margin-bottom:16px"><strong>Иллюстративные карточки</strong><p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">Даты, места и расписание событий не заданы; анонсы и регистрация не подключены.</p></div>';
  
  // Сессия
  if (examEvents.length > 0) {
    html += '<h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-doc"/></svg>Сессия</h3>';
    html += '<div class="events-full">';
    examEvents.forEach(e => {
      html += `
        <div class="event-card" style="border-left:3px solid var(--primary)">
          <div class="event-date-card" aria-label="Дата не задана">
            <span class="day">—</span>
            <span class="month">демо</span>
          </div>
          <div class="event-details">
            <h4>${e.name}</h4>
            <p>${e.time} • ${e.place}</p>
            <span class="event-type" style="background:var(--primary)">${e.type}</span>
          </div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  // Клубы
  if (clubEvents.length > 0) {
    html += '<h3 style="margin-top:20px"><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-target"/></svg>Клубы и секции</h3>';
    html += '<div class="events-full">';
    clubEvents.forEach(e => {
      html += `
        <div class="event-card" style="border-left:3px solid var(--accent)">
          <div class="event-date-card" aria-label="Дата не задана">
            <span class="day">—</span>
            <span class="month">демо</span>
          </div>
          <div class="event-details">
            <h4>${e.name}</h4>
            <p>${e.time} • ${e.place}</p>
            <span class="event-type" style="background:var(--secondary)">${e.type}</span>
            ${e.club ? `<span style="font-size:11px;color:var(--text-muted);display:block;margin-top:4px"><svg class="icon" style="width:12px;height:12px;margin-right:4px;vertical-align:middle"><use href="#icon-tag"/></svg>${e.club}</span>` : ''}
          </div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  // Общие
  if (otherEvents.length > 0) {
    html += '<h3 style="margin-top:20px"><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-calendar"/></svg>Мероприятия</h3>';
    html += '<div class="events-full">';
    otherEvents.forEach(e => {
      html += `
        <div class="event-card">
          <div class="event-date-card" aria-label="Дата не задана">
            <span class="day">—</span>
            <span class="month">демо</span>
          </div>
          <div class="event-details">
            <h4>${e.name}</h4>
            <p>${e.time} • ${e.place}</p>
            <span class="event-type">${e.type}</span>
          </div>
        </div>
      `;
    });
    html += '</div>';
  }
  
  html += '</div>';
  return html;
}

function renderAttendance() {
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-chart"/></svg>Посещаемость</h3>
      <div class="dashboard-card accent" style="margin-top:16px">
        <strong>Данные не подключены</strong>
        <p style="font-size:13px;color:var(--text-muted);line-height:1.6;margin-top:8px">Прототип не получает сведения о посещаемости. Показатели, источники данных, права доступа и правила расчёта должны быть определены и проверены в рамках отдельного пилота.</p>
      </div>
      <div class="list" style="margin-top:12px">
        <div class="list-item"><div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-calendar"/></svg></div><div class="list-info"><h4>Посещения занятий</h4><p>Источник данных не подключён</p></div></div>
        <div class="list-item"><div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-shield"/></svg></div><div class="list-info"><h4>Доступ к данным</h4><p>Требует отдельного согласования</p></div></div>
      </div>
    </div>
  `;
}

function renderSession() {
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-clipboard"/></svg>Зимняя сессия</h3>
      <div class="dashboard-card accent" style="margin-bottom:20px">
        <div class="stat-label">Демонстрационный статус · сроки не подключены</div>
        <div class="stat-value" style="color:#f59e0b">Не задано</div>
      </div>
      <h4>Экзамены</h4>
      <div class="list">
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-book"/></svg></div>
          <div class="list-info">
            <h4>Базы данных</h4>
            <p>Дата и аудитория не заданы</p>
          </div>
        </div>
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-book"/></svg></div>
          <div class="list-info">
            <h4>Машинное обучение</h4>
            <p>Дата и аудитория не заданы</p>
          </div>
        </div>
      </div>
      <h4>Зачёты</h4>
      <div class="list">
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-check"/></svg></div>
          <div class="list-info">
            <h4>Веб-разработка</h4>
            <p>Демонстрационный статус · данные не подключены</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderNavigator() {
  const nav = appData.navigator;
  let html = '<div class="page-content">';
  html += '<h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-map"/></svg>Навигатор кампуса (пример)</h3>';
  
  // Корпуса
  html += '<h4><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-building"/></svg>Корпуса</h4>';
  html += '<div class="list">';
  nav.buildings.forEach(b => {
    html += `
      <div class="list-item">
        <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-building"/></svg></div>
        <div class="list-info">
          <h4>${b.name}</h4>
          <p>${b.address}</p>
          <p style="font-size:11px;color:var(--primary)">${b.floors[0]}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  
  // Факультеты
  html += '<h4 style="margin-top:16px"><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-grad"/></svg>Факультеты</h4>';
  html += '<div class="list">';
  nav.faculties.forEach(f => {
    html += `
      <div class="list-item">
        <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-grad"/></svg></div>
        <div class="list-info">
          <h4>${f.name}</h4>
          <p>${f.building}, ${f.floor}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  
  // Полезные места
  html += '<h4 style="margin-top:16px"><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-location"/></svg>Аудитории и сервисы</h4>';
  html += '<div class="list">';
  nav.pointsOfInterest.forEach(p => {
    html += `
      <div class="list-item">
        <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-${p.icon}"/></svg></div>
        <div class="list-info">
          <h4>${p.name}</h4>
          <p>${p.location}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  
  html += '</div>';
  return html;
}

function renderCards() {
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-wallet-giftcard"/></svg>Мои пропуска</h3>
      <div class="dashboard-card accent" style="margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:12px">
          <div><svg class="icon" style="width:32px;height:32px"><use href="#icon-grad"/></svg></div>
          <div>
            <div style="font-weight:600">Студенческий билет</div>
            <div style="font-size:12px;color:var(--text-muted)">Демо-макет · не является документом</div>
          </div>
        </div>
        <div style="margin-top:12px;padding:8px;background:rgba(255,255,255,0.1);border-radius:8px;text-align:center">
          <div style="font-size:12px;color:var(--text-muted)">QR-код для прохода</div>
          <div style="font-family:monospace;margin-top:4px">████████████</div>
        </div>
      </div>
      <div class="dashboard-card" style="margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:12px">
          <div><svg class="icon" style="width:32px;height:32px"><use href="#icon-wallet-giftcard"/></svg></div>
          <div>
            <div style="font-weight:600">Транспортная карта</div>
            <div style="font-size:12px;color:var(--text-muted)">Баланс не подключён</div>
          </div>
        </div>
      </div>
      <div class="dashboard-card" style="margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="qr-placeholder qr-placeholder-small" role="img" aria-label="Декоративный макет QR-кода, не предназначенный для сканирования"><span>ДЕМО</span></div>
          <div>
            <div style="font-weight:600">Пропуск в общежитие</div>
            <div style="font-size:12px;color:var(--text-muted)">Данные о жилье не подключены</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderClubs() {
  const clubs = [
    {
      id: 'sports',
      name: 'Спортивные секции',
      icon: 'soccer',
      description: 'Футбол, баскетбол, волейбол, плавание, лёгкая атлетика',
      schedule: [
        { day: 'Понедельник', time: '18:00-20:00', activity: 'Волейбол (зал)' },
        { day: 'Среда', time: '18:00-20:00', activity: 'Баскетбол (зал)' },
        { day: 'Пятница', time: '17:00-19:00', activity: 'Плавание (бассейн)' },
        { day: 'Суббота', time: '10:00-13:00', activity: 'Турнир по мини-футу' }
      ],
      leader: 'Сидоров А.В.',
      location: 'Спортивный комплекс'
    },
    {
      id: 'songs',
      name: 'Клуб авторской песни',
      icon: 'music',
      description: 'Поэзия, гитара, авторские песни, концерты, бардовские вечера',
      schedule: [
        { day: 'Вторник', time: '19:00-21:00', activity: 'Репетиция (ауд. 305)' },
        { day: 'Четверг', time: '19:00-21:00', activity: 'Мастер-класс по гитаре' },
        { day: '15 числа', time: '20:00-22:00', activity: 'Концерт бардов (актовый зал)' }
      ],
      leader: 'Петрова О.Н.',
      location: '3 этаж, каб. 305'
    },
    {
      id: 'it',
      name: 'IT-клуб',
      icon: 'school',
      description: 'Хакатоны, митапы, соревнования, изучение технологий',
      schedule: [
        { day: 'Понедельник', time: '18:30-20:30', activity: 'Python-митап' },
        { day: 'Среда', time: '18:30-20:30', activity: 'Frontend-разработка' },
        { day: 'Суббота', time: '10:00-18:00', activity: 'Хакатон (раз в месяц)' },
        { day: 'По запросу', time: '', activity: 'Встречи с работодателями' }
      ],
      leader: 'Козлов Д.А.',
      location: 'Лаборатория 201'
    },
    {
      id: 'art',
      name: 'Творческая мастерская',
      icon: 'palette',
      description: 'Рисунок, живопись, дизайн, фотография, видеосъёмка',
      schedule: [
        { day: 'Вторник', time: '17:00-19:00', activity: 'Рисунок и живопись' },
        { day: 'Четверг', time: '17:00-19:00', activity: 'Цифровой дизайн (Figma)' },
        { day: 'Суббота', time: '12:00-15:00', activity: 'Фотопрогулка / съёмка' }
      ],
      leader: 'Михайлова Е.С.',
      location: 'Ауд. 412 (мастерская)'
    },
    {
      id: 'debate',
      name: 'Дискуссионный клуб',
      icon: 'speech',
      description: 'Дебаты, дискуссии, круглые столы, ораторское мастерство',
      schedule: [
        { day: 'Среда', time: '18:00-20:00', activity: 'Подготовка к дебатам' },
        { day: 'Пятница', time: '18:00-20:00', activity: 'Турнир дебатов' },
        { day: '1-й четверг', time: '19:00-21:00', activity: 'Круглый стол с экспертами' }
      ],
      leader: 'Волков П.И.',
      location: 'Конференц-зал'
    },
    {
      id: 'science',
      name: 'Научное общество',
      icon: 'science',
      description: 'Конференции, исследования, публикации, гранты',
      schedule: [
        { day: 'Понедельник', time: '16:00-18:00', activity: 'Семинар: обсуждение проектов' },
        { day: 'Пятница', time: '16:00-18:00', activity: 'Подготовка публикаций' },
        { day: 'Ежемесячно', time: '', activity: 'Научная конференция' }
      ],
      leader: 'проф. Иванов С.П.',
      location: 'Научная библиотека'
    },
    {
      id: 'energy',
      name: 'Энергетический клуб',
      icon: 'lightning',
      description: 'Инженерные проекты, робототехника, соревнования',
      schedule: [
        { day: 'Вторник', time: '17:00-19:00', activity: 'Работа над проектом' },
        { day: 'Четверг', time: '17:00-19:00', activity: 'Сборка роботов' },
        { day: 'Суббота', time: '10:00-14:00', activity: 'Тестирование моделей' }
      ],
      leader: 'Новиков К.М.',
      location: 'Лаборатория робототехники'
    },
    {
      id: 'languages',
      name: 'Клуб иностранных языков',
      icon: 'globe',
      description: 'Английский, немецкий, китайский; разговорные клубы',
      schedule: [
        { day: 'Понедельник', time: '18:00-19:30', activity: 'Английский разговорный клуб' },
        { day: 'Среда', time: '18:00-19:30', activity: 'Немецкий язык' },
        { day: 'Пятница', time: '18:00-19:30', activity: 'Китайский язык' }
      ],
      leader: 'Смирнова А.В.',
      location: 'Ауд. 215'
    }
  ];

  let html = '<div class="page-content"><h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-target"/></svg>Секции и клубы</h3>';
  
  clubs.forEach(club => {
    html += `
      <div class="dashboard-card" style="margin-bottom:16px">
        <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px">
          <div><svg class="icon" style="width:28px;height:28px"><use href="#icon-${club.icon}"/></svg></div>
          <div style="flex:1">
            <h4 style="margin:0 0 4px">${club.name}</h4>
            <p style="margin:0;font-size:12px;color:var(--text-muted)">${club.description}</p>
            <p style="margin:4px 0 0;font-size:11px;color:var(--primary)"><svg class="icon" style="width:12px;height:12px;margin-right:4px;vertical-align:middle"><use href="#icon-user"/></svg>${club.leader} • <svg class="icon" style="width:12px;height:12px;margin-right:4px;vertical-align:middle"><use href="#icon-location"/></svg>${club.location}</p>
          </div>
        </div>
        <div style="background:var(--bg-card);border-radius:8px;padding:8px">
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px"><svg class="icon" style="width:12px;height:12px;margin-right:4px;vertical-align:middle"><use href="#icon-calendar"/></svg>Расписание:</div>
          ${club.schedule.map(s => `
            <div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px">
              <span style="color:var(--primary)">${s.day}</span>
              <span style="color:var(--text-muted)">${s.time || ''}</span>
              <span style="flex:1;text-align:right;margin-left:8px">${s.activity}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

// Главная страница выпускника
function renderAlumniHome() {
  const alum = appData.alumni;
  const profile = alum.profile;
  
  // Ближайшие события
  const upcomingEvents = alum.events.slice(0, 3);
  
  // Программы эндаумента
  const topPrograms = alum.endowment.programs.slice(0, 2);
  
  let html = `
    <div class="page-content">
      <!-- Приветствие выпускника -->
      <div class="dashboard-card accent" style="margin-bottom:20px">
        <div style="display:flex;align-items:center;gap:16px">
          <div><svg class="icon" style="width:48px;height:48px"><use href="#icon-grad"/></svg></div>
          <div>
            <h3 style="margin:0">Режим выпускника</h3>
            <p style="margin:6px 0 0;font-size:13px;color:var(--text-muted)">Демонстрационный профиль · сведения не подтверждены</p>
          </div>
        </div>
      </div>
      
      <!-- Модули быстрого доступа -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">
        <div class="module-tile" onclick="showPage('alumni-profile')">
          <div><svg class="icon" style="width:24px;height:24px"><use href="#icon-user"/></svg></div>
          <span style="font-size:11px">Профиль</span>
        </div>
        <div class="module-tile" onclick="showPage('alumni-events')">
          <div><svg class="icon" style="width:24px;height:24px"><use href="#icon-calendar"/></svg></div>
          <span style="font-size:11px">События</span>
        </div>
        <div class="module-tile" onclick="showPage('alumni-endowment')">
          <div><svg class="icon" style="width:24px;height:24px"><use href="#icon-wallet-giftcard"/></svg></div>
          <span style="font-size:11px">Поддержка</span>
        </div>
        <div class="module-tile" onclick="showPage('alumni-fame')">
          <div><svg class="icon" style="width:24px;height:24px"><use href="#icon-trophy"/></svg></div>
          <span style="font-size:11px">Доска почёта</span>
        </div>
        <div class="module-tile" onclick="showPage('alumni-network')">
          <div><svg class="icon" style="width:24px;height:24px"><use href="#icon-globe"/></svg></div>
          <span style="font-size:11px">Сеть</span>
        </div>
        <div class="module-tile" onclick="showPage('navigator')">
          <div><svg class="icon" style="width:24px;height:24px"><use href="#icon-map"/></svg></div>
          <span style="font-size:11px">Навигатор</span>
        </div>
      </div>
      
      <!-- Иллюстративные события -->
      <h4 style="font-size:16px;margin-bottom:12px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-calendar"/></svg>Возможные форматы событий</h4>
      <p style="font-size:12px;color:var(--text-muted);margin:-6px 0 12px">Иллюстративные карточки · даты и площадки не заданы</p>
      ${upcomingEvents.map(e => `
        <div class="dashboard-card" style="margin-bottom:12px;cursor:pointer" onclick="toggleEventRSVP(${e.id}, 'home')">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div style="flex:1">
              <div style="font-weight:600;font-size:14px">${e.title}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${e.date} · ${e.time} · ${e.place}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${e.description.substring(0, 60)}...</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:11px;color:var(--text-muted)">Участие не отправляется</div>
              <div style="font-size:12px;font-weight:600;color:${e.registered ? 'var(--primary)' : 'var(--text-muted)'};margin-top:4px">
                ${e.registered ? '✓ Интерес отмечен в демо' : '+ Отметить интерес в демо'}
              </div>
            </div>
          </div>
        </div>
      `).join('')}
      <div class="dashboard-card" style="text-align:center;padding:12px;margin-bottom:20px" onclick="showPage('alumni-events')">
        <span style="color:var(--primary);font-size:13px">Все события →</span>
      </div>
      
      <!-- Возможные инициативы поддержки: это не сбор средств -->
      <h4 style="font-size:16px;margin-bottom:8px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-wallet-giftcard"/></svg>Инициативы поддержки · концепт</h4>
      <p style="font-size:12px;color:var(--text-muted);margin-bottom:12px">Нет фонда, сумм или платёжного подключения. Возможные форматы обсуждаются отдельно.</p>
      ${topPrograms.map(program => `
        <div class="dashboard-card" style="margin-bottom:12px;cursor:pointer" onclick="showPage('alumni-endowment')">
          <div style="font-weight:600;font-size:14px">${program.name}</div>
          <p style="font-size:12px;color:var(--text-muted);margin-top:6px">Пример сценария · условия не заданы</p>
        </div>
      `).join('')}
      <div class="dashboard-card" style="text-align:center;padding:12px;margin-bottom:20px;cursor:pointer" onclick="showPage('alumni-endowment')">
        <span style="color:var(--primary);font-size:13px">Обсудить формат поддержки →</span>
      </div>
      
      <h4 style="font-size:16px;margin-bottom:8px">Истории выпускников · концепт</h4>
      <div class="dashboard-card" style="margin-bottom:20px;cursor:pointer" onclick="showPage('alumni-fame')">
        <p style="font-size:12px;color:var(--text-muted);line-height:1.55">Профили и достижения не загружены. Публикация возможна только с согласия человека и после проверки сведений.</p>
        <div style="text-align:right;padding-top:8px;font-size:12px;color:var(--primary)">Статус данных →</div>
      </div>
    </div>
  `;
  
  return html;
}

// Переключение RSVP на событие
function toggleEventRSVP(eventId, fromPage) {
  const event = appData.alumni.events.find(e => e.id === eventId);
  if (event) {
    event.registered = !event.registered;
    
    // Перерисовать текущую страницу в зависимости от того, где находимся
    if (userMode === 'graduate') {
      if (fromPage === 'alumni-events') {
        document.getElementById('content').innerHTML = renderAlumniEvents();
      } else {
        document.getElementById('content').innerHTML = renderAlumniHome();
      }
    }
  }
}

// Профиль выпускника
function renderAlumniProfile() {
  const p = appData.alumni.profile;
  const registeredEvents = appData.alumni.events.filter(e => e.registered);
  
  return `
    <div class="page-content">
      <div class="profile-card" style="text-align:center">
        <div class="profile-avatar" style="width:80px;height:80px;font-size:32px">${p.photo}</div>
        <h3 style="margin-top:12px">${p.name}</h3>
        <p class="profile-group">Год выпуска: ${p.graduationYear}</p>
        <p style="font-size:14px;color:var(--text-muted)">${p.specialty}</p>
      </div>
      
      ${registeredEvents.length > 0 ? `
        <h4 style="margin:20px 0 12px;font-size:16px">Пропуск на мероприятие</h4>
        ${registeredEvents.slice(0,1).map(e => `
          <div class="dashboard-card accent" style="margin-bottom:16px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
              <svg class="icon" style="width:32px;height:32px"><use href="#icon-qr"/></svg>
              <div>
                <div style="font-weight:600">${e.title}</div>
                <div style="font-size:12px;color:var(--text-muted)">${e.date} · ${e.time}</div>
                <div style="font-size:12px;color:var(--text-muted)">${e.place}</div>
              </div>
            </div>
            <div class="qr-placeholder" role="img" aria-label="Декоративный макет QR-кода, не предназначенный для сканирования"><span>ДЕМО</span></div>
            <p style="text-align:center;font-size:12px;color:var(--text-muted);margin-top:8px">Макет пропуска · для входа не действует</p>
          </div>
        `).join('')}
      ` : `
        <h4 style="margin:20px 0 12px;font-size:16px">Пропуск на мероприятие</h4>
        <div class="dashboard-card" style="text-align:center;padding:20px">
          <svg class="icon" style="width:40px;height:40px;margin-bottom:8px;opacity:0.5"><use href="#icon-qr"/></svg>
          <p style="font-size:14px;color:var(--text-muted)">Демонстрационная отметка не создаёт регистрацию и не выдаёт реальный пропуск.</p>
        </div>
      `}
      
      <div class="profile-info">
        <div class="info-row">
          <span class="info-label">Текущая работа</span>
          <span class="info-value">${p.work.position}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Компания</span>
          <span class="info-value">${p.work.company}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-value">${p.email}</span>
        </div>
      </div>
      
      <h4 style="margin:20px 0 12px;font-size:16px">Карьера</h4>
      ${p.careerHistory.map(job => `
        <div class="dashboard-card" style="margin-bottom:12px">
          <div style="font-weight:600;font-size:14px">${job.position}</div>
          <div style="font-size:13px;color:var(--text-muted)">${job.company}</div>
          <div style="font-size:12px;color:var(--primary);margin-top:4px">${job.years}</div>
        </div>
      `).join('')}
      
      <h4 style="margin:20px 0 12px;font-size:16px">О себе</h4>
      <div class="dashboard-card">
        <p style="font-size:14px;line-height:1.5">${p.about}</p>
      </div>
    </div>
  `;
}

// События выпускников
function renderAlumniEvents() {
  const events = appData.alumni.events;
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-calendar"/></svg>События для выпускников</h3>
      <p style="font-size:12px;color:var(--text-muted);margin:8px 0 14px">Иллюстративные карточки. Нажатие меняет только локальное состояние экрана — регистрация не отправляется.</p>
      ${events.map(e => `
        <div class="dashboard-card" style="margin-bottom:16px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
            <div>
              <div style="font-weight:600;font-size:15px">${e.title}</div>
              <div style="font-size:13px;color:var(--text-muted);margin-top:4px">${e.date} · ${e.time}</div>
              <div style="font-size:12px;color:var(--text-muted)"><svg class="icon" style="width:12px;height:12px;margin-right:4px;vertical-align:middle"><use href="#icon-location"/></svg>${e.place}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:12px;color:var(--text-muted)">Участие не отправляется</div>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-muted);margin:8px 0">${e.description}</p>
          <button onclick="toggleEventRSVP(${e.id}, 'alumni-events')" style="width:100%;padding:10px;background:${e.registered ? 'var(--accent)' : 'var(--primary)'};border:none;border-radius:8px;color:#fff;font-weight:600;cursor:pointer">
            ${e.registered ? '✓ Интерес отмечен в демо' : 'Отметить интерес в демо'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

// Эндаумент-фонд
function renderAlumniEndowment() {
  const support = appData.alumni.endowment;
  return `
    <div class="page-content">
      <div class="dashboard-card accent" style="margin-bottom:16px">
        <h3 style="margin:0 0 8px">Инициативы поддержки</h3>
        <p style="font-size:14px;color:var(--text-muted);line-height:1.55">${support.description}</p>
      </div>
      <div class="dashboard-card" style="margin-bottom:16px;border-color:rgba(255,190,90,.35)">
        <strong style="font-size:13px">Экран-концепт</strong>
        <p style="font-size:12px;color:var(--text-muted);margin-top:6px">Реального фонда, сбора средств, платёжной формы или подтверждённых программ здесь нет. Указанные ниже карточки — только примеры интерфейса.</p>
      </div>
      ${support.programs.map(program => `
        <article class="dashboard-card" style="margin-bottom:12px">
          <div style="font-weight:600;font-size:14px">${program.name}</div>
          <p style="font-size:13px;color:var(--text-muted);margin:8px 0 0;line-height:1.5">${program.description}</p>
          <button type="button" onclick="showSupportInfo()" style="width:100%;margin-top:12px;padding:10px;background:var(--primary);border:none;border-radius:8px;color:#fff;font-weight:600;cursor:pointer">Обсудить формат поддержки</button>
        </article>
      `).join('')}
    </div>
  `;
}

function showSupportInfo() {
  alert('Это только интерфейсный пример: платёжного подключения и действующего сбора нет. Рассматриваются безвозвратные форматы поддержки — спонсорство или благотворительность; кредит и инвестиции не предлагаются. Условия, отчётность, права и возможное участие спонсора согласуются отдельно.');
}

// Доска почёта
function renderAlumniFame() {
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-trophy"/></svg>Истории выпускников</h3>
      <div class="dashboard-card accent" style="margin:16px 0">
        <p style="font-size:14px;line-height:1.6">Публикации и достижения не загружены. В рабочем проекте их можно размещать только после проверки сведений и получения согласия человека.</p>
      </div>
    </div>
  `;
}

// Профессиональная сеть
function renderAlumniNetwork() {
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-globe"/></svg>Сеть выпускников</h3>
      <div class="dashboard-card accent" style="margin:16px 0;padding:16px">
        <p style="font-size:14px;line-height:1.6">Поиск и профили — часть концепции. Реальные пользовательские данные и каталог выпускников не подключены.</p>
      </div>
      <label for="alumniSearch" style="display:block;margin-bottom:8px;font-size:13px">Демонстрационный поиск</label>
      <input id="alumniSearch" type="search" disabled placeholder="Каталог не подключён" style="width:100%;padding:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;color:var(--text-muted)">
    </div>
  `;
}

function renderNotes() {
  const notes = appData.notes;
  
  let html = '<div class="page-content">';
  html += '<h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-notes"/></svg>Заметки по предметам</h3>';
  
  notes.forEach(subject => {
    html += `
      <div class="dashboard-card" style="margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <div style="font-size:28px">${subject.icon}</div>
          <div style="flex:1">
            <h4 style="margin:0">${subject.subject}</h4>
            <p style="margin:4px 0 0;font-size:12px;color:var(--text-muted)">${subject.topics.length} заметок</p>
          </div>
        </div>
        <div style="background:var(--bg-card);border-radius:8px;padding:8px">
          ${subject.topics.map(topic => `
            <div style="padding:8px;border-bottom:1px solid rgba(255,255,255,0.05);cursor:pointer" onclick="alert('Заметка: ${topic.title}\\n\\n${topic.content}')">
              <div style="font-size:13px;font-weight:500;margin-bottom:4px">${topic.title}</div>
              <div style="font-size:11px;color:var(--text-muted)">${topic.content.substring(0, 60)}...</div>
              <div style="font-size:10px;color:var(--primary);margin-top:4px">Обновлено: ${topic.updated}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

function renderAbout() {
  const about = appData.aboutInstitute;
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:18px;height:18px"><use href="#icon-grad"/></svg> ${about.title}</h3>
      <div class="dashboard-card accent" style="margin:16px 0">
        <p style="font-size:14px;color:var(--text-muted);line-height:1.6">${about.description}</p>
        <p style="font-size:13px;color:var(--primary);margin-top:12px">${about.address}</p>
      </div>
      <div class="dashboard-card">
        <h4 style="margin-bottom:8px">Статус данных</h4>
        <p style="font-size:13px;color:var(--text-muted);line-height:1.6">История, статистика, структура и контакты вуза не загружены. Этот экран — демонстрация возможного раздела, а не официальная информация учебного заведения.</p>
      </div>
    </div>
  `;
}

// Status bar
function updateStatus() {
  const battery = Math.floor(Math.random() * 10) + 90;
  document.querySelector('.status-bar').textContent = battery + '%';
}

// Подписки - переключение категорий событий
function toggleCategory(categoryId) {
  const subs = appData.profile.subscriptions;
  const idx = subs.eventCategories.indexOf(categoryId);
  if (idx > -1) {
    subs.eventCategories.splice(idx, 1);
  } else {
    subs.eventCategories.push(categoryId);
  }
  // Перерисовать профиль
  document.getElementById('content').innerHTML = renderProfile();
}

// Подписки - переключение клуба
function toggleClub(clubId) {
  const subs = appData.profile.subscriptions;
  const idx = subs.clubs.indexOf(clubId);
  if (idx > -1) {
    subs.clubs.splice(idx, 1);
  } else {
    subs.clubs.push(clubId);
  }
  // Перерисовать профиль
  document.getElementById('content').innerHTML = renderProfile();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  initUserMode();
  setInterval(updateStatus, 60000);
  updateStatus();

  // URL hash → role: index.html#student or index.html#graduate
  const hash = window.location.hash.replace('#', '');
  if (hash === 'student' || hash === 'graduate') {
    const toggle = document.getElementById('modeToggle');
    if (userMode !== hash) {
      userMode = hash;
      localStorage.setItem('univerid_userMode', userMode);
      if (toggle) toggle.style.left = userMode === 'graduate' ? '30px' : '2px';
      const modeSwitch = document.getElementById('modeSwitch');
      if (modeSwitch) {
        modeSwitch.setAttribute('aria-checked', String(userMode === 'graduate'));
        modeSwitch.setAttribute('aria-label', userMode === 'graduate' ? 'Показать режим студента' : 'Показать режим выпускника');
      }
      updateBottomNav();
    }
    // Auto-open the demo after a brief delay for render
    setTimeout(() => openApp(), 100);
    return;
  }
  
  // Check if app was open and restore state
  const wasAppOpen = localStorage.getItem('univerid_appOpen');
  
  if (wasAppOpen === 'true') {
    // App was open before refresh - restore it
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    
    // Restore last page from localStorage
    const lastPage = localStorage.getItem('univerid_lastPage');
    const savedHistory = localStorage.getItem('univerid_history');
    
    if (lastPage && savedHistory) {
      try {
        history = JSON.parse(savedHistory);
        if (history.length > 0) {
          updateHeader(lastPage);
          renderContent(lastPage);
          document.getElementById('backBtn').classList.toggle('hidden', history.length <= 1);
        }
      } catch (e) {
        // If error, show home
        showPage('home');
      }
    } else {
      showPage('home');
    }
  }
});
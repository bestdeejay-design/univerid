// UniverID Mobile Demo App

// Data stored in memory - Russian university transcript format
const appData = {
  // Профиль студента
  profile: {
    name: 'Алексей Петров',
    group: 'ИТб-401',
    faculty: 'Факультет информационных технологий и управления',
    course: 4,
    form: 'Бюджет',
    email: 'alex.petrov@spbti.ru',
    phone: '+7 (912) 345-67-89',
    avatar: 'АП',
    qrCode: 'ПЕТРОВ.АИ\\ИТб-401\\2025',
    room: 'Общ. 3, ком. 412',
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
    // Неделя 1 (18-24 мая)
    '2025-05-18': [
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
    // Неделя 2 (25-31 мая)
    '2025-05-25': [
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
    { company: 'Яндекс', position: 'Стажёр-разработчик', salary: '50 000 ₽', location: 'Москва', type: 'Стажировка' },
    { company: 'Сбер', position: 'ML Engineer', salary: '80 000 ₽', location: 'Санкт-Петербург', type: 'Работа' },
    { company: 'Telegram', position: 'Frontend Developer', salary: '100 000 ₽', location: 'Удалённо', type: 'Работа' }
  ],
  
  // Льготы и скидки
  benefits: [
    { name: 'Скидка 50% в столовой', desc: 'При предъявлении студенческого', valid: 'до 30.06' },
    { name: 'Проездной', desc: 'Студенческий проездной 600 ₽', valid: 'действителен' },
    { name: 'Кино по студенческим', desc: 'Скидка до 30% в кинотеатрах', valid: 'действителен' }
  ],
  
// События и мероприятия
  events: [
    // Учебные события (расписание)
    { name: 'Консультация: Базы данных', date: '14 мая', time: '14:00', place: 'А-301', type: 'Консультация', category: 'schedule', club: null },
    { name: 'Экзамен: Машинное обучение', date: '22 мая', time: '10:00', place: 'А-201', type: 'Экзамен', category: 'schedule', club: null },
    { name: 'Зачёт: Веб-разработка', date: '10 июня', time: '14:00', place: 'Б-205', type: 'Зачёт', category: 'schedule', club: null },
    { name: 'Олимпиада по программированию', date: '18 мая', time: '12:00', place: 'Лаб. 201', type: 'Олимпиада', category: 'schedule', club: null },
    // Мероприятия клубов
    { name: 'Турнир по волейболу', date: '16 мая', time: '18:00', place: 'Спортзал', type: 'Спорт', category: 'clubs', club: 'Спортивные секции' },
    { name: 'Концерт авторской песни', date: '15 мая', time: '19:00', place: 'Актовый зал', type: 'Концерт', category: 'clubs', club: 'Клуб авторской песни' },
    { name: 'Python-митап', date: '19 мая', time: '18:30', place: 'Лаб. 201', type: 'Митап', category: 'clubs', club: 'IT-клуб' },
    { name: 'Дискуссия: Будущее AI', date: '21 мая', time: '18:00', place: 'Конференц-зал', type: 'Дискуссия', category: 'clubs', club: 'Дискуссионный клуб' },
    { name: 'Фотопрогулка по центру', date: '17 мая', time: '12:00', place: 'Сбор у входа', type: 'Творчество', category: 'clubs', club: 'Творческая мастерская' },
    { name: 'Турнир дебатов', date: '23 мая', time: '18:00', place: 'Конференц-зал', type: 'Дебаты', category: 'clubs', club: 'Дискуссионный клуб' },
    { name: 'Хакатон: AI-проекты', date: '24 мая', time: '10:00', place: 'Лаб. 201', type: 'Хакатон', category: 'clubs', club: 'IT-клуб' },
    { name: 'Заседание научного общества', date: '20 мая', time: '16:00', place: 'Библиотека', type: 'Наука', category: 'clubs', club: 'Научное общество' },
    // События института
    { name: 'День открытых дверей', date: '18 мая', time: '14:00', place: 'Актовый зал', type: 'Мероприятие', category: 'institute', club: null },
    { name: 'Экскурсия в Яндекс', date: '25 мая', time: '16:00', place: 'Яндекс', type: 'Экскуссия', category: 'institute', club: null },
    { name: 'Митап выпускников', date: '30 мая', time: '18:00', place: 'Актовый зал', type: 'Мероприятие', category: 'institute', club: null },
    { name: 'Энергетический день', date: '28 мая', time: '14:00', place: 'Лаб. робототехники', type: 'Наука', category: 'science', club: 'Энергетический клуб' },
    { name: 'Разговорный клуб (английский)', date: '22 мая', time: '18:00', place: 'Ауд. 215', type: 'Языки', category: 'clubs', club: 'Клуб иностранных языков' },
    // События от деканата
    { name: 'Изменение в расписании', date: '15 мая', time: '09:00', place: '-', type: 'Объявление', category: 'dekanat', club: null },
    { name: 'Сессия начнётся 1 июня', date: '12 мая', time: '11:00', place: '-', type: 'Объявление', category: 'dekanat', club: null },
    { name: 'Запись на курсы повышения квалификации', date: '20 мая', time: '10:00', place: 'Деканат', type: 'Объявление', category: 'dekanat', club: null },
    // Карьерные события
    { name: 'Ярмарка вакансий', date: '26 мая', time: '14:00', place: 'Актовый зал', type: 'Карьера', category: 'career', club: null },
    { name: 'Встреча с HR Яндекса', date: '27 мая', time: '16:00', place: 'Конференц-зал', type: 'Карьера', category: 'career', club: null }
  ],
  
  // Об институте (для главной страницы)
  aboutInstitute: {
    title: 'О СПбГТИ (Технологический институт)',
    founded: 1828,
    age: 197,
    address: 'Московский пр., д. 24-26/49, лит. А, Санкт-Петербург',
    stats: {
      students: '12 000+',
      teachers: '1 000+',
      departments: '51',
      postgraduate: '130+',
      academicians: '110+',
      faculties: '6'
    },
    description: 'Санкт-Петербургский государственный технологический институт (СПбГТИ) — один из ведущих технических университетов России. Основан в 1828 году как Технологический институт. Готовит специалистов в области химии, биотехнологии, нанотехнологий, механики, информационных технологий и экономики.',
    history: 'Институт основан в 1828 году по указу императора Николая I. За почти два века работы выпустил более 100 000 специалистов. Среди выпускников — известные учёные, промышленники и государственные деятели. Институт сохраняет традиции классического технического образования, активно развивая современные направления подготовки.',
    famousGraduates: [
      { name: 'Дмитрий Менделеев', role: 'Великий химик, создатель периодической системы элементов' },
      { name: 'Дмитрий Чернов', role: 'Основоположник металловедения, академик РАН' },
      { name: 'Александр Лодыгин', role: 'Изобретатель лампы накаливания' },
      { name: 'Леонид Розинг', role: 'Изобретатель системы телевидения' },
      { name: 'Александр Флеминг', role: 'Нобелевский лауреат, почётный доктор ТИ (1972)' },
      { name: 'Валентин Алесковский', role: 'Член-корр. АН СССР, ректор ЛТИ' },
      { name: 'Семён Альтов', role: 'Заслуженный деятель искусств РФ, сатирик' },
      { name: 'Юрий Яров', role: 'Вице-премьер РФ, выпускник 1965 г.' },
      { name: 'Владимир Короленко', role: 'Писатель, публицист (учился в ЛТИ)' }
    ],
    honoraryProfessors: [
      { year: 1967, name: 'Рам Атма', country: 'Индия', role: 'Доктор наук, гендиректор Совета по научным исследованиям. Химия и технология стекла и керамики' },
      { year: 1967, name: 'Биттрих Ганс Иоахим', country: 'ГДР', role: 'Профессор, ректор Высшей технической школы. Химическая термодинамика' },
      { year: 1968, name: 'Полински Карой', country: 'Венгрия', role: 'Член-корр. Венгерской АН, директор института химической технологии' },
      { year: 1968, name: 'Мор Корах', country: 'Венгрия', role: 'Академик Венгерской АН. Технология силикатов' },
      { year: 1969, name: 'Циборовский Януш', country: 'Польша', role: 'Профессор Варшавского политехнического института' },
      { year: 1975, name: 'Ганс-Хейнц Эмонс', country: 'ГДР', role: 'Академик АН ГДР, ректор Высшей технической школы. Неорганическая химия' },
      { year: 1977, name: 'Немец Эрне', country: 'Венгрия', role: 'Член-корр. АН Венгрии, ректор института. Химия неорганических веществ' },
      { year: 1978, name: 'Зёлковский Здзислав', country: 'Польша', role: 'Профессор Вроцлавского политехнического. Ректификация, экстракция' },
      { year: 1978, name: 'Фельдеш Петер', country: 'Венгрия', role: 'Профессор Будапештского технического университета. Математическое моделирование' },
      { year: 1980, name: 'Хартманн Клаус', country: 'ГДР', role: 'Профессор. Моделирование химико-технологических систем' },
      { year: 1981, name: 'Димитров Димчо Илиев', country: 'Болгария', role: 'Профессор Софийского химико-технологического института' },
      { year: 1982, name: 'Стоянович Остоя', country: 'Югославия', role: 'Профессор Белградского университета. Химия и технология органических веществ' },
      { year: 1993, name: 'Рольф Хьюсген', country: 'Германия', role: 'Профессор Мюнхенского университета. Выдающийся химик-органик' },
      { year: 1996, name: 'Катрицкий Алан', country: 'США', role: 'Профессор университета штата Флорида. Химия гетероциклических соединений' },
      { year: 2003, name: 'Лен Жан-Мари', country: 'Франция', role: 'Профессор, лауреат Нобелевской премии' },
      { year: 2012, name: 'Мелино Дженнаро', country: 'Италия', role: 'Профессор Университета «Tor Vergata» (Рим). Молекулярная фармакология' }
    ],
    faculties: [
      { name: '1. Химии веществ и материалов', desc: 'Химическая технология, материаловедение, нанотехнологии' },
      { name: '2. Химической и биотехнологии', desc: 'Биотехнология, молекулярная биология, фармацевтика' },
      { name: '3. Механический', desc: 'Механика, робототехника, процессы и аппараты' },
      { name: '4. Информационных технологий и управления', desc: 'IT, автоматизация, системный анализ, математика' },
      { name: '5. Инженерно-технологический', desc: 'Химическая энергетика, радиационные технологии' },
      { name: '6. Экономики и менеджмента', desc: 'Экономика, менеджмент, бизнес-информатика' }
    ]
  },

  // Навигатор кампуса (данные с spbti.ru)
  navigator: {
    buildings: [
      { id: '1', name: 'Главный корпус', address: 'Московский пр., д. 24-26/49 литера А', floors: ['2 этаж: аудитории 201-206, 208-214', '3 этаж: аудитории 301-306, 308-314', '4 этаж: аудитории 401-406, 408-414'] },
      { id: '2', name: 'Корпус 2', address: 'Московский пр., д. 26', floors: ['3 этаж: Центр дополнительного образования', '2 этаж: Центр СПО'] },
      { id: '3-4', name: 'Корпус 3-4', address: 'Московский пр., д. 26', floors: ['2 этаж: 4 факультет ИТ и управления', '3 этаж: Большая физическая аудитория (БФА)'] },
      { id: '5', name: 'Корпус 5', address: 'Московский пр., д. 26', floors: ['Вход со стороны корпуса 3-4'] },
      { id: '6A', name: 'Корпус 6А', address: 'Московский пр., д. 26', floors: ['1 этаж: 5 факультет Инженерно-технологический'] },
      { id: '7', name: 'Менделеевский корпус (корпус 7)', address: 'Московский пр., д. 26', floors: ['Вход со двора слева от памятника Менделееву', 'Большая химическая аудитория (БХА)', '2 этаж: Кафедра общей физики'] },
      { id: '7krasn', name: 'Учебный корпус на 7-й Красноармейской', address: 'ул. 7-я Красноармейская, д. 6-8', floors: ['2 этаж: аудитории 7-2xx', '3 этаж: аудитории 7-3xx', '4 этаж: аудитории 7-4xx', '5 этаж: аудитории 7-5xx', '6 этаж: аудитории 7-6xx'] },
      { id: '10', name: 'Бызовский корпус (корпус 10)', address: 'Московский пр., д. 26', floors: ['2 этаж: Деканаты 1, 2, 3 факультетов'] },
      { id: '12', name: 'Корпус ФЭМ (корпус 12)', address: 'Московский пр., д. 26', floors: ['1 этаж: 6 факультет Экономики и менеджмента', 'Аудитории 6101-6117, 6231-6249, 6361-6382'] },
      { id: 'A1-A2', name: 'Профессорский корпус (А1-А2)', address: 'Московский пр., д. 26', floors: ['2 этаж: аудитория 290', '3 этаж: аудитории 392-396'] }
    ],
    faculties: [
      { name: '1 факультет - Химии веществ и материалов', building: 'Корпус 10', floor: '2 этаж' },
      { name: '2 факультет - Химической и биотехнологии', building: 'Корпус 10', floor: '2 этаж' },
      { name: '3 факультет - Механический', building: 'Корпус 10', floor: '2 этаж' },
      { name: '4 факультет - Информационных технологий и управления', building: 'Корпус 3-4', floor: '2 этаж' },
      { name: '5 факультет - Инженерно-технологический', building: 'Корпус 6А', floor: '1 этаж' },
      { name: '6 факультет - Экономики и менеджмента', building: 'Корпус 12', floor: '1 этаж' }
    ],
    pointsOfInterest: [
      { name: 'Большая физическая аудитория (БФА)', icon: 'grad', location: 'Корпус 3-4, 3 этаж' },
      { name: 'Большая химическая аудитория (БХА)', icon: 'beaker', location: 'Корпус 7, вход со двора' },
      { name: 'Центр дополнительного образования', icon: 'book', location: 'Корпус 2, 3 этаж' },
      { name: 'Центр СПО', icon: 'book', location: 'Корпус 2, 2 этаж' },
      { name: 'Фундаментальная библиотека', icon: 'book', location: 'Главный корпус' },
      { name: 'Стеклодувная мастерская', icon: 'science', location: 'Корпус 3-4, 1 этаж' }
    ]
  },
  
  // Заметки по предметам
  notes: [
    {
      subject: 'Базы данных',
      icon: 'folder',
      topics: [
        { title: 'Нормализация БД', content: '1NF, 2NF, 3NF. Зависимости и аномалии.', updated: '12 мая' },
        { title: 'SQL-запросы', content: 'SELECT, JOIN, GROUP BY, агрегатные функции', updated: '10 мая' },
        { title: 'Индексы', content: 'B-tree, хеш-индексы, оптимизация запросов', updated: '8 мая' }
      ]
    },
    {
      subject: 'Машинное обучение',
      icon: 'robot',
      topics: [
        { title: 'Линейная регрессия', content: 'Метод наименьших квадратов, градиентный спуск', updated: '11 мая' },
        { title: 'Классификация', content: 'SVM, деревья решений, случайный лес', updated: '9 мая' },
        { title: 'Нейронные сети', content: 'Перцептрон, обратное распространение ошибки', updated: '5 мая' }
      ]
    },
    {
      subject: 'Веб-разработка',
      icon: 'web',
      topics: [
        { title: 'HTML/CSS', content: 'Семантическая вёрстка, Flexbox, Grid', updated: '14 мая' },
        { title: 'JavaScript', content: 'Асинхронность, Promises, async/await', updated: '13 мая' },
        { title: 'React', content: 'Компоненты, state, хуки useState, useEffect', updated: '7 мая' }
      ]
    },
    {
      subject: 'Алгоритмы и структуры данных',
      icon: 'chart',
      topics: [
        { title: 'Сложность алгоритмов', content: 'O(n), O(log n), O(n²). Нотация Big O', updated: '6 мая' },
        { title: 'Структуры данных', content: 'Стек, очередь, связный список, дерево', updated: '4 мая' },
        { title: 'Сортировки', content: 'QuickSort, MergeSort, BubbleSort', updated: '2 мая' }
      ]
    },
    {
      subject: 'Операционные системы',
      icon: 'school',
      topics: [
        { title: 'Процессы и потоки', content: 'PCB, контекст переключения, синхронизация', updated: '1 мая' },
        { title: 'Управление памятью', content: 'Страничная организация, виртуальная память', updated: '28 апр' }
      ]
    },
    {
      subject: 'Английский язык',
      icon: 'globe',
      topics: [
        { title: 'Business English', content: 'Деловая переписка, презентации', updated: '15 мая' },
        { title: 'Technical Vocabulary', content: 'IT-термины, документация', updated: '12 мая' }
      ]
    }
  ],
   
  // Ссылки на сервисы
  services: {
    moodle: 'https://edu.spbti.ru',
    payment: 'Оплата обучения'
  },
  
  // Данные для выпускников
  alumni: {
    profile: {
      name: 'Алексей Петров',
      graduationYear: 2015,
      specialty: 'Информационные технологии и управления',
      photo: 'АП',
      work: {
        company: 'Яндекс',
        position: 'Старший разработчик',
        since: '2018'
      },
      careerHistory: [
        { company: 'Яндекс', position: 'Старший разработчик', years: '2018-н.в.' },
        { company: '2GIS', position: 'Разработчик', years: '2015-2018' }
      ],
      email: 'alex.petrov@email.com',
      phone: '+7 (912) 345-67-89',
      linkedin: '',
      about: 'Выпускник СПбГТИ 2015 года. Работаю в Яндексе над backend-разработкой.'
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
        title: 'Встреча выпускников 2015 года',
        date: '15 июня 2026',
        time: '18:00',
        place: 'Актовый зал',
        type: 'meeting',
        attendees: 45,
        maxAttendees: 100,
        registered: false,
        description: 'Юбилейная встреча выпускников 2015 года. Приглашаем всех на встречу с одногруппниками и преподавателями!'
      },
      {
        id: 2,
        title: 'Встреча с проректором по науке',
        date: '20 июня 2026',
        time: '16:00',
        place: 'Конференц-зал',
        type: 'institute_meeting',
        attendees: 28,
        maxAttendees: 50,
        registered: false,
        description: 'Встреча с проректором. Обсудим научные проекты и возможности участия выпускников.'
      },
      {
        id: 3,
        title: 'AEHO: Митап выпускников IT',
        date: '25 июня 2026',
        time: '19:00',
        place: 'Коворкинг ЦПИ',
        type: 'aeho',
        attendees: 60,
        maxAttendees: 80,
        registered: false,
        description: 'Митап для выпускников IT-направлений. Нетворкинг, обмен опытом, вакансии.'
      },
      {
        id: 4,
        title: 'День открытых дверей - помощь в организации',
        date: '28 июня 2026',
        time: '10:00',
        place: 'Учебный корпус',
        type: 'volunteer',
        attendees: 12,
        maxAttendees: 20,
        registered: false,
        description: 'Приглашаем выпускников помочь с организацией Дня открытых дверей в качестве волонтёров.'
      },
      {
        id: 5,
        title: 'Экскурсия в лабораторию робототехники',
        date: '1 июля 2026',
        time: '14:00',
        place: 'Корпус 7',
        type: 'tour',
        attendees: 25,
        maxAttendees: 30,
        registered: false,
        description: 'Экскурсия по обновлённой лаборатории робототехники. Знакомство с современными разработками.'
      }
    ],
    // Эндаумент-фонд
    endowment: {
      totalRaised: 15000000,
      currency: '₽',
      programs: [
        {
          id: 1,
          name: 'Стипендии для талантливых студентов',
          target: 10000000,
          raised: 5200000,
          description: 'Ежегодные стипендии для лучших студентов института',
          active: true
        },
        {
          id: 2,
          name: 'Юбилей 200 лет СПбГТИ (2028)',
          target: 50000000,
          raised: 8500000,
          description: 'Сбор средств на празднование 200-летия института',
          active: true
        },
        {
          id: 3,
          name: 'Обновление химической лаборатории',
          target: 5000000,
          raised: 2100000,
          description: 'Закупка современного оборудования для лаборатории',
          active: true
        },
        {
          id: 4,
          name: 'Фонд развития спорта',
          target: 1000000,
          raised: 450000,
          description: 'Поддержка спортивных секций и соревнований',
          active: true
        }
      ]
    },
    // Доска почёта
    wallOfFame: {
      outstandingAlumni: [
        { name: 'Иванов Иван Иванович', year: 2010, achievement: 'Основатель TechCorp', bio: 'Основатель компании TechCorp, выпускник 2010 года факультета ИТ' },
        { name: 'Смирнова Анна Петровна', year: 2008, achievement: 'Профессор РАН', bio: 'Доктор наук, профессор, академик РАН' },
        { name: 'Козлов Дмитрий Сергеевич', year: 2012, achievement: 'CEO стартапа AI-Tech', bio: 'Основатель и CEO компании AI-Tech, резидент Сколково' }
      ],
      awardWinners: [
        { name: 'Петров Алексей', year: 2015, award: 'Премия Правительства РФ в области науки' },
        { name: 'Сидорова Мария', year: 2013, award: 'Медаль РАН для молодых учёных' }
      ]
    }
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
}

function initUserMode() {
  userMode = localStorage.getItem('univerid_userMode') || 'student';
  const toggle = document.getElementById('modeToggle');
  if (toggle) {
    toggle.style.left = userMode === 'graduate' ? '30px' : '2px';
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
    'alumni-endowment': 'Эндаумент-фонд',
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
      <h3>Ближайшие события</h3>
      ${appData.events.map(e => `
        <div class="event-item">
          <div class="event-date">
            <span class="event-day">${e.date.split(' ')[0].replace(/[^\d]/g, '')}</span>
            <span class="event-month">${e.date.split(' ')[1] || ''}</span>
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
          <p>96%</p>
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
            <div style="font-size:28px;font-weight:700;color:var(--accent)">7 дней</div>
            <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">Ближайший экзамен: Базы данных (18 мая)</p>
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
            <div style="font-size:18px;font-weight:600">14</div>
            <div style="font-size:10px;color:var(--text-muted)">дней</div>
          </div>
        </div>
      </div>
      
      ${modulesHtml}
      
      <div class="dashboard-card wide" style="margin-top:12px" onclick="showPage('about')">
        <div style="display:flex;align-items:center;gap:12px">
          <svg class="icon" style="font-size:32px"><use href="#icon-about"/></svg>
          <div>
            <h4>Об институте</h4>
            <div style="font-size:14px;color:var(--text-muted)">СПбГТИ (Технологический институт)</div>
            <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">12 000+ студентов • 6 факультетов • 51 кафедра</p>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1)">
          <div style="text-align:center">
            <div style="font-size:18px;font-weight:600">1828</div>
            <div style="font-size:10px;color:var(--text-muted)">год основания</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:18px;font-weight:600">197</div>
            <div style="font-size:10px;color:var(--text-muted)">лет</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:18px;font-weight:600">100К+</div>
            <div style="font-size:10px;color:var(--text-muted)">выпускников</div>
          </div>
        </div>
      </div>
      
      ${eventsHtml}
    </div>
  `;
}

function renderGrades() {
  // Russian university transcript
  const transcript = appData.transcript;
  const semesters = [...new Set(transcript.map(t => t.semester))].sort((a, b) => b - a); // desc
  
  let html = '<div class="page-content">';
  
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

function renderSchedule() {
  const dates = Object.keys(appData.scheduleFull);
  const currentWeek = dates[0]; // текущая неделя
  
  // Группировка по дням
  const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  
  let html = `
    <div class="page-content">
      <div class="week-selector">
        <button class="week-btn active" onclick="showWeek('${currentWeek}', this)">
          <span class="week-label">Эта неделя</span>
          <span class="week-dates">${currentWeek.replace('2025-', '')} — ${dates[0].split('-')[1]} мая</span>
        </button>
        <button class="week-btn" onclick="showWeek('${dates[1]}', this)">
          <span class="week-label">Следующая</span>
          <span class="week-dates">${dates[1].replace('2025-', '')} — ${dates[1].split('-')[1]} мая</span>
        </button>
      </div>
      <div class="schedule-week" id="scheduleWeek">
  `;
  
  const lessons = appData.scheduleFull[currentWeek];
  let currentDay = '';
  
  lessons.forEach((l, i) => {
    if (l.day !== currentDay) {
      if (currentDay) html += '</div>';
      currentDay = l.day;
      html += `
        <div class="schedule-day">
          <div class="day-header">${l.day}</div>
          <div class="day-lessons">
      `;
    }
    const isNow = l.time === '09:00' && l.day === 'Понедельник';
    html += `
      <div class="lesson-item ${isNow ? 'current' : ''}">
        <div class="lesson-time">${l.time}</div>
        <div class="lesson-info">
          <h4>${l.name}</h4>
          <p>${l.type} • ${l.room} • ${l.teacher}</p>
        </div>
      </div>
    `;
  });
  
  html += `
          </div>
        </div>
      </div>
    </div>
  `;
  
  return html;
}

function showWeek(weekKey, btn) {
  // В реальном приложении здесь был бы переход на другую неделю
  document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  // Показываем данные другой недели (упрощено)
  const lesson = appData.scheduleFull[weekKey]?.[0];
  if (lesson) {
    alert('Переход на неделю: ' + weekKey + '\n\nВ демо показывается только первая неделя.');
  }
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
          <img src="/images/qr-code-3.png" style="width:200px;height:200px;object-fit:contain" alt="QR код">
        </div>
        <p class="qr-name">${p.name}</p>
        <p class="qr-group">${p.group}</p>
        <p class="qr-room">${p.room}</p>
      </div>
      <p class="qr-hint">Покажите QR-код при входе в общежитие</p>
    </div>
  `;
}

function openMoodle() {
  window.open(appData.services.moodle, '_blank');
}

function openPayment() {
  alert('Раздел оплаты обучения\n\nСтудент: ' + appData.profile.name + '\nГруппа: ' + appData.profile.group);
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
  
  let html = '<div class="page-content">';
  
  // Сессия
  if (examEvents.length > 0) {
    html += '<h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-doc"/></svg>Сессия</h3>';
    html += '<div class="events-full">';
    examEvents.forEach(e => {
      html += `
        <div class="event-card" style="border-left:3px solid var(--primary)">
          <div class="event-date-card">
            <span class="day">${e.date.split(' ')[0].replace(/[^\d]/g, '')}</span>
            <span class="month">${e.date.split(' ')[1] || ''}</span>
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
          <div class="event-date-card">
            <span class="day">${e.date.split(' ')[0].replace(/[^\d]/g, '')}</span>
            <span class="month">${e.date.split(' ')[1] || ''}</span>
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
          <div class="event-date-card">
            <span class="day">${e.date.split(' ')[0].replace(/[^\d]/g, '')}</span>
            <span class="month">${e.date.split(' ')[1] || ''}</span>
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
      <div class="stats-grid" style="grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:20px">
        <div class="dashboard-card">
          <div class="stat-label">Посещено</div>
          <div class="stat-value" style="color:#22c55e">142/156</div>
        </div>
        <div class="dashboard-card">
          <div class="stat-label">Процент</div>
          <div class="stat-value" style="color:#22c55e">91%</div>
        </div>
      </div>
      <div class="list">
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-check"/></svg></div>
          <div class="list-info">
            <h4>Базы данных</h4>
            <p>12/12 посещено</p>
          </div>
        </div>
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-check"/></svg></div>
          <div class="list-info">
            <h4>Веб-разработка</h4>
            <p>11/12 посещено</p>
          </div>
        </div>
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-alert-circle"/></svg></div>
          <div class="list-info">
            <h4>Операционные системы</h4>
            <p>10/12 посещено</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSession() {
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-clipboard"/></svg>Зимняя сессия</h3>
      <div class="dashboard-card accent" style="margin-bottom:20px">
        <div class="stat-label">До начала сессии</div>
        <div class="stat-value" style="color:#f59e0b">7 дней</div>
      </div>
      <h4>Экзамены</h4>
      <div class="list">
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-book"/></svg></div>
          <div class="list-info">
            <h4>Базы данных</h4>
            <p>18 дек, 10:00, А-301</p>
          </div>
        </div>
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-book"/></svg></div>
          <div class="list-info">
            <h4>Машинное обучение</h4>
            <p>22 дек, 14:00, А-201</p>
          </div>
        </div>
      </div>
      <h4>Зачёты</h4>
      <div class="list">
        <div class="list-item">
          <div class="list-icon"><svg class="icon" style="width:20px;height:20px"><use href="#icon-check"/></svg></div>
          <div class="list-info">
            <h4>Веб-разработка</h4>
            <p>10 янв, готов</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderNavigator() {
  const nav = appData.navigator;
  let html = '<div class="page-content">';
  html += '<h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-map"/></svg>Навигатор кампуса СПбГТИ</h3>';
  
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
            <div style="font-size:12px;color:var(--text-muted)">№ 1234567890</div>
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
            <div style="font-size:12px;color:var(--text-muted)">Баланс: 1 250 ₽</div>
          </div>
        </div>
      </div>
      <div class="dashboard-card" style="margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:12px">
          <img src="/images/qr-code-3.png" style="width:64px;height:64px;border-radius:8px;object-fit:cover" alt="QR код">
          <div>
            <div style="font-weight:600">Пропуск в общежитие</div>
            <div style="font-size:12px;color:var(--text-muted)">Общежитие №1, комната 205</div>
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
            <h3 style="margin:0">Добро пожаловать, выпускник!</h3>
            <p style="margin:6px 0 0;font-size:14px;color:var(--text-muted)">Выпуск ${profile.graduationYear} года</p>
            <p style="margin:4px 0 0;font-size:12px;color:var(--primary)">${profile.work.company} · ${profile.work.position}</p>
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
          <span style="font-size:11px">Фонд</span>
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
      
      <!-- Ближайшие события -->
      <h4 style="font-size:16px;margin-bottom:12px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-calendar"/></svg>Ближайшие события</h4>
      ${upcomingEvents.map(e => `
        <div class="dashboard-card" style="margin-bottom:12px;cursor:pointer" onclick="toggleEventRSVP(${e.id}, 'home')">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div style="flex:1">
              <div style="font-weight:600;font-size:14px">${e.title}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${e.date} · ${e.time} · ${e.place}</div>
              <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${e.description.substring(0, 60)}...</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:11px;color:var(--text-muted)">${e.attendees}/${e.maxAttendees}</div>
              <div style="font-size:12px;font-weight:600;color:${e.registered ? 'var(--primary)' : 'var(--text-muted)'};margin-top:4px">
                ${e.registered ? '✓ Иду' : '+ Иду'}
              </div>
            </div>
          </div>
        </div>
      `).join('')}
      <div class="dashboard-card" style="text-align:center;padding:12px;margin-bottom:20px" onclick="showPage('alumni-events')">
        <span style="color:var(--primary);font-size:13px">Все события →</span>
      </div>
      
      <!-- Эндаумент-фонд -->
      <h4 style="font-size:16px;margin-bottom:12px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-wallet-giftcard"/></svg>Эндаумент-фонд СПбГТИ</h4>
      ${topPrograms.map(p => `
        <div class="dashboard-card" style="margin-bottom:12px" onclick="showPage('alumni-endowment')">
          <div style="font-weight:600;font-size:14px">${p.name}</div>
          <div style="margin-top:8px">
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span style="color:var(--text-muted)">Собрано</span>
              <span style="color:var(--primary)">${(p.raised/1000000).toFixed(1)} млн / ${(p.target/1000000).toFixed(1)} млн ₽</span>
            </div>
            <div style="height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden">
              <div style="height:100%;width:${(p.raised/p.target*100).toFixed(0)}%;background:var(--primary);border-radius:3px"></div>
            </div>
          </div>
        </div>
      `).join('')}
      <div class="dashboard-card" style="text-align:center;padding:12px;margin-bottom:20px" onclick="showPage('alumni-endowment')">
        <span style="color:var(--primary);font-size:13px">Поддержать фонд →</span>
      </div>
      
      <!-- Выдающиеся выпускники -->
      <h4 style="font-size:16px;margin-bottom:12px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-trophy"/></svg>Выдающиеся выпускники</h4>
      <div class="dashboard-card" style="margin-bottom:20px" onclick="showPage('alumni-fame')">
        ${alum.wallOfFame.outstandingAlumni.slice(0, 2).map(a => `
          <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.08)">
            <div><svg class="icon" style="width:24px;height:24px"><use href="#icon-user"/></svg></div>
            <div>
              <div style="font-weight:600;font-size:13px">${a.name}</div>
              <div style="font-size:11px;color:var(--text-muted)">${a.achievement}</div>
            </div>
          </div>
        `).join('')}
        <div style="text-align:center;padding:8px;font-size:12px;color:var(--primary)">Показать всех →</div>
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
    event.attendees += event.registered ? 1 : -1;
    
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
        <p class="profile-group">Выпуск ${p.graduationYear} года</p>
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
            <img src="/images/qr-code-3.png" style="width:150px;height:150px;display:block;margin:0 auto;border-radius:8px" alt="QR код">
            <p style="text-align:center;font-size:12px;color:var(--text-muted);margin-top:8px">Покажите QR-код при входе</p>
          </div>
        `).join('')}
      ` : `
        <h4 style="margin:20px 0 12px;font-size:16px">Пропуск на мероприятие</h4>
        <div class="dashboard-card" style="text-align:center;padding:20px">
          <svg class="icon" style="width:40px;height:40px;margin-bottom:8px;opacity:0.5"><use href="#icon-qr"/></svg>
          <p style="font-size:14px;color:var(--text-muted)">Запишитесь на мероприятие, чтобы получить пропуск</p>
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
      ${events.map(e => `
        <div class="dashboard-card" style="margin-bottom:16px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
            <div>
              <div style="font-weight:600;font-size:15px">${e.title}</div>
              <div style="font-size:13px;color:var(--text-muted);margin-top:4px">${e.date} · ${e.time}</div>
              <div style="font-size:12px;color:var(--text-muted)"><svg class="icon" style="width:12px;height:12px;margin-right:4px;vertical-align:middle"><use href="#icon-location"/></svg>${e.place}</div>
            </div>
            <div style="text-align:right">
              <div style="font-size:12px;color:var(--text-muted)">${e.attendees}/${e.maxAttendees}</div>
            </div>
          </div>
          <p style="font-size:13px;color:var(--text-muted);margin:8px 0">${e.description}</p>
          <button onclick="toggleEventRSVP(${e.id}, 'alumni-events')" style="width:100%;padding:10px;background:${e.registered ? 'var(--accent)' : 'var(--primary)'};border:none;border-radius:8px;color:#fff;font-weight:600;cursor:pointer">
            ${e.registered ? '✓ Я иду' : 'Я пойду'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

// Эндаумент-фонд
function renderAlumniEndowment() {
  const end = appData.alumni.endowment;
  return `
    <div class="page-content">
      <div class="dashboard-card accent" style="margin-bottom:20px">
        <h3 style="margin:0 0 8px">Эндаумент-фонд СПбГТИ</h3>
        <p style="font-size:14px;color:var(--text-muted)">Целевой капитал для поддержки института</p>
        <div style="margin-top:16px">
          <div style="font-size:24px;font-weight:700;color:var(--primary)">${(end.totalRaised/1000000).toFixed(1)} млн ₽</div>
          <div style="font-size:12px;color:var(--text-muted)">собрано всего</div>
        </div>
      </div>
      
      <h4 style="margin-bottom:12px">Программы сбора</h4>
      ${end.programs.map(p => `
        <div class="dashboard-card" style="margin-bottom:16px">
          <div style="font-weight:600;font-size:15px">${p.name}</div>
          <p style="font-size:13px;color:var(--text-muted);margin:8px 0">${p.description}</p>
          <div style="margin-top:12px">
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">
              <span>Собрано</span>
              <span style="color:var(--primary)">${(p.raised/1000000).toFixed(1)} млн / ${(p.target/1000000).toFixed(1)} млн ₽</span>
            </div>
            <div style="height:8px;background:rgba(255,255,255,0.1);border-radius:4px;overflow:hidden">
              <div style="height:100%;width:${(p.raised/p.target*100).toFixed(0)}%;background:var(--primary);border-radius:4px"></div>
            </div>
          </div>
          <button style="width:100%;margin-top:12px;padding:10px;background:var(--primary);border:none;border-radius:8px;color:#fff;font-weight:600;cursor:pointer">
            Пожертвовать
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

// Доска почёта
function renderAlumniFame() {
  const wf = appData.alumni.wallOfFame;
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-trophy"/></svg>Доска почёта</h3>
      
      <h4 style="margin:20px 0 12px">Выдающиеся выпускники</h4>
      ${wf.outstandingAlumni.map(a => `
        <div class="dashboard-card" style="margin-bottom:12px">
          <div style="display:flex;align-items:center;gap:12px">
            <div><svg class="icon" style="width:36px;height:36px"><use href="#icon-user"/></svg></div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:15px">${a.name}</div>
              <div style="font-size:13px;color:var(--primary)">Выпуск ${a.year}</div>
              <div style="font-size:13px;margin-top:4px">${a.achievement}</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">${a.bio}</div>
            </div>
          </div>
        </div>
      `).join('')}
      
      <h4 style="margin:20px 0 12px">Лауреаты премий</h4>
      ${wf.awardWinners.map(a => `
        <div class="dashboard-card" style="margin-bottom:12px;padding:12px">
          <div style="font-weight:600">${a.name}</div>
          <div style="font-size:13px;color:var(--primary)">${a.award}</div>
          <div style="font-size:12px;color:var(--text-muted)">${a.year}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// Профессиональная сеть
function renderAlumniNetwork() {
  return `
    <div class="page-content">
      <h3><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-globe"/></svg>Сеть выпускников</h3>
      
      <div class="dashboard-card accent" style="margin-bottom:20px;padding:16px">
        <p style="font-size:14px">Найдите и свяжитесь с выпускниками СПбГТИ</p>
      </div>
      
      <h4 style="margin-bottom:12px">Поиск выпускников</h4>
      <div class="dashboard-card" style="margin-bottom:16px;padding:12px">
        <input type="text" placeholder="Поиск по имени, году выпуска..." style="width:100%;padding:10px;background:rgba(255,255,255,0.1);border:none;border-radius:8px;color:#fff;font-size:14px">
      </div>
      
      <h4 style="margin-bottom:12px">Выпускники онлайн</h4>
      <div class="dashboard-card">
        <div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.08)">
          <div style="width:10px;height:10px;background:#4caf50;border-radius:50%"></div>
          <div style="font-size:14px">Алексей П. (Яндекс) — 2015</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.08)">
          <div style="width:10px;height:10px;background:#4caf50;border-radius:50%"></div>
          <div style="font-size:14px">Мария С. (Сбер) — 2014</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:8px 0">
          <div style="width:10px;height:10px;background:#4caf50;border-radius:50%"></div>
          <div style="font-size:14px">Иван К. (2GIS) — 2016</div>
        </div>
      </div>
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
  let html = '<div class="page-content">';
  html += '<h3><svg class="icon" style="width:18px;height:18px"><use href="#icon-wallet-giftcard"/></svg> ' + about.title + '</h3>';
  
  // Основная информация
  html += '<div class="dashboard-card accent" style="margin-bottom:20px;border-radius:16px">';
  html += '<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px">';
  html += '<div><svg class="icon" style="width:56px;height:56px"><use href="#icon-grad"/></svg></div>';
  html += '<div>';
  html += '<h4 style="margin:0;font-size:18px">Основан в ' + about.founded + ' году</h4>';
  html += '<p style="margin:6px 0 0;font-size:15px;color:var(--text-muted)">' + about.age + ' лет истории</p>';
  html += '</div></div>';
  html += '<p style="font-size:14px;color:var(--text-muted);line-height:1.5">' + about.description + '</p>';
  html += '<p style="font-size:13px;color:var(--primary);margin-top:12px"><svg class="icon" style="width:14px;height:14px;margin-right:4px;vertical-align:middle"><use href="#icon-location"/></svg>' + about.address + '</p>';
  html += '</div>';
  
  // Статистика
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">';
  html += '<div class="dashboard-card" style="text-align:center;padding:16px"><div style="font-size:28px;font-weight:700;color:var(--primary)">' + about.stats.students + '</div><div style="font-size:12px;color:var(--text-muted);margin-top:4px">студентов</div></div>';
  html += '<div class="dashboard-card" style="text-align:center;padding:16px"><div style="font-size:28px;font-weight:700;color:var(--primary)">' + about.stats.faculties + '</div><div style="font-size:12px;color:var(--text-muted);margin-top:4px">факультетов</div></div>';
  html += '<div class="dashboard-card" style="text-align:center;padding:16px"><div style="font-size:28px;font-weight:700;color:var(--primary)">' + about.stats.departments + '</div><div style="font-size:12px;color:var(--text-muted);margin-top:4px">кафедр</div></div>';
  html += '</div>';
  
  // История
  html += '<div class="dashboard-card" style="margin-bottom:20px;padding:16px">';
  html += '<h4 style="margin-bottom:12px;font-size:16px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-book"/></svg>История института</h4>';
  html += '<p style="font-size:13px;color:var(--text-muted);line-height:1.6">' + about.history + '</p>';
  html += '</div>';
  
  // Выдающиеся выпускники
  html += '<div class="dashboard-card" style="margin-bottom:20px;padding:16px">';
  html += '<h4 style="margin-bottom:16px;font-size:16px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-star"/></svg>Выдающиеся выпускники</h4>';
  about.famousGraduates.forEach((g, i) => {
    html += '<div style="padding:12px 0' + (i < about.famousGraduates.length - 1 ? ';border-bottom:1px solid rgba(255,255,255,0.08)' : '') + '">';
    html += '<div style="font-size:15px;font-weight:600">' + g.name + '</div>';
    html += '<div style="font-size:12px;color:var(--text-muted);margin-top:2px">' + g.role + '</div>';
    html += '</div>';
  });
  html += '</div>';
  
  // Почётные доктора и профессора ТИ
  html += '<div class="dashboard-card" style="margin-bottom:20px;padding:16px">';
  html += '<h4 style="margin-bottom:16px;font-size:16px"><svg class="icon" style="width:18px;height:18px;margin-right:8px;vertical-align:middle"><use href="#icon-medal"/></svg>Почётные доктора и профессора ТИ</h4>';
  html += '<p style="font-size:12px;color:var(--text-muted);margin-bottom:16px">С 1967 года Учёный Совет присваивает звания иностранным учёным за вклад в развитие научных отношений между вузами</p>';
  about.honoraryProfessors.slice(0, 10).forEach((p, i) => {
    html += '<div style="padding:10px 0' + (i < 9 ? ';border-bottom:1px solid rgba(255,255,255,0.08)' : '') + '">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center">';
    html += '<div style="font-size:14px;font-weight:600">' + p.name + '</div>';
    html += '<div style="font-size:11px;color:var(--accent);background:rgba(0,0,0,0.2);padding:2px 8px;border-radius:10px">' + p.year + '</div>';
    html += '</div>';
    html += '<div style="font-size:11px;color:var(--text-muted);margin-top:2px">' + p.country + ' · ' + p.role + '</div>';
    html += '</div>';
  });
  if (about.honoraryProfessors.length > 10) {
    html += '<div style="text-align:center;padding:12px;font-size:12px;color:var(--text-muted)">... ещё ' + (about.honoraryProfessors.length - 10) + ' почётных докторов</div>';
  }
  html += '</div>';
  
  // Факультеты
  html += '<div class="dashboard-card" style="padding:16px">';
  html += '<h4 style="margin-bottom:16px;font-size:16px"><svg class="icon" style="width:20px;height:20px;margin-right:8px;vertical-align:middle"><use href="#icon-grad"/></svg>Факультеты</h4>';
  about.faculties.forEach((f, i) => {
    html += '<div style="padding:12px 0' + (i < about.faculties.length - 1 ? ';border-bottom:1px solid rgba(255,255,255,0.08)' : '') + '">';
    html += '<div style="font-size:14px;font-weight:600">' + f.name + '</div>';
    html += '<div style="font-size:12px;color:var(--text-muted);margin-top:2px">' + f.desc + '</div>';
    html += '</div>';
  });
  html += '</div>';
  
  html += '</div>';
  return html;
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
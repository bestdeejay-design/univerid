// Демо-данные для UniverID - Технологический институт

const DEMO_DATA = {
  university: {
    name: "Технологический институт",
    fullName: "Технологический институт новых технологий",
    shortName: "ТИНТ",
    logo: "grad",
    city: "Москва"
  },

  student: {
    id: "STU-2024-001",
    name: "Александр Петров",
    email: "a.petrov@techinst.ru",
    avatar: "tech",
    faculty: "Информационные технологии",
    department: "Кафедра программной инженерии",
    course: 3,
    group: "ПИ-301",
    status: "active",
    gpa: 4.7,
    enrolledDate: "2022-09-01"
  },

  schedule: [
    {
      day: "Понедельник",
      date: "2026-02-02",
      lessons: [
        { time: "09:00-10:30", name: "Базы данных", type: "Лекция", room: "А-301", teacher: "проф. Иванов С.П." },
        { time: "10:45-12:15", name: "Веб-разработка", type: "Практика", room: "Б-205", teacher: "доц. Сидорова А.М." },
        { time: "13:00-14:30", name: "Алгоритмы и структуры данных", type: "Лекция", room: "А-101", teacher: "проф. Козлов В.Н." }
      ]
    },
    {
      day: "Вторник",
      date: "2026-02-03",
      lessons: [
        { time: "09:00-10:30", name: "Операционные системы", type: "Лабораторная", room: "В-401", teacher: "доц. Новиков П.С." },
        { time: "11:00-12:30", name: "Английский язык", type: "Практика", room: "Г-102", teacher: "преп. Смирнова Е.В." }
      ]
    },
    {
      day: "Среда",
      date: "2026-02-04",
      lessons: [
        { time: "10:00-11:30", name: "Машинное обучение", type: "Лекция", room: "А-201", teacher: "проф. Волков Д.А." },
        { time: "12:00-13:30", name: "Компьютерные сети", type: "Практика", room: "Б-305", teacher: "доц. Морозов И.И." },
        { time: "14:00-15:30", name: "Физика", type: "Лабораторная", room: "Д-101", teacher: "проф. Лебедева Н.К." }
      ]
    },
    {
      day: "Четверг",
      date: "2026-02-05",
      lessons: [
        { time: "09:00-10:30", name: "Базы данных", type: "Практика", room: "Б-205", teacher: "доц. Сидорова А.М." },
        { time: "11:00-12:30", name: "DevOps практики", type: "Семинар", room: "В-202", teacher: "преп. Кузнецов А.В." }
      ]
    },
    {
      day: "Пятница",
      date: "2026-02-06",
      lessons: [
        { time: "10:00-11:30", name: "Машинное обучение", type: "Лабораторная", room: "В-401", teacher: "проф. Волков Д.А." },
        { time: "12:00-13:30", name: "Алгоритмы", type: "Практика", room: "Б-105", teacher: "доц. Попов С.М." }
      ]
    }
  ],

  grades: [
    { subject: "Базы данных", grade: 5, type: "Экзамен", semester: "5", teacher: "проф. Иванов С.П." },
    { subject: "Веб-разработка", grade: 5, type: "Зачёт", semester: "5", teacher: "доц. Сидорова А.М." },
    { subject: "Алгоритмы и структуры данных", grade: 4, type: "Экзамен", semester: "5", teacher: "проф. Козлов В.Н." },
    { subject: "Операционные системы", grade: 5, type: "Зачёт", semester: "5", teacher: "доц. Новиков П.С." },
    { subject: "Машинное обучение", grade: 5, type: "Экзамен", semester: "5", teacher: "проф. Волков Д.А." },
    { subject: "Компьютерные сети", grade: 4, type: "Зачёт", semester: "5", teacher: "доц. Морозов И.И." },
    { subject: "Английский язык", grade: 5, type: "Зачёт", semester: "5", teacher: "преп. Смирнова Е.В." }
  ],

  vacancies: [
    {
      id: 1,
      company: "Яндекс",
      logo: "web",
      position: "Junior Frontend Developer",
      type: "Стажировка",
      format: "Гибрид",
      salary: "60 000 - 80 000 ₽",
      duration: "3 месяца",
      skills: ["React", "JavaScript", "TypeScript"],
      description: "Разработка интерфейсов для сервисов Яндекса",
      deadline: "2026-03-15"
    },
    {
      id: 2,
      company: "Сбер",
      logo: "🏦",
      position: "Data Science Intern",
      type: "Стажировка",
      format: "Офис",
      salary: "70 000 - 90 000 ₽",
      duration: "6 месяцев",
      skills: ["Python", "ML", "SQL"],
      description: "Анализ данных и построение ML-моделей",
      deadline: "2026-03-20"
    },
    {
      id: 3,
      company: "VK",
      logo: "💬",
      position: "Backend Developer",
      type: "Вакансия",
      format: "Удалёнка",
      salary: "120 000 - 180 000 ₽",
      duration: "Постоянная",
      skills: ["Go", "PostgreSQL", "Redis"],
      description: "Разработка высоконагруженных сервисов",
      deadline: "2026-04-01"
    },
    {
      id: 4,
      company: "Тинькофф",
      logo: "wallet",
      position: "Mobile Developer (iOS)",
      type: "Стажировка",
      format: "Гибрид",
      salary: "80 000 - 100 000 ₽",
      duration: "4 месяца",
      skills: ["Swift", "iOS", "Xcode"],
      description: "Разработка мобильного банковского приложения",
      deadline: "2026-03-25"
    },
    {
      id: 5,
      company: "Kaspersky",
      logo: "shield",
      position: "Security Research Intern",
      type: "Стажировка",
      format: "Офис",
      salary: "75 000 - 95 000 ₽",
      duration: "6 месяцев",
      skills: ["C++", "Security", "Reverse Engineering"],
      description: "Исследование угроз и разработка защитных механизмов",
      deadline: "2026-03-30"
    }
  ],

  benefits: [
    {
      category: "IT и технологии",
      icon: "school",
      items: [
        { name: "GitHub Student Pack", discount: "Бесплатно", description: "Private репозитории, CI/CD, домен" },
        { name: "JetBrains All Products", discount: "Бесплатно", description: "IDE для разработки" },
        { name: "Figma Professional", discount: "Бесплатно", description: "Дизайн и прототипирование" },
        { name: "Notion Plus", discount: "Бесплатно", description: "Продуктивность и заметки" }
      ]
    },
    {
      category: "Транспорт",
      icon: "subway",
      items: [
        { name: "Студенческий проездной", discount: "-50%", description: "Метро, автобусы, трамваи" },
        { name: "Яндекс.Такси", discount: "-20%", description: "Промокод на первые 10 поездок" },
        { name: "Делимобиль", discount: "-30%", description: "Каршеринг для студентов" }
      ]
    },
    {
      category: "Еда и кафе",
      icon: "food",
      items: [
        { name: "Столовая кампуса", discount: "-40%", description: "Комплексные обеды" },
        { name: "Додо Пицца", discount: "-25%", description: "По студенческому билету" },
        { name: "Кофейня Paul", discount: "-30%", description: "Все напитки" }
      ]
    },
    {
      category: "Развлечения",
      icon: "theater",
      items: [
        { name: "Кинопоиск HD", discount: "-50%", description: "Подписка на фильмы" },
        { name: "Музеи Москвы", discount: "Бесплатно", description: "По студенческому билету" },
        { name: "Фитнес World Class", discount: "-40%", description: "Абонемент на месяц" }
      ]
    }
  ],

  events: [
    {
      id: 1,
      title: "Хакатон AI Challenge 2026",
      date: "2026-02-15",
      time: "10:00",
      location: "Главный корпус, актовый зал",
      category: "Хакатон",
      organizer: "Кафедра ИИ",
      participants: 120,
      description: "48-часовой хакатон по разработке AI-решений"
    },
    {
      id: 2,
      title: "Мастер-класс от Яндекса",
      date: "2026-02-18",
      time: "15:00",
      location: "Корпус Б, ауд. 305",
      category: "Мастер-класс",
      organizer: "Яндекс",
      participants: 80,
      description: "Современные веб-технологии в разработке"
    },
    {
      id: 3,
      title: "День карьеры IT-компаний",
      date: "2026-02-25",
      time: "11:00",
      location: "Весь кампус",
      category: "Ярмарка вакансий",
      organizer: "Центр карьеры",
      participants: 350,
      description: "Встреча с работодателями: Яндекс, Сбер, VK, Тинькофф"
    },
    {
      id: 4,
      title: "Научная конференция студентов",
      date: "2026-03-05",
      time: "09:00",
      location: "Корпус А",
      category: "Конференция",
      organizer: "Научное общество",
      participants: 200,
      description: "Презентация студенческих исследований"
    },
    {
      id: 5,
      title: "Воркшоп по DevOps",
      date: "2026-03-10",
      time: "14:00",
      location: "Лаборатория DevOps",
      category: "Воркшоп",
      organizer: "Кафедра ПО",
      participants: 40,
      description: "Docker, Kubernetes, CI/CD на практике"
    }
  ],

  notifications: [
    { id: 1, type: "schedule", message: "Завтра пара по Базам данных в 09:00, ауд. А-301", time: "2 часа назад", read: false },
    { id: 2, type: "grade", message: "Получена оценка по Веб-разработке: 5 (отлично)", time: "5 часов назад", read: false },
    { id: 3, type: "event", message: "Не забудь: Хакатон AI Challenge через 3 дня!", time: "1 день назад", read: true },
    { id: 4, type: "vacancy", message: "Новая стажировка в Яндексе подходит тебе!", time: "1 день назад", read: true },
    { id: 5, type: "system", message: "Расписание на следующую неделю обновлено", time: "2 дня назад", read: true }
  ],

  aiAssistant: {
    responses: {
      "расписание": "Ваше расписание на сегодня:\n09:00 - Базы данных (Лекция)\n10:45 - Веб-разработка (Практика)\n13:00 - Алгоритмы (Лекция)",
      "оценки": "Ваш средний балл: 4.7. Отличный результат! Все зачёты сданы.",
      "льготы": "Вам доступны:\n• GitHub Student Pack (бесплатно)\n• JetBrains All Products (бесплатно)\n• Студенческий проездной (-50%)\n• Скидка 40% в столовой кампуса",
      "вакансии": "Для вас найдено 5 подходящих вакансий:\n• Яндекс - Frontend Developer\n• Сбер - Data Science Intern\n• VK - Backend Developer\n• Тинькофф - iOS Developer\n• Kaspersky - Security Intern",
      "мероприятия": "Ближайшие мероприятия:\n• 15 фев - Хакатон AI Challenge\n• 18 фев - Мастер-класс Яндекса\n• 25 фев - День карьеры",
      "default": "Я могу помочь с:\n• Расписанием\n• Успеваемостью\n• Вакансиями\n• Льготами\n• Мероприятиями\n\nЧто вас интересует?"
    }
  }
};

window.NAVIGATOR = {
  title: 'Навигатор кампуса',
  buildings: [
    {
      id: 'main',
      name: 'Главный корпус',
      address: 'ул. Большая Морская, д. 3-5',
      floors: [
        {
          level: 1,
          name: '1 этаж',
          rooms: [
            { number: '101-105', type: 'Аудитории', description: 'Лекционные залы' },
            { number: '106', type: 'Деканат', description: 'Приёмная комиссия' },
            { number: '107', type: 'Студсовет', description: 'Объединённый совет обучающихся' }
          ]
        },
        {
          level: 2,
          name: '2 этаж',
          rooms: [
            { number: '201-210', type: 'Аудитории', description: 'Лекционные и практические' },
            { number: '211', type: 'Кафедра ИТ', description: 'Кафедра информационных технологий' }
          ]
        },
        {
          level: 3,
          name: '3 этаж',
          rooms: [
            { number: '301-315', type: 'Аудитории', description: 'Специализированные лаборатории' },
            { number: '316', type: 'Библиотека', description: 'Читальный зал' }
          ]
        }
      ]
    },
    {
      id: 'sport',
      name: 'Спортивный комплекс',
      address: 'ул. Большая Морская, д. 7',
      floors: [
        {
          level: 1,
          name: '1 этаж',
          rooms: [
            { number: 'Спортзал', type: 'Спортивный зал', description: 'Основной спортзал' },
            { number: 'Тренажёрный', type: 'Тренажёрный зал', description: 'Силовые тренажёры' }
          ]
        },
        {
          level: 2,
          name: '2 этаж',
          rooms: [
            { number: 'Бассейн', type: 'Бассейн', description: '25м, 6 дорожек' },
            { number: 'Раздевалки', type: 'Служебные', description: 'Раздевалки и душевые' }
          ]
        }
      ]
    },
    {
      id: 'hostel',
      name: 'Общежитие №1',
      address: 'ул. Космонавтов, д. 12',
      floors: [
        {
          level: 1,
          name: '1 этаж',
          rooms: [
            { number: 'Комната охраны', type: 'Служебная', description: 'Круглосуточная охрана' },
            { number: '101-120', type: 'Жилые комнаты', description: '2-3 местные комнаты' }
          ]
        },
        {
          level: 2,
          name: '2 этаж',
          rooms: [
            { number: '201-230', type: 'Жилые комнаты', description: '2-3 местные комнаты' },
            { number: 'Кухня', type: 'Общественная', description: 'Кухня для жильцов' }
          ]
        }
      ]
    }
  ],
  pointsOfInterest: [
    { name: 'Столовая', building: 'main', floor: 1, icon: 'meal' },
    { name: 'Медпункт', building: 'main', floor: 1, icon: 'hospital' },
    { name: 'Библиотека', building: 'main', floor: 3, icon: 'book' },
    { name: 'Профком', building: 'main', floor: 2, icon: 'megaphone' }
  ]
};
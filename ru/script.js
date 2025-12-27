// Точки на карте
const points = [
    {
        id: 1,
        top: 33,   // вертикальная позиция в %
        left: 63,  // горизонтальная позиция в %
        title: "Сквер имени Г-Д.С. Шарапова",
        description: "Сквер около здания почты и местного «Арбата».",
        color: "green",
        adress: "около ул. Ленина, 17"
    },
    {
        id: 2,
        top: 45,
        left: 68,
        title: "Центральный парк",
        description: "Благоустроенный парк культуры и отдыха.",
        color: "green",
        adress: "за Комсомольской ул., 6"
    },
    {
        id: 3,
        top: 42,
        left: 66,
        title: "ДК «Шахтёр»",
        description: "Дом культуры.",
        color: "#9b59b6",
        adress: "Комсомольская ул., 6"
    },
    {
        id: 4,
        top: 28,
        left: 66,
        title: "Спортивный комплекс",
        description: "Спортивный копмлекс Гусиноозёрской ГРЭС, рядом находится Стадион Энергетик.",
        color: "light-blue",
        adress: "ул. Ленина, 19"
    },
    {
        id: 5,
        top: 42,
        left: 70,
        title: "Георгиевская церковь",
        description: "Церковь Георгия Победоносца. Рядом строится Казанская церковь.",
        color: "orange",
        adress: "Комсомольская ул., 8"
    },
    {
        id: 6,
        top: 48,
        left: 65,
        title: "Бассейн",
        description: "Плавательный бассейн имени Е. И. Карпенко.",
        color: "light-blue",
        adress: "Комсомольская ул., 2Г"
    },
    {
        id: 7,
        top: 50,
        left: 67,
        title: "Сосудистый центр",
        description: "Первичное сосудистое отделение Гусиноозёрской ЦРБ.",
        color: "#F08080",
        adress: "ул. Кузнецова, 5"
    },
    {
        id: 8,
        top: 40,
        left: 63,
        title: "Аллея Ветеранов",
        description: "Аллея в центре города с военным памятником.",
        color: "green",
        adress: "от Комсомольской ул., 6 до ул. Ленина, 24"
    },
    {
        id: 9,
        top: 45,
        left: 58,
        title: "Детская больница",
        description: "Гусиноозерская центральная районная больница, детская поликлиника.",
        color: "#F08080",
        adress: "ул. Ленина, 14"
    },
    {
        id: 10,
        top: 42,
        left: 57,
        title: "Пионерский сквер",
        description: "Парк культуры и отдыха.",
        color: "green",
        adress: "около ул. Ленина, 7А"
    },
    {
        id: 11,
        top: 37,
        left: 60,
        title: "Центральная площадь",
        description: "Площадь у здания Администрации Селенгиского района.",
        color: "green",
        adress: "около ул. Пушкина, 12"
    },
    {
        id: 12,
        top: 30,
        left: 49,
        title: "Кинотеатр «Россия»",
        description: "Городской кинотеатр с рестобаром и караоке.",
        color: "#9b59b6",
        adress: "ул. Пушкина, 34"
    },
    {
        id: 13,
        top: 27,
        left: 50,
        title: "Гусиноозёрская ЦРБ",
        description: "Гусиноозёрская центральная районная больница.",
        color: "#F08080",
        adress: "Железнодорожная ул., 13"
    },
    {
        id: 14,
        top: 44,
        left: 64,
        title: "Дуган",
        description: "Гусиноозёрский дуган.",
        color: "orange",
        adress: "Комсомольская ул., 4"
    },
    {
        id: 15,
        top: 50,
        left: 62,
        title: "Спортивный центр",
        description: "Спортивный центр имени Н.Д. Бадмаева со стадионом.",
        color: "light-blue",
        adress: "Комсомольская ул., 2А"
    },
    {
        id: 16,
        top: 5,
        left: 52,
        title: "Техникум",
        description: "Гусиноозёрский энергетический техникум.",
        color: "#9b59b6",
        adress: "9-й микрорайон, 72"
    },
    {
        id: 17,
        top: 95,
        left: 20,
        title: "Пляж",
        description: "Городской пляж на Гусином озере.",
        color: "#9b59b6",
        adress: "..."
    },
    {
        id: 18,
        top: 89,
        left: 90,
        title: "Лыжная база",
        description: "Зимние развлечения.",
        color: "#9b59b6",
        adress: "..."
    },
    {
        id: 19,
        top: 80,
        left: 96,
        title: "Кладбище",
        description: "Городское кладбище.",
        color: "#9b59b6",
        adress: "..."
    },
    {
        id: 20,
        top: 8,
        left: 9,
        title: "ГРЭС",
        description: "Гусиноозёрская ГРЭС, главное предприятие города",
        color: "#9b59b6",
        adress: "..."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const map = document.querySelector('.map');
    const infoContent = document.querySelector('.info-content');
    
    // Создаем точки на карте
    points.forEach(point => {
        const pointElement = document.createElement('div');
        pointElement.className = 'map-point';
        pointElement.style.top = point.top + '%';
        pointElement.style.left = point.left + '%';
        pointElement.style.backgroundColor = point.color;
        pointElement.dataset.id = point.id;
        
        pointElement.addEventListener('click', function(e) {
            e.stopPropagation();
            showPointInfo(point.id);
            
            // Убираем активный класс у всех точек
            document.querySelectorAll('.map-point').forEach(p => {
                p.classList.remove('active');
            });
            
            // Добавляем активный класс текущей точке
            this.classList.add('active');
        });
        
        map.appendChild(pointElement);
    });
    
    // Функция показа информации о точке
    function showPointInfo(pointId) {
        const point = points.find(p => p.id === pointId);
        
        if (!point) return;
        
        infoContent.innerHTML = `
            <h3 class="point-title">${point.title}</h3>
            <p class="point-description">${point.description}</p>
            <div class="point-details">
                <p><strong>Адрес:</strong> ${point.adress}</p>
            </div>
        `;
    }
    
    document.addEventListener('click', function(e) {
        // Проверяем, был ли клик по точке
        const isPointClick = e.target.classList.contains('map-point') || 
                            e.target.closest('.map-point');
        
        // Если клик был не по точке и не внутри панели информации
        if (!isPointClick && !e.target.closest('.info-panel')) {
            infoContent.innerHTML = '<p>Нажмите на точку на карте</p>';
            document.querySelectorAll('.map-point').forEach(p => {
                p.classList.remove('active');
            });
            activePoint = null;
        }
    });
});

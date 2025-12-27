// Точки на карте
const points = [
    {
        id: 1,
        top: 33,   // вертикальная позиция в %
        left: 63,  // горизонтальная позиция в %
        title: "Г-Д.С. Шараповай нэрэмжэтэ талмай.",
        description: "Почтын дэргэдэхи талмай ба нютагай «Арбат».",
        color: "green",
        adress: "Ленинэй гудамжын 17-дохи гэрэй хажууда"
    },
    {
        id: 2,
        top: 45,
        left: 68,
        title: "Түбэй парк",
        description: "Соёлой ба амаралгын һайнаар харууһалагдаһан парк.",
        color: "green",
        adress: "Комсомольская гудамжын 6-дахи гэрэй саана"
    },
    {
        id: 3,
        top: 42,
        left: 66,
        title: "Соёлой ордон «Шахтёр»",
        description: "Соёлой ордон.",
        color: "#9b59b6",
        adress: "Комсомольская гудамжа, 6"
    },
    {
        id: 4,
        top: 28,
        left: 66,
        title: "Спортын комплекс",
        description: "Гусиноозёрскын гүрэнэй тойрогой электростанциин тамирай комплекс, хажуудань «Энергетик» стадион.",
        color: "light-blue",
        adress: "Ленина гудмамжа, 19"
    },
    {
        id: 5,
        top: 42,
        left: 70,
        title: "Гэгээн Георгиин сүмэ",
        description: "Гэгээн Георгий Илалтын һүмэ. Хажуудань Казанска һүмэ баригдажа байна.",
        color: "orange",
        adress: "Комсомольская гудамжа., 8"
    },
    {
        id: 6,
        top: 48,
        left: 65,
        title: "Тамардаг газар",
        description: "Карпенкын нэрэмжэтэ бассейн.",
        color: "light-blue",
        adress: "Комсомольская гудамжа, 2Г"
    },
    {
        id: 7,
        top: 50,
        left: 67,
        title: "Содоной түб",
        description: "Гусиноозёрска түбэй можын больницын судасай анханай таһаг.",
        color: "#F08080",
        adress: "Кузнецова гудамжа, 5"
    },
    {
        id: 8,
        top: 40,
        left: 63,
        title: "Ветерануудай аллей",
        description: "Хотын түбтэ дайнай хүшөөтэй аллей.",
        color: "green",
        adress: "«Шахтёр» гэһэн соёлой ордонһоо Ленинэй гудамжа хүрэтэр"
    },
    {
        id: 9,
        top: 45,
        left: 58,
        title: "Хүүгэдэй больница",
        description: "Гусиноозёрска нэрэмжэтэ түбэй аймагай больница, Хүүгэдэй диспансер.",
        color: "#F08080",
        adress: "Ленина гудамжа, 14"
    },
    {
        id: 10,
        top: 42,
        left: 57,
        title: "Пионерэй талмай",
        description: "Соёлой ба амаралгын парк.",
        color: "green",
        adress: "Ленинэй гудамжын 7А гэрэй хажууда"
    },
    {
        id: 11,
        top: 37,
        left: 60,
        title: "Түбэй талмай",
        description: "Сэлэнгын аймагай Захиргаанай байшанай дэргэдэхи талмай.",
        color: "green",
        adress: "Пушкинэй гудамжын 12 гэрэй хажууда"
    },
    {
        id: 12,
        top: 30,
        left: 49,
        title: "Кинотеатр «Россия»",
        description: "Хотын кинотеатр ресторан-бартай, караокетэй.",
        color: "#9b59b6",
        adress: "Пушкина гудамжа, 34"
    },
    {
        id: 13,
        top: 27,
        left: 50,
        title: "Гусиноозёрска нэрэмжэтэ түб аймагай больница.",
        description: "Гусиноозёрска нэрэмжэтэ түб аймагай больница.",
        color: "#F08080",
        adress: "Железнодорожная гудамжа, 13"
    },
    {
        id: 14,
        top: 44,
        left: 64,
        title: "Дуган",
        description: "Гусиноозёрск хотын Дуган",
        color: "orange",
        adress: "Комсомольская гудамжа, 4"
    },
    {
        id: 15,
        top: 50,
        left: 62,
        title: "Спортын түб",
        description: "Бадмаевай нэрэмжэтэ тамирай түб стадионтой.",
        color: "light-blue",
        adress: "Комсомольская гудамжа, 2А"
    },
    {
        id: 16,
        top: 5,
        left: 52,
        title: "Техникум",
        description: "Гусиноозерскийн энергетикын колледж.",
        color: "#9b59b6",
        adress: "9-дэхи микрорайон, 72"
    },
    {
        id: 17,
        top: 95,
        left: 20,
        title: "Эрье",
        description: "Галуу нуур дээрэхи хотын эрье.",
        color: "#9b59b6",
        adress: "..."
    },
    {
        id: 18,
        top: 89,
        left: 90,
        title: "Лыжна база",
        description: "Үбэлэй ажаябуулга.",
        color: "#9b59b6",
        adress: "..."
    },
    {
        id: 19,
        top: 80,
        left: 96,
        title: "Оршуулгын газар",
        description: "Хотын оршуулгын газар.",
        color: "#9b59b6",
        adress: "..."
    },
    {
        id: 20,
        top: 8,
        left: 9,
        title: "Уласай тойрогой электростанци",
        description: "Гусиноозёрскын гүрэнэй тойрогой зайн галай станци, хотын гол үйлэдбэри",
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
                <p><strong>Хаяг:</strong> ${point.adress}</p>
            </div>
        `;
    }
    
    document.addEventListener('click', function(e) {
        // Проверяем, был ли клик по точке
        const isPointClick = e.target.classList.contains('map-point') || 
                            e.target.closest('.map-point');
        
        // Если клик был не по точке и не внутри панели информации
        if (!isPointClick && !e.target.closest('.info-panel')) {
            infoContent.innerHTML = '<p>Карта дээрэхи нэгэ точко дээрэ дараха</p>';
            document.querySelectorAll('.map-point').forEach(p => {
                p.classList.remove('active');
            });
            activePoint = null;
        }
    });

});

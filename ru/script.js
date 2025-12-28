// Точки на карте
const points = [
    {
        id: 1,
        lat: 51.286921,
        lng: 106.531581,
        title: "Сквер имени Г-Д.С. Шарапова",
        description: "Сквер около здания почты и местного «Арбата».",
        color: "green",
        adress: "около ул. Ленина, 17",
        img: "https://avatars.mds.yandex.net/get-altay/16435010/2a00000199c763505433c5d3c9367c96892f/XXXL"
    },
    {
        id: 2,
        lat: 51.282242,
        lng: 106.535681,
        title: "Центральный парк",
        description: "Благоустроенный парк культуры и отдыха.",
        color: "green",
        adress: "за Комсомольской ул., 6",
        img: "https://avatars.mds.yandex.net/get-altay/16965486/2a0000019a0c26a736617cfb48ab2ebc08c9/XXXL"
    },
    {
        id: 3,
        lat: 51.283713,
        lng: 106.534762,
        title: "ДК «Шахтёр»",
        description: "Дом культуры.",
        color: "#9b59b6",
        adress: "Комсомольская ул., 6",
        img: "https://avatars.mds.yandex.net/get-altay/16430504/2a0000019a0c252d971a1423eb493ae02a79/XXXL"
    },
    {
        id: 4,
        lat: 51.289895,
        lng: 106.534660,
        title: "Спортивный комплекс",
        description: "Спортивный копмлекс Гусиноозёрской ГРЭС, рядом находится Стадион Энергетик.",
        color: "light-blue",
        adress: "ул. Ленина, 19",
        img: "https://avatars.mds.yandex.net/get-altay/363317/2a0000015faeab694c463afad00e969711d1/XXXL"
    },
    {
        id: 5,
        lat: 51.284154,
        lng: 106.536526,
        title: "Георгиевская церковь",
        description: "Церковь Георгия Победоносца. Рядом строится Казанская церковь.",
        color: "orange",
        adress: "Комсомольская ул., 8",
        img: "https://avatars.mds.yandex.net/get-altay/16416536/2a0000019a0c28c3fcc950caf3da355d8b60/XXXL"
    },
    {
        id: 6,
        lat: 51.281111,
        lng: 106.533839,
        title: "Бассейн",
        description: "Плавательный бассейн имени Е. И. Карпенко.",
        color: "light-blue",
        adress: "Комсомольская ул., 2Г",
        img: "https://avatars.mds.yandex.net/get-altay/15037629/2a00000195d7f34bc041ca28bf8b7e20b241/XXXL"
    },
    {
        id: 7,
        lat: 51.280506,
        lng: 106.535344,
        title: "Сосудистый центр",
        description: "Первичное сосудистое отделение Гусиноозёрской ЦРБ.",
        color: "#F08080",
        adress: "ул. Кузнецова, 5",
        img: "https://avatars.mds.yandex.net/get-altay/235931/2a0000015cc3e8d36a82ba67ce2568557f3d/XXXL"
    },
    {
        id: 8,
        lat: 51.284454,
        lng: 106.532203,
        title: "Аллея Ветеранов",
        description: "Аллея в центре города с военным памятником.",
        color: "green",
        adress: "от Комсомольской ул., 6 до ул. Ленина, 24",
        img: "https://avatars.mds.yandex.net/get-altay/3629247/2a00000174ff2e251d6e1161b6b895394e61/XXXL"
    },
    {
        id: 9,
        lat: 51.282703,
        lng: 106.527834,
        title: "Детская больница",
        description: "Гусиноозерская центральная районная больница, детская поликлиника.",
        color: "#F08080",
        adress: "ул. Ленина, 14",
        img: "https://avatars.mds.yandex.net/get-altay/1363376/2a0000016453a3eeda5c46d1e011312b7bae/XXXL"
    },
    {
        id: 10,
        lat: 51.283553,
        lng: 106.526791,
        title: "Пионерский сквер",
        description: "Парк культуры и отдыха.",
        color: "green",
        adress: "около ул. Ленина, 7А",
        img: "https://avatars.mds.yandex.net/get-altay/15413593/2a00000199c7676fe2d60a37ce94f3f7b1bb/XXXL"
    },
    {
        id: 11,
        lat: 51.285872,
        lng: 106.529836,
        title: "Центральная площадь",
        description: "Площадь у здания Администрации Селенгиского района.",
        color: "green",
        adress: "около ул. Пушкина, 12",
        img: "foto.png"
    },
    {
        id: 12,
        lat: 51.288891,
        lng: 106.520950,
        title: "Кинотеатр «Россия»",
        description: "Городской кинотеатр с рестобаром и караоке.",
        color: "#9b59b6",
        adress: "ул. Пушкина, 34",
        img: "foto.png"
    },
    {
        id: 13,
        lat: 51.289398,
        lng: 106.521631,
        title: "Гусиноозёрская ЦРБ",
        description: "Гусиноозёрская центральная районная больница.",
        color: "#F08080",
        adress: "Железнодорожная ул., 13",
        img: "https://avatars.mds.yandex.net/get-altay/363317/2a0000015ce2caa13a20f681a150fa438044/XXXL"
    },
    {
        id: 14,
        lat: 51.282814,
        lng: 106.533280,
        title: "Дуган",
        description: "Гусиноозёрский дуган.",
        color: "orange",
        adress: "Комсомольская ул., 4",
        img: "foto.png"
    },
    {
        id: 15,
        lat: 51.279947,
        lng: 106.530390,
        title: "Спортивный центр",
        description: "Спортивный центр имени Н.Д. Бадмаева со стадионом.",
        color: "light-blue",
        adress: "Комсомольская ул., 2А",
        img: "https://avatars.mds.yandex.net/get-altay/224414/2a0000015cc3e04659421ea36c79b621d90a/XXXL"
    },
    {
        id: 16,
        lat: 51.299565,
        lng: 106.522594,
        title: "Техникум",
        description: "Гусиноозёрский энергетический техникум.",
        color: "#9b59b6",
        adress: "9-й микрорайон, 72",
        img: "https://gusteh.profiedu.ru/upload/proedugusteh_new/images/banner/06/96/0696e8985db949a83b4c211a0d91288b.jpg"
    },
    {
        id: 17,
        lat: 51.275433,
        lng: 106.493455,
        title: "Пляж",
        description: "Городской пляж на Гусином озере.",
        color: "#9b59b6",
        adress: "...",
        img: "https://avatars.mds.yandex.net/get-altay/13951679/2a00000191a639e018909bb9d41e1bea3973/XXXL"
    },
    {
        id: 18,
        lat: 51.264150,
        lng: 106.553719,
        title: "Лыжная база",
        description: "Зимние развлечения.",
        color: "#9b59b6",
        adress: "...",
        img: "https://avatars.mds.yandex.net/get-altay/11072941/2a0000018b96175d5e136178ef0020df37ce/XXXL"
    },
    {
        id: 19,
        lat: 51.268189,
        lng: 106.557595,
        title: "Кладбище",
        description: "Городское кладбище.",
        color: "#9b59b6",
        adress: "...",
        img: "foto.png"
    },
    {
        id: 20,
        lat: 51.296373,
        lng: 106.484915,
        title: "ГРЭС",
        description: "Гусиноозёрская ГРЭС, главное предприятие города",
        color: "#9b59b6",
        adress: "...",
        img: "https://bolid.ru/files/549/727/66666.jpg"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('interactive-map').setView([51.2865, 106.4984], 14);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    
    const infoContent = document.querySelector('.info-content');
    let markers = [];
    
    points.forEach((point, index) => {
        const markerHtml = `
            <div class="map-point-leaflet" style="background-color: ${getColorHex(point.color)}"></div>
        `;
        
        const customIcon = L.divIcon({
            html: markerHtml,
            className: 'custom-marker',
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });
        
        const marker = L.marker([point.lat, point.lng], {
            icon: customIcon
        }).addTo(map);
        
        marker.on('click', function() {
            showPointInfo(point.id);
            // highlightMarker(marker);
        });
        
        marker.pointId = point.id;
        markers.push(marker);
    });
    
    function getColorHex(colorName) {
        const colors = {
            'green': '#2ecc71',
            'light-blue': '#3498db',
            'orange': '#e67e22',
            '#9b59b6': '#9b59b6',
            '#F08080': '#F08080',
            'red': '#e74c3c',
            'blue': '#2980b9',
            'purple': '#8e44ad'
        };
        return colors[colorName] || colorName;
    }
    
    function showPointInfo(pointId) {
        const point = points.find(p => p.id === pointId);
        
        if (!point) return;
        
        infoContent.innerHTML = `
            <h3 class="point-title">${point.title}</h3>
            <p class="point-description">${point.description}</p>
            <div class="point-details">
                <p><strong>Адрес:</strong> ${point.adress}</p>
                <img style="max-width:100%; height:auto; border-radius:5px;" src="${point.img}" alt="${point.title}">
            </div>
        `;
    }
    
    function highlightMarker(activeMarker) {
        markers.forEach(marker => {
            const el = marker.getElement();
            if (el) {
                el.style.transform = marker === activeMarker ? 'scale(1.3)' : 'scale(1)';
                el.style.zIndex = marker === activeMarker ? '1000' : '1';
            }
        });
    }
    
    function initMobileFeatures() {
        if (window.innerWidth <= 768) {
            L.control.zoom({
                position: 'bottomright'
            }).addTo(map);
            
            map.setZoom(13);
        }
    }
    
    initMobileFeatures();
    
    window.addEventListener('resize', initMobileFeatures);
});

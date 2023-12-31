ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [51.72854257227058, 36.122784499999995],
    zoom: 14,
    controls: [],

    myPlacemark1 = new ymaps.Placemark([51.72854257227058, 36.122784499999995], {
      balloonContent: 'Маленькая иконка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/Yandex_Maps_icon.svg',
      iconImageSize: [26, 33],
      iconImageOffset: [0, 0],
    }),
  });

  var myMap2 = new ymaps.Map('map2', {
    center: [51.72854257227058, 36.122784499999995],
    zoom: 14,
    controls: [],
    
    myPlacemark2 = new ymaps.Placemark([51.739117, 36.122561], {
      balloonContent: 'Средняя иконка'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/Yandex_Maps_icon.svg',
      iconImageSize: [26, 33],
      iconImageOffset: [-26, -46]
    }),
  });

  myMap.geoObjects.add(myPlacemark1);
  myMap2.geoObjects.add(myPlacemark2);
}
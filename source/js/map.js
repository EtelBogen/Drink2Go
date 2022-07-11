const ZOOM_START = 18;
const LAYER_TILE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const DRINK2GO = {
  lat: 59.968304,
  lng: 30.317556
};

const mapPin = L.icon({
  iconUrl: '/img/svg/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [26, 52],
});

const mapMarker = L.marker(
  {
    lat: DRINK2GO.lat,
    lng: DRINK2GO.lng,
  },
  {
    icon: mapPin,
  }
);

const mapImage = document.querySelector('.map__picture');
const mapCanvas = document.querySelector('.map__canvas');

const map = L.map('map-canvas');

mapImage.classList.remove('map__picture--nojs');
mapCanvas.classList.remove('map__canvas--nojs');

map.setView({
  lat: DRINK2GO.lat,
  lng: DRINK2GO.lng,
}, ZOOM_START);

L.tileLayer(
  LAYER_TILE,
  {
    attribution: LAYER_ATTRIBUTION,
  },
).addTo(map);

mapMarker.addTo(map);

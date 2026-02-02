var map=L.map('map').setView([27.8,17.3],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

window.layers=[];

function loadLayer(file){
  let l=omnivore.kml(file);
  l.addTo(map);
  layers.push(l);
}

loadLayer("data/الفنادق.kml");
loadLayer("data/القرى_والمنتجعات_السياحية.kml");
loadLayer("data/المشاريع وفرص الاستثمار السياحي.kml");
loadLayer("data/خريطة مدن الثراث العالمي الخمسة.kml");

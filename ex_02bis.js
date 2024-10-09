const map = L.map('map').setView([46.603354, 1.888334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);
const epitechIcon = L.icon({
    iconUrl: "logo.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const schools = [
 { name: "Paris", coords: [48.8566, 2.3522] },
 { name: "Bordeaux", coords: [44.8378, -0.5792] },
 { name: "Lyon", coords: [45.7640, 4.8357] },
];

for (let i = 0; i < schools.length; i++) {
    const school = schools[i];
    const marker = L.marker(school.coords, { icon: epitechIcon })
   .addTo(map)
  .bindPopup(school.name + " rocks!");
    
    marker.setZIndexOffset(1000);
}

map.setMinZoom(5);

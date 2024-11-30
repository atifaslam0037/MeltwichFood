// Initialize Mapbox
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.3832, 43.6532], // Initial center (example: Toronto)
    zoom: 10
});

// Sample locations data
const locations = [
    {
        name: 'Bedford',
        coordinates: [`12 Ella Ln Unit 105, Bedford, NS B4B 2J6
(902) 435-7777`]
    },
    {
        name: 'Location 2',
        coordinates: [-79.3850, 43.6560]
    },
    {
        name: 'Location 3',
       
        coordinates: [-79.3870, 43.6590]
    }
];

// Add locations to the list and map
locations.forEach(location => {
    // Add to location list
    const locationItem = document.createElement('div');
    locationItem.classList.add('location-item');
    locationItem.innerHTML = `<h3>${location.name}</h3><p>${location.address}</p>`;
    locationItem.addEventListener('click', () => {
        map.flyTo({
            center: location.coordinates,
            zoom: 14
        });
    });
    document.getElementById('location-list').appendChild(locationItem);

    // Add marker to map
    new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.name}</h3><p>${location.address}</p>`))
        .addTo(map);
});

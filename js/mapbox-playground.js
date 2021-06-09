const mapboxToken = "pk.eyJ1IjoibWl0Y2hlbGxob2d1ZTAiLCJhIjoiY2twcG44YnFrMTFtMzJwbXczc3N1NzNrbSJ9.IBd4BQGSi5__uarsZNIOQQ"

mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-101.8552, 33.5779],
    zoom: 12
});

let marker = setMarker([-101.8552, 33.5779]);

addMapEvent(marker)

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
                                .addTo(map)
}

function addMapEvent(marker) {
    map.on('click', function (event) {
        console.log(event.lngLat)
        marker.setLngLat(event.lngLat).addTo(map)
    })
}
const mapboxToken = "pk.eyJ1IjoibWl0Y2hlbGxob2d1ZTAiLCJhIjoiY2twcG44YnFrMTFtMzJwbXczc3N1NzNrbSJ9.IBd4BQGSi5__uarsZNIOQQ"

mapboxgl.accessToken = mapboxToken;

// adding Map to page
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-101.8552, 33.5779],
    zoom: 12
});

let marker = setMarker([-101.9234306, 33.5370314]);
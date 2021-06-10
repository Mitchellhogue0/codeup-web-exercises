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

// create new geoCoder and assign to variable
let geocoder = setGeoCoder();
addGeocoder(geocoder);
addGeocoderEvent(geocoder);
setPopUp("this is my popup")

// creates and returns a new geoCoder
    function setGeoCoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
    }
// adds geocoder to map
    function addGeocoder (geocoder) {
        map.addControl(geocoder);
    }
// sets new marker location
    function addGeocoderEvent() {
        geocoder.on("result", function (event){
            marker.setLngLat(event.result.geometry.coordinates)

            setPopUp(event.result.name)
        })
    }


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

function setPopUp (textDetails) {
        let popup = new mapboxgl.Popup()
            .setHTML(`<p>${textDetails}</p>`)
            .addTo(map);

        marker.setPopup(popup);
}
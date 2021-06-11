mapboxgl.accessToken = MAPBOX_TOKEN;

// adding Map to page
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-101.9234306, 33.5370314],
    zoom: 15
});

// setting where the marker should be put////
//array of objects with description of restaurants
let restaurants = [
    {
        name: "Uncle Julio's",
        marker: setMarker([-101.9234306, 33.5370314]),
        description: "This is my favorite restaurant. The dishes are all very well put together and their drinks are amazing",
        picLink: "http://www.restaurantnews.com/wp-content/uploads/2020/02/Uncle-Julios-Hacienda-Colorado-Opens-in-Wheat-Ridge.jpg"
    }, {
        name: "Cheesecake Factory",
        marker: setMarker([-101.925702, 33.541144]),
        description: "This is my second favorite restaurant. So much variety in the dishes that you could choose from, and I love cheesecake",
        picLink: "https://www.thecheesecakefactory.com/assets/images/Menu-Import/960x720-CCF_ChocolateCarameliciousCheesecake.jpg"
    }, {
        name: "Olive Garden",
        marker: setMarker([-101.923397, 33.5418618]),
        description: "This is my third favorite restaurant. I love italian food and olive garden is consistent, always hit the mark",
        picLink: "https://media.olivegarden.com/images/site/ext/pages/_promotions/order_online/togo-pickup-triage-053119-sdd.jpg"
    }
]
// let markerUncle = setMarker([-101.9234306, 33.5370314]);
// let markerCheese = setMarker([-101.925702, 33.541144]);
// let markerOlive = setMarker([-101.923397, 33.5418618])

//setting what the popup initially says
// setPopUp("Uncle Julio's, 6230 Slide Rd, Lubbock, TX 79414", markerUncle)
// setPopUp("Cheesecake Factory, 6014 Slide Rd, Lubbock, TX 79414", markerCheese)
// setPopUp("Olive Garden, 5702 Slide Rd, Lubbock, TX 79414", markerOlive)

// adding the marker to the map
function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map)
}

setPopUp(restaurants)

// creates popup and places on initial marker//// refactored for a for each loop and description
function setPopUp(arr) {
    arr.forEach(function (object) {
        let popup = new mapboxgl.Popup()
            .setHTML(`<div><h4>${object.name}</h4><p>${object.description}</p><img src="${object.picLink}" alt="" width="150px"></div>`)
            .addTo(map);

        object.marker.setPopup(popup);
        object.marker.togglePopup();
    })
}

let geocoder = setGeoCoder();
addGeocoder(geocoder)
addGeocoderEvent(geocoder)

function setGeoCoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        // marker: false
    })
}

function addGeocoder (geocoder) {
    map.addControl(geocoder);
}

function addGeocoderEvent() {
    geocoder.on("result", function (event){
        marker.setLngLat(event.result.geometry.coordinates)

        setPopUp(event.result.name)
    })
}
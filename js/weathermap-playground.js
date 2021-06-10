
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: OPEN_WEATHERMAP_TOKEN,
        q: "Lubbock, Tx, US"
    },
    success: function (data){
        console.log(data);
    }

})


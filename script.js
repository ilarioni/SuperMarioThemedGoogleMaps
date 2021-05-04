function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.668012480048375, lng: 135.43014409327287},
        zoom: 18,
        mapId: '743b55a6eae40492'
      });

    new google.maps.Marker({
    position: { lat: -25.363, lng: 131.044 },
    map,
    title: "Hello World!",
    });
}

// 34.668012480048375, 135.43014409327287

function initMap() {
    var myLatlng = new google.maps.LatLng(50.9301535, 4.5777053);

    var mapOptions = {
        zoom: 14,
        minZoom: 11,
        maxZoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
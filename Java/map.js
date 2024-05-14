function initMap() {
    var location = { lat: 55.822407, lng: -3.956411 }; // Example coordinates (London)
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
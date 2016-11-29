var app = angular.module("ozil", []);



app.controller('arsenal', function($scope){
  var mylat= 0; 
  var mylong = 0;
    
  $scope.findme = function($scope) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {

                mylat = position.coords.latitude; 
                mylong = position.coords.longitude;
                console.log(mylat);
                console.log(mylong);
        });
        
    }

	var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(mylat , mylong );
	geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {

                            console.log(results[1].formatted_address);
                        } else {
                            console.log('Location not found');
                        }
                    } else {
                        console.log('Geocoder failed due to: ' + status);
                    }
                });
}
});
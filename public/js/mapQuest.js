function initMap() {
	// add your code here
	L.mapquest.key = 'rWNmGJR21dtZuDA9n4iGvSAMbOXZjJSO';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}

L.mapbox.accessToken = 'pk.eyJ1IjoibXJzcGFtbXkiLCJhIjoiYm5oMlBMbyJ9.6_x7dwU25CARe5HBSOOGOQ';
var map = L.mapbox.map('map', 'mrspammy.40653ea7');

// L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
// 	maxZoom: 18,
// 	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
// 		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
// 		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 	id: 'examples.map-i875mjb7'
// }).addTo(map);

function addMarker(event) {
	var coords = [event.venue.latitude, event.venue.longitude];

	// Slices text to at most max characters, without slicing words in the middle.
	function sliceToWordLimit(text, max) {
		if (max >= text.length) {
			return text
		}
		for (var i=max; i>0; --i) {
			// Quick hack to detect word characters.
			if (text[i].toUpperCase() !== text[i].toLowerCase()) {
				return text.slice(0, i)
			}
		}
		// wtf?
		return text.slice(0, max)
	}

	var popupHtml = '<h1>'+event.location+'</h1>'+
	'<div class="description">'+sliceToWordLimit(event.description, 300)+'</p>'+
	'<button class="fb-btn">Acesse o Evento</button>';

	var marker = L.marker(coords, {
		title: event.name,
		riseOnHover: true,
	})

	marker.addTo(map)
	  .bindPopup(popupHtml).openPopup();
}

if (__mapdata) {
	for (var i=0; i<__mapdata.length; ++i) {
		addMarker(__mapdata[i])
	}
}

// L.circle([51.508, -0.11], 500, {
// 	color: 'red',
// 	fillColor: '#f03',
// 	fillOpacity: 0.5
// }).addTo(map).bindPopup("I am a circle.");

// L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047]
// ]).addTo(map).bindPopup("I am a polygon.");

// function onMapClick(e) {
// 	popup
// 		.setLatLng(e.latlng)
// 		.setContent("You clicked the map at " + e.latlng.toString())
// 		.openOn(map);
// }

// map.on('click', onMapClick);

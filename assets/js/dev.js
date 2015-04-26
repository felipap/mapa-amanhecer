(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/felipe/Projects/amanhecer/static/javascript/main.js":[function(require,module,exports){

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
	'<div class="label-default">'+event.count+' confirmaram presença</div>'+
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

},{}]},{},["/home/felipe/Projects/amanhecer/static/javascript/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvamF2YXNjcmlwdC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbkwubWFwYm94LmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pYlhKemNHRnRiWGtpTENKaElqb2lZbTVvTWxCTWJ5SjkuNl94N2R3VTI1Q0FSZTVIQlNPT0dPUSc7XG52YXIgbWFwID0gTC5tYXBib3gubWFwKCdtYXAnLCAnbXJzcGFtbXkuNDA2NTNlYTcnKTtcblxuLy8gTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMve2lkfS97en0ve3h9L3t5fS5wbmcnLCB7XG4vLyBcdG1heFpvb206IDE4LFxuLy8gXHRhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCAnICtcbi8vIFx0XHQnPGEgaHJlZj1cImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzIuMC9cIj5DQy1CWS1TQTwvYT4sICcgK1xuLy8gXHRcdCdJbWFnZXJ5IMKpIDxhIGhyZWY9XCJodHRwOi8vbWFwYm94LmNvbVwiPk1hcGJveDwvYT4nLFxuLy8gXHRpZDogJ2V4YW1wbGVzLm1hcC1pODc1bWpiNydcbi8vIH0pLmFkZFRvKG1hcCk7XG5cbmZ1bmN0aW9uIGFkZE1hcmtlcihldmVudCkge1xuXHR2YXIgY29vcmRzID0gW2V2ZW50LnZlbnVlLmxhdGl0dWRlLCBldmVudC52ZW51ZS5sb25naXR1ZGVdO1xuXG5cdC8vIFNsaWNlcyB0ZXh0IHRvIGF0IG1vc3QgbWF4IGNoYXJhY3RlcnMsIHdpdGhvdXQgc2xpY2luZyB3b3JkcyBpbiB0aGUgbWlkZGxlLlxuXHRmdW5jdGlvbiBzbGljZVRvV29yZExpbWl0KHRleHQsIG1heCkge1xuXHRcdGlmIChtYXggPj0gdGV4dC5sZW5ndGgpIHtcblx0XHRcdHJldHVybiB0ZXh0XG5cdFx0fVxuXHRcdGZvciAodmFyIGk9bWF4OyBpPjA7IC0taSkge1xuXHRcdFx0Ly8gUXVpY2sgaGFjayB0byBkZXRlY3Qgd29yZCBjaGFyYWN0ZXJzLlxuXHRcdFx0aWYgKHRleHRbaV0udG9VcHBlckNhc2UoKSAhPT0gdGV4dFtpXS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdHJldHVybiB0ZXh0LnNsaWNlKDAsIGkpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHd0Zj9cblx0XHRyZXR1cm4gdGV4dC5zbGljZSgwLCBtYXgpXG5cdH1cblxuXHR2YXIgcG9wdXBIdG1sID0gJzxoMT4nK2V2ZW50LmxvY2F0aW9uKyc8L2gxPicrXG5cdCc8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4nK3NsaWNlVG9Xb3JkTGltaXQoZXZlbnQuZGVzY3JpcHRpb24sIDMwMCkrJzwvcD4nK1xuXHQnPGRpdiBjbGFzcz1cImxhYmVsLWRlZmF1bHRcIj4nK2V2ZW50LmNvdW50KycgY29uZmlybWFyYW0gcHJlc2Vuw6dhPC9kaXY+Jytcblx0JzxidXR0b24gY2xhc3M9XCJmYi1idG5cIj5BY2Vzc2UgbyBFdmVudG88L2J1dHRvbj4nO1xuXG5cdHZhciBtYXJrZXIgPSBMLm1hcmtlcihjb29yZHMsIHtcblx0XHR0aXRsZTogZXZlbnQubmFtZSxcblx0XHRyaXNlT25Ib3ZlcjogdHJ1ZSxcblx0fSlcblxuXHRtYXJrZXIuYWRkVG8obWFwKVxuXHQgIC5iaW5kUG9wdXAocG9wdXBIdG1sKS5vcGVuUG9wdXAoKTtcbn1cblxuaWYgKF9fbWFwZGF0YSkge1xuXHRmb3IgKHZhciBpPTA7IGk8X19tYXBkYXRhLmxlbmd0aDsgKytpKSB7XG5cdFx0YWRkTWFya2VyKF9fbWFwZGF0YVtpXSlcblx0fVxufVxuXG4vLyBMLmNpcmNsZShbNTEuNTA4LCAtMC4xMV0sIDUwMCwge1xuLy8gXHRjb2xvcjogJ3JlZCcsXG4vLyBcdGZpbGxDb2xvcjogJyNmMDMnLFxuLy8gXHRmaWxsT3BhY2l0eTogMC41XG4vLyB9KS5hZGRUbyhtYXApLmJpbmRQb3B1cChcIkkgYW0gYSBjaXJjbGUuXCIpO1xuXG4vLyBMLnBvbHlnb24oW1xuLy8gXHRbNTEuNTA5LCAtMC4wOF0sXG4vLyBcdFs1MS41MDMsIC0wLjA2XSxcbi8vIFx0WzUxLjUxLCAtMC4wNDddXG4vLyBdKS5hZGRUbyhtYXApLmJpbmRQb3B1cChcIkkgYW0gYSBwb2x5Z29uLlwiKTtcblxuLy8gZnVuY3Rpb24gb25NYXBDbGljayhlKSB7XG4vLyBcdHBvcHVwXG4vLyBcdFx0LnNldExhdExuZyhlLmxhdGxuZylcbi8vIFx0XHQuc2V0Q29udGVudChcIllvdSBjbGlja2VkIHRoZSBtYXAgYXQgXCIgKyBlLmxhdGxuZy50b1N0cmluZygpKVxuLy8gXHRcdC5vcGVuT24obWFwKTtcbi8vIH1cblxuLy8gbWFwLm9uKCdjbGljaycsIG9uTWFwQ2xpY2spO1xuIl19

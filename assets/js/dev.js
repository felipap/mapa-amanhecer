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

	if (!event.venue.latitude) {
		console.warn('Problematic event:', event.name)
		return;
	}

	console.log(event.name, coords)

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

},{}]},{},["/home/felipe/Projects/amanhecer/static/javascript/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvamF2YXNjcmlwdC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuTC5tYXBib3guYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2liWEp6Y0dGdGJYa2lMQ0poSWpvaVltNW9NbEJNYnlKOS42X3g3ZHdVMjVDQVJlNUhCU09PR09RJztcbnZhciBtYXAgPSBMLm1hcGJveC5tYXAoJ21hcCcsICdtcnNwYW1teS40MDY1M2VhNycpO1xuXG4vLyBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZXMubWFwYm94LmNvbS92My97aWR9L3t6fS97eH0ve3l9LnBuZycsIHtcbi8vIFx0bWF4Wm9vbTogMTgsXG4vLyBcdGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwOi8vb3BlbnN0cmVldG1hcC5vcmdcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsICcgK1xuLy8gXHRcdCc8YSBocmVmPVwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgJyArXG4vLyBcdFx0J0ltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHA6Ly9tYXBib3guY29tXCI+TWFwYm94PC9hPicsXG4vLyBcdGlkOiAnZXhhbXBsZXMubWFwLWk4NzVtamI3J1xuLy8gfSkuYWRkVG8obWFwKTtcblxuZnVuY3Rpb24gYWRkTWFya2VyKGV2ZW50KSB7XG5cdHZhciBjb29yZHMgPSBbZXZlbnQudmVudWUubGF0aXR1ZGUsIGV2ZW50LnZlbnVlLmxvbmdpdHVkZV07XG5cblx0Ly8gU2xpY2VzIHRleHQgdG8gYXQgbW9zdCBtYXggY2hhcmFjdGVycywgd2l0aG91dCBzbGljaW5nIHdvcmRzIGluIHRoZSBtaWRkbGUuXG5cdGZ1bmN0aW9uIHNsaWNlVG9Xb3JkTGltaXQodGV4dCwgbWF4KSB7XG5cdFx0aWYgKG1heCA+PSB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHRleHRcblx0XHR9XG5cdFx0Zm9yICh2YXIgaT1tYXg7IGk+MDsgLS1pKSB7XG5cdFx0XHQvLyBRdWljayBoYWNrIHRvIGRldGVjdCB3b3JkIGNoYXJhY3RlcnMuXG5cdFx0XHRpZiAodGV4dFtpXS50b1VwcGVyQ2FzZSgpICE9PSB0ZXh0W2ldLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0cmV0dXJuIHRleHQuc2xpY2UoMCwgaSlcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gd3RmP1xuXHRcdHJldHVybiB0ZXh0LnNsaWNlKDAsIG1heClcblx0fVxuXG5cdGlmICghZXZlbnQudmVudWUubGF0aXR1ZGUpIHtcblx0XHRjb25zb2xlLndhcm4oJ1Byb2JsZW1hdGljIGV2ZW50OicsIGV2ZW50Lm5hbWUpXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc29sZS5sb2coZXZlbnQubmFtZSwgY29vcmRzKVxuXG5cdHZhciBwb3B1cEh0bWwgPSAnPGgxPicrZXZlbnQubG9jYXRpb24rJzwvaDE+Jytcblx0JzxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPicrc2xpY2VUb1dvcmRMaW1pdChldmVudC5kZXNjcmlwdGlvbiwgMzAwKSsnPC9wPicrXG5cdCc8ZGl2IGNsYXNzPVwibGFiZWwtZGVmYXVsdFwiPicrZXZlbnQuY291bnQrJyBjb25maXJtYXJhbSBwcmVzZW7Dp2E8L2Rpdj4nK1xuXHQnPGJ1dHRvbiBjbGFzcz1cImZiLWJ0blwiPkFjZXNzZSBvIEV2ZW50bzwvYnV0dG9uPic7XG5cblx0dmFyIG1hcmtlciA9IEwubWFya2VyKGNvb3Jkcywge1xuXHRcdHRpdGxlOiBldmVudC5uYW1lLFxuXHRcdHJpc2VPbkhvdmVyOiB0cnVlLFxuXHR9KVxuXG5cdG1hcmtlci5hZGRUbyhtYXApXG5cdCAgLmJpbmRQb3B1cChwb3B1cEh0bWwpLm9wZW5Qb3B1cCgpO1xufVxuXG5pZiAoX19tYXBkYXRhKSB7XG5cdGZvciAodmFyIGk9MDsgaTxfX21hcGRhdGEubGVuZ3RoOyArK2kpIHtcblx0XHRhZGRNYXJrZXIoX19tYXBkYXRhW2ldKVxuXHR9XG59XG4iXX0=

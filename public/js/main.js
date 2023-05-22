window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 0) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

	// Initialize and add the map
	let map;

	// Initialize and add the map
function initMap() {
	// The location of Uluru
	const SantaClementina = { lat: -35.231594, lng: -63.5921452 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 19,
	  center: SantaClementina,
	});
	// The marker, positioned at Uluru
	// const marker = new google.maps.Marker({
	//   position: SantaClementina,
	//   map: map,
	// });
  }
  
  window.initMap = initMap;
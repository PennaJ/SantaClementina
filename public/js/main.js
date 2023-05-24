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

function postData(data,route){
	fetch(route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            // Handle successful response
            console.log("POST request successful");
        } else {
            // Handle error response
            console.log("POST request failed");
        }
    })
    .catch(error => {
        // Handle network error
        console.log("Network error occurred");
    });
}


// 	// Initialize and add the map
// 	let map;

// 	// Initialize and add the map
// function initMap() {
// 	// The location of Uluru
// 	const SantaClementina = { lat: -35.231594, lng: -63.5921452 };
// 	// The map, centered at Uluru
// 	const map = new google.maps.Map(document.getElementById("map"), {
// 	  zoom: 10,
// 	  center: SantaClementina,
// 	});
// 	// The marker, positioned at Uluru
// 	const marker = new google.maps.Marker({
// 	  position: SantaClementina,
// 	  map: map,
// 	  title: 'Santa Clementina',
// 	  //icon: __dirname + '../img/santa-clementina-logo.svg'
// 	  label: { color: '#002c51', fontWeight: 'bold', fontSize: '14px', text: 'Santa Clementina - Cervecería', className:'label-position' }
// 	});
//   }
  
//   window.initMap = initMap;
import MobileMenu from './modules/MobileMenu.js';
import Spinner from './modules/Spinner.js';
import Validation from './modules/Validation.js';
import Sidebar from './modules/Sidebar.js';


const mobilemenu = new MobileMenu();
const spinner = new Spinner();
const validation = new Validation();
const sidebar = new Sidebar();


window.initMap=function() {
     var map = new google.maps.Map(document.getElementById("google-map"), {
          center: {lat:54.710426, lng:20.452214},
          zoom: 15,
          scrollwheel: false,
        zoomControl: true,
        scaleControl: false
        });

       

      var styledMapType = new google.maps.StyledMapType(

[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#4369aa"
            },
            {
                "visibility": "on"
            }
        ]
    }
],
  {name: 'Styled Map'});
            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
            
     var clickIcon = {
    path: 'M8,0C3.400,0,0,3.582,0,8s8,24,8,24s8-19.582,8-24S12.418,0,8,0z M8,12c-2.209,0-4-1.791-4-4   s1.791-4,4-4s4,1.791,4,4S10.209,12,8,12z',
    fillColor: "#004cd1",
    fillOpacity: 1,
    strokeColor: "#004cd1",
    strokeWeight: 1,
    labelOrigin: new google.maps.Point(8, 10),
    anchor: new google.maps.Point(9, 35),
  };

    var marker = new google.maps.Marker({
          position: {lat:54.710426, lng:20.452214},
          graggable:true,
          map: map,
          icon:clickIcon,
          animation:google.maps.Animation.BOUNCE
        });
    
   
}
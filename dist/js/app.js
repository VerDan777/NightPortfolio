import MobileMenu from './modules/MobileMenu.js';


const mobilemenu = new MobileMenu();


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9tb2R1bGVzL01vYmlsZU1lbnUuanMnO1xuXG5cbmNvbnN0IG1vYmlsZW1lbnUgPSBuZXcgTW9iaWxlTWVudSgpO1xuXG5cbndpbmRvdy5pbml0TWFwPWZ1bmN0aW9uKCkge1xuICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvb2dsZS1tYXBcIiksIHtcbiAgICAgICAgICBjZW50ZXI6IHtsYXQ6NTQuNzEwNDI2LCBsbmc6MjAuNDUyMjE0fSxcbiAgICAgICAgICB6b29tOiAxNSxcbiAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgICBzY2FsZUNvbnRyb2w6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgXG5cbiAgICAgIHZhciBzdHlsZWRNYXBUeXBlID0gbmV3IGdvb2dsZS5tYXBzLlN0eWxlZE1hcFR5cGUoXG5cbltcbiAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2YyZjJmMlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogNDVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0MzY5YWFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dLFxuICB7bmFtZTogJ1N0eWxlZCBNYXAnfSk7XG4gICAgICAgICAgICBtYXAubWFwVHlwZXMuc2V0KCdzdHlsZWRfbWFwJywgc3R5bGVkTWFwVHlwZSk7XG4gICAgICAgICAgICBtYXAuc2V0TWFwVHlwZUlkKCdzdHlsZWRfbWFwJyk7XG4gICAgICAgICAgICBcbiAgICAgdmFyIGNsaWNrSWNvbiA9IHtcbiAgICBwYXRoOiAnTTgsMEMzLjQwMCwwLDAsMy41ODIsMCw4czgsMjQsOCwyNHM4LTE5LjU4Miw4LTI0UzEyLjQxOCwwLDgsMHogTTgsMTJjLTIuMjA5LDAtNC0xLjc5MS00LTQgICBzMS43OTEtNCw0LTRzNCwxLjc5MSw0LDRTMTAuMjA5LDEyLDgsMTJ6JyxcbiAgICBmaWxsQ29sb3I6IFwiIzAwNGNkMVwiLFxuICAgIGZpbGxPcGFjaXR5OiAxLFxuICAgIHN0cm9rZUNvbG9yOiBcIiMwMDRjZDFcIixcbiAgICBzdHJva2VXZWlnaHQ6IDEsXG4gICAgbGFiZWxPcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCg4LCAxMCksXG4gICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoOSwgMzUpLFxuICB9O1xuXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgIHBvc2l0aW9uOiB7bGF0OjU0LjcxMDQyNiwgbG5nOjIwLjQ1MjIxNH0sXG4gICAgICAgICAgZ3JhZ2dhYmxlOnRydWUsXG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgaWNvbjpjbGlja0ljb24sXG4gICAgICAgICAgYW5pbWF0aW9uOmdvb2dsZS5tYXBzLkFuaW1hdGlvbi5CT1VOQ0VcbiAgICAgICAgfSk7XG4gICAgXG4gICBcbn0iXX0=

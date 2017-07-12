
 class Map  {
   constructor() {
window.initMap=function() {
    var stylemap = new google.maps.StyledMapType(require('./StyleMap.js'));
     var map = new google.maps.Map(document.getElementById("google-map"), {
          center: {lat:54.710426, lng:20.452214},
          zoom: 15,
          scrollwheel: false,
        zoomControl: true,
        scaleControl: false
    });
    
    map.mapTypes.set('styled_map', stylemap);
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
   }

 }
 export default Map;

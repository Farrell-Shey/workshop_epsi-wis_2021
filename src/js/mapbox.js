/* https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/ */

let key = 'sk.eyJ1IjoiZmFycmVsbHNoZXkiLCJhIjoiY2t1Z3B1YmJrMGJ4azMwcXY5cWw0ZTliaSJ9.1de70CcVIeUxeFbdxxHY6g';

let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFycmVsbHNoZXkiLCJhIjoiY2t1Z3BwMzh1MjQwaTJubXY3dDdlNnZwOCJ9.8bhjvNYwraOwwdvcTlkkfQ';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-1.55, 47.2], // starting position [lng, lat]
    zoom: 12 // starting zoom

});

// map.addControl(new mapboxgl.NavigationControl());


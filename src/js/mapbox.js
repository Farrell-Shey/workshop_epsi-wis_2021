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

map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
// Load an image from an external URL.
    map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
        (error, image) => {
            if (error) throw error;

// Add the image to the map style.
            map.addImage('cat', image);

// Add a data source containing one point feature.
            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-1.55, 47.2]
                            }
                        }
                    ]
                }
            });

// Add a layer to use the image to represent the data.
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'point', // reference the data source
                'layout': {
                    'icon-image': 'cat', // reference the image
                    'icon-size': 0.25
                }
            });
        }
    );
});

map.on('click', 'point', (e) => {
// Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
});

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'point', () => {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'point', () => {
    map.getCanvas().style.cursor = '';
});
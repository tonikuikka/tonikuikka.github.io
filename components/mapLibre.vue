<script lang="ts">
	export default {
        data() {
            return {
                map: null as any
            }
        },
        methods: {
            initMap: async function() {
                const maplibregl = await import('maplibre-gl');
                const turf = await import('@turf/turf');
                const geojson = {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'message': 'Oulu',
                                'iconSize': [60, 60]
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [24.1240717, 65.199699]
                            }
                        }, {
                            'type': 'Feature',
                            'properties': {
                                'message': 'Suonenjoki',
                                'iconSize': [50, 50]
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [27.0831549, 62.6261045]
                            }
                        }, {
                            'type': 'Feature',
                            'properties': {
                                'message': 'Tampere',
                                'iconSize': [40, 40]
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [23.5006663, 61.6318575]
                            }
                        }, {
                            'type': 'Feature',
                            'properties': {
                                'message': 'Brno',
                                'iconSize': [40, 40]
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [16.2661404, 49.2018748]
                            }
                        }, {
                            'type': 'Feature',
                            'properties': {
                                'message': 'Praha',
                                'iconSize': [40, 40]
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [14.3008164, 50.0597734]
                            }
                        }
                    ]
                };

                this.map = new maplibregl.Map({
                    container: 'map',
                    center: [0, 0],
                    zoom: 1,
                    attributionControl: false,
                    style: 'https://api.maptiler.com/maps/f34804ce-f73d-45af-9dc4-7e99216d8a25/style.json?key=EjPwybiX5YV8l2YqurXi'
                });

                geojson.features.forEach((marker) => {
                    // create a DOM element for the marker
                    const el = document.createElement('div');
                    el.className = 'marker';
                    el.style.backgroundImage =
                        `url(https://placekitten.com/g/${
                            marker.properties.iconSize.join('/')
                        }/)`;
                    el.style.width = `${marker.properties.iconSize[0]}px`;
                    el.style.height = `${marker.properties.iconSize[1]}px`;

                    el.addEventListener('click', () => {
                        window.alert(marker.properties.message);
                    });

                    // add marker to map
                    new maplibregl.Marker({element: el})
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(this.map);
                });

                console.log(turf.center(geojson));
                this.map.jumpTo({center: turf.center(geojson).geometry.coordinates,zoom: 2,
  pitch: 45});
            }
        },
        mounted() {
            this.initMap();
        }
	}
</script>

<template>
    <div id="map"></div>
</template>

<style scoped>
    @import 'maplibre-gl/dist/maplibre-gl.css';
    div#map {
        height: 300px;
    }
</style>
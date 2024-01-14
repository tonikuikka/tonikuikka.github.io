<script lang="ts">
import { AllGeoJSON } from '@turf/turf';
import { LngLatLike, Marker } from 'maplibre-gl';

	export default {
        data() {
            return {
                map: null as any,
                center: [0, 0] as LngLatLike,
                markers: [] as any[]
            }
        },
        emits: ['markerClick'],
        mounted() {
            this.initMap();
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
                                'title': 'oulu',
                                'desc': 'ouluDesc'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [25.5085619, 65.0141138]
                            }
                        }, {
                            'type': 'Feature',
                            'properties': {
                                'title': 'suonenjoki',
                                'desc': 'suonenjokiDesc'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [27.0831549, 62.6261045]
                            }
                        }, {
                            'type': 'Feature',
                            'properties': {
                                'title': 'tampere',
                                'desc': 'tampereDesc'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [23.5006663, 61.6318575]
                            }
                        }, {
                            'type': 'Feature',
                            'properties': {
                                'title': 'brno',
                                'desc': 'brnoDesc'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [16.2661404, 49.2018748]
                            }
                        }, {
                            'type': 'Feature',
                            'properties': {
                                'title': 'prague',
                                'desc': 'pragueDesc'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [14.3008164, 50.0597734]
                            }
                        }
                    ]
                };
                this.center = (turf.center(geojson as AllGeoJSON).geometry.coordinates || [0, 0]) as LngLatLike;
                this.map = new maplibregl.Map({
                    container: 'map',
                    center: this.center,
                    zoom: 3,
                    pitch: 75,
                    attributionControl: false,
                    style: 'https://api.maptiler.com/maps/f34804ce-f73d-45af-9dc4-7e99216d8a25/style.json?key=EjPwybiX5YV8l2YqurXi'
                });
                this.map.on('load', () => {
                    for (let i = 0; i < geojson.features.length; i++) {
                        const feature = geojson.features[i];
                        const marker = new maplibregl.Marker({color: "var(--accent2)", anchor:'bottom', offset: [-0.5, -2]})
                        .setLngLat(feature.geometry.coordinates as LngLatLike)
                        .addTo(this.map);
                        
                        marker.addClassName('marker');
                        if (i === 0) {
                            marker.addClassName('selected');
                            this.$emit('markerClick', feature.properties);
                        }
                        const el = marker.getElement() as HTMLElement;
                        el.addEventListener('click', () => { this.onMarkerClick(marker, feature.properties) });

                        this.markers.push(marker);
                    }
                });
            },
            onMarkerClick: function(marker: Marker, properties: { [key: string]: any}) {
                if (!this.map) return;

                this.map.flyTo({center: marker.getLngLat(), zoom: 6});
                for (const m of this.markers) {
                    m.removeClassName('selected');
                }
                marker.addClassName('selected');
                this.$emit('markerClick', properties);
            },
            zoomOut: function() {
                if (!this.map) return;
                this.map.flyTo({ center: this.center, zoom: 3, pitch: 75, bearing: 0 });
            }
        }
	}
</script>

<template>
    <div id="map-container">
        <div id="map"></div>
        <button :title="$t('zoomOutMap')" @click="zoomOut">
            <span class="material-icons">
                zoom_out_map
            </span>
        </button>
    </div>
</template>

<style>
    @import 'maplibre-gl/dist/maplibre-gl.css';
    .marker:hover {
        cursor: pointer;
    }
    .marker:hover svg,
    .marker.selected svg {
        width: 150% !important;
        height: 150% !important;
    }
</style>

<style scoped>
    div#map-container {
        position: relative;
        margin: 1rem 0;
    }
    div#map-container > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
        background: var(--paragraphs);
        transition: background-color 0.3s;
        border: none;
        border-radius: 0.3rem;
        box-shadow: 2px 2px 10px black;
    }
    div#map-container > button:hover {
        background: var(--accent2);
    }
    div#map {
        height: 300px;
    }
</style>
<template>
    <div id="map" :style="{ height: '400px', width: '100%' }"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    name: 'MapComponent',
    mounted() {
      // Create the map and set its view to the specified coordinates and zoom level
      this.map = L.map('map').setView([-22.909938, -47.062633], 15); // Updated coordinates for Campinas, SP
  
      // Set up the OpenStreetMap layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(this.map);
  
      // Add a marker to the map at the specified coordinates
      L.marker([-22.909938, -47.062633]).addTo(this.map)
        .bindPopup('Rua Gustavo Ambrust, 36, Conj 504 e 505 - Nova Campinas, Campinas - SP, 13.092-106')
        .openPopup();
    },
    beforeDestroy() {
      // Cleanup the map instance when the component is destroyed
      if (this.map) {
        this.map.remove();
      }
    }
  };
  </script>
  
  <style>
  #map {
    width: 100%;
    height: 100%;
    border: 15px solid white; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);   }
  </style>
  
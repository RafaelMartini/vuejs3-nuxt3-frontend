<template>
    <div class="location-info-container">
      <div class="text-section">
        <h1 class="title">Lorem Ipsum is simply dummy text of the printing.</h1>
        <p class="description">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
        <p class="highlighted-text">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
        <button class="waze-button">        
          <img src="@/assets/images/icons/waze.png" alt="Waze Logo" class="waze-icon" />
          Ir com Waze</button>
      </div>
      <div class="location-details">
        <span class="location">📍 Lorem Ipsum 18,6 km</span>
        <span class="location">📍 Lorem Ipsum 32,6 km</span>
        <span class="location">📍 Lorem Ipsum 45 km</span>
        <span class="location">📍 Lorem Ipsum 56,2 km</span>
      </div>
    </div>
  </template>
  
  <script>
  import '../assets/styles/locationInfoComponent.scss';

  export default {
    name: 'LocationInfoComponent',
  };
  </script>
  

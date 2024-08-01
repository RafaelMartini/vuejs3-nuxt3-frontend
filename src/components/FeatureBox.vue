<template>
    <div class="feature-box">
      <img :src="iconSrc" alt="Feature Icon" class="icon" />
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import '../assets/styles/featureBox.scss';

  
  export default defineComponent({
    name: 'FeatureBox',
    props: {
      iconSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  });
  </script>
  

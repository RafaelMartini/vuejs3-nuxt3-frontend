<template>
    <div class="card">
      <div class="status-banner" :class="statusClass">{{ statusText }}</div>
      <img :src="imageSrc" alt="Project Image" class="project-image" />
      <div class="price">a partir de R$ {{ price }}</div>
      <h3 class="project-title">{{ title }}</h3>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import '../assets/styles/cardComponent.scss';

  
  export default defineComponent({
    props: {
      status: Number,
      price: Number,
      title: String,
      imageSrc: String,
    },
    computed: {
      statusText(): string {
        switch (this.status) {
          case 1:
            return 'Em construção';
          case 2:
            return 'Pronto para morar';
          case 3:
            return '100% Vendido';
          default:
            return '';
        }
      },
      statusClass(): string {
        return `status-${this.status}`;
      }
    }
  });
  </script>
  

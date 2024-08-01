<template>
  <div class="carousel-container">
    <div class="scroll-wrapper">
      <div class="carousel-inner">
        <CardComponent
          v-for="project in projects"
          :key="project.id"
          :status="project.status"
          :price="project.price"
          :title="project.title"
          :imageSrc="imageSrc"
          class="card-component"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import CardComponent from './CardComponent.vue';
import { fetchProjects } from '../services/apiService';
import { Project } from '../interfaces/interface';
import '../assets/styles/carouselComponent.scss';


export default defineComponent({
  components: {
    CardComponent,
  },
  setup() {
    const imageSrc = require('@/assets/images/portaria.png');

    const { data: projects, error, isLoading } = useQuery<Project[]>({
      queryKey: ['projects'],
      queryFn: fetchProjects,
    });

    return {
      projects,
      imageSrc,
      error,
      isLoading,
    };
  }
});
</script>

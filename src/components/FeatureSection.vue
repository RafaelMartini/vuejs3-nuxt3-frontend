<template>
    <div class="feature-section">
      <FeatureBox
        v-for="feature in features"
        :key="feature.title"
        :iconSrc="feature.iconSrc"
        :title="feature.title"
        :description="feature.description"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import FeatureBox from './FeatureBox.vue';
  import '../assets/styles/featureSection.scss';

  
  export default defineComponent({
    name: 'FeatureSection',
    components: {
      FeatureBox
    },
    data() {
      return {
        features: [
          { iconSrc: '@/assets/images/icons/icon1.png', title: 'Lotes a partir de 000 m²', description: 'Residenciais e comerciais' },
          { iconSrc: '@/assets/images/icons/icon2.png', title: 'Lorem Ipsum e Lorem Ipsum', description: '' },
          { iconSrc: '@/assets/images/icons/icon3.png', title: 'Finibus Bonorum et Malorum', description: '' },
          { iconSrc: '@/assets/images/icons/icon4.png', title: 'Finibus Bonorum et Malorum', description: '' },
        ]
      };
    }
  });
  </script>
  
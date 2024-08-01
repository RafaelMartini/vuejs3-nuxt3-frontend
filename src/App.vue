<template>
  <div id="app">
    <div class="header-screen">
      <Header 
        :logoSrc="logoMark"
        :headerTexts="headerTexts"
      />
    </div>
    <div class="body-screen">
      <FeatureSection />
      <ContactForm />
      <InfoSection />
      <CarouselComponent />
      </div>
      <div class="footer-screen">
        <LocationInfoComponent />
        <MapComponent />
      </div>
      <div class="footer">
        <FooterComponent />
        <FooterFinally />
      </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import ContactForm from './components/ContactForm.vue';
import logoMark from '@/assets/images/logoMark.png';
import '../src/assets/styles/app.scss';
import InfoSection from './components/InfoSection.vue';
import FeatureSection from './components/FeatureSection.vue';
import CarouselComponent from './components/CarouselComponent.vue';
import LocationInfoComponent from './components/LocationInfoComponent.vue';
import MapComponent from './components/MapComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import FooterFinally from './components/FooterFinally.vue';


export default defineComponent({
  components: {
    Header,
    ContactForm,
    InfoSection,
    FeatureSection,
    CarouselComponent,
    LocationInfoComponent,
    MapComponent,
    FooterComponent,
    FooterFinally,
  },
  data() {
    return {
      logoMark,
      headerTexts: [
        'BREVE LANÇAMENTO', 
        'Chegou a sua vez de viver bem.', 
        'Lotes de 000 m², próximos ao shopping.', 
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.'
      ]
    };
  }
});
</script>




<template>
  <div class="info-section">
    <div class="main-content">
      <div class="content">
        <h1 class="title">Título Opt 1</h1>
        <h2 class="subtitle">The standard chunk of Lorem Ipsum used since the 1500s.</h2>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        </p>
      </div>
      <div class="image-container">
        <img src="@/assets/images/family.jpg" alt="Family Image" />
      </div>
    </div>
    <div class="footer-text">
      LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../assets/styles/infoSection.scss';


export default defineComponent({
  name: 'InfoSection',
});
</script>



<template>
    <header class="header">
      <img class="header-logo" :src="logoSrc" alt="Logo" />
      <div class="header-content">
        <p class="small-text">{{ headerTexts[0] }}</p>
        <h1>{{ headerTexts[1] }}</h1>
        <h2>{{ headerTexts[2] }}</h2>
        <p class="description">{{ headerTexts[3] }}</p>
      </div>
    </header>
  </template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import '../assets/styles/header.scss';

@Options({
  props: {
    logoSrc: {
      type: String,
      required: true,
    },
    headerTexts: {
      type: Array as () => string[],
      required: true,
    },
  }
})
export default class Header extends Vue {
  logoSrc!: string;
  headerTexts!: string[];
}
</script>

  
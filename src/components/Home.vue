<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import '../assets/styles/home.scss';
@Options({
  props: {
    msg: String
  }
})
export default class Home extends Vue {
  msg!: string;
}
</script>

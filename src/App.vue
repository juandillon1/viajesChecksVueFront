import Nav from '@/components/shared/Nav.vue';
<template>
  <div id="wraper">
    <Nav />
    <router-view />
    <!-- BG -->
    <div id="bg"></div>
  </div>
</template>
<script>
import Nav from '@/components/shared/Nav'
import './assets/main.css'
export default {
  components: {
    Nav
  },
}
</script>
<style>
  #bg {
    z-index: -1 !important;
  }
  .animate__fadeIn {
    animation-duration: 2s;
  }
</style>

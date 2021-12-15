<template>
  <div id="header" v-if="!showTravel">
      <div class="logo">
          <span class="icon fa fa-map"></span>
      </div>
      <div class="content">
          <div class="inner">
              <h1>Viajes 2022</h1>
          </div>
      </div>
      <div id="menuViajes">
          <ul>
              <li><router-link to="/viaje/brc" class="travelLink" :key="$route.fullPath">Bariloche</router-link></li>
              <li><router-link to="/viaje/eeuu" class="travelLink" :key="$route.fullPath">Estados Unidos</router-link></li>
              <li><router-link to="/viaje/otros" class="travelLink" :key="$route.fullPath">Otros...</router-link></li>
          </ul>
      </div>
      <Modal />
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
// @ is an alias to /src

export default {
  components: { Modal },
  name: 'Home',
  data(){
    return {
      showTravel: false,
      prevRoute: null
    }
  },
  mounted() {
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = to
    })
  },
  beforeUnmount() {
    const to = this.$route.fullPath
    // const lastRoute = localStorage.getItem('lastRoute')
    if((to === '/viaje/eeuu' || to === '/viaje/otros') && this.prevRoute.fullPath === '/' && !localStorage.getItem('at')) {
      localStorage.setItem('lastRoute', '/viaje/eeuu')
      this.$router.go(-1)
    }
  },
  created: () => {
  },
  methods: {
  }
}
</script>

<style scoped>
  #header {
    padding: 5rem;
  }
  .icon {
    margin-top: 1.5rem;
  }
</style>

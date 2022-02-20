<template>
  <div id="header" v-if="!showTravel" class="animate__animated animate__zoomIn">
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
              <li><router-link to="/viaje/eeuu" class="travelLink" :key="$route.fullPath">Estados Unidos</router-link></li>
              <li><router-link to="/viaje/otros" class="travelLink" :key="$route.fullPath">Otros...</router-link></li>
          </ul>
      </div>
      <Modal />
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import {getApi} from '@/helpers/getApi'
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
  async mounted() {
    await getApi()
    localStorage.setItem('home', 1)
    /* if(+localStorage.getItem('home') === 1 && !localStorage.getItem('at')) {
      localStorage.setItem('at', false)
    } */
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = to
    })
  },
  beforeUnmount() {
    const to = this.$route.fullPath
    // const lastRoute = localStorage.getItem('lastRoute')
    const at = localStorage.getItem('at')
    if((to === '/viaje/eeuu' || to === '/viaje/otros') && this.prevRoute.fullPath === '/' && at === 'false') {
      if(to === '/viaje/eeuu') {
        localStorage.setItem('lastRoute', '/viaje/eeuu')
      } else if(to === '/viaje/otros') {
        localStorage.setItem('lastRoute', '/viaje/otros')
      }
      this.$router.go(-1)
    } else {
      localStorage.removeItem('lastRoute')
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

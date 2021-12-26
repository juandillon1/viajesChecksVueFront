<template>
    <div align="center">
        <h1 v-if="id === 'eeuu'">Faltan: {{Math.trunc((new Date('2022-03-30').getTime() - new Date().getTime())/(1000*60*60*24))}} días 🏄</h1>
        <h1 v-if="id === 'brc'">Faltan: {{Math.trunc((new Date('2022-01-15').getTime() - new Date().getTime())/(1000*60*60*24))}} días 🏂</h1>
        <div  v-for="tipo in tipos" :key="tipo">
            <h1>{{tipo}}</h1>
            <div class="row row-cols-1 row-cols-md-3 container">
                <ViajeCard :tipo="tipo" :idViaje="id" :getViajes="getViajes"/>
            </div>
        </div>
        <button class="m-5">
            <router-link :to="'/carga/' + id" class="travelLink" :key="$route.fullPath">Cargar Imperdibles/Excursiones</router-link>
        </button>
    </div>
</template>

<script>
import { getApiTypes } from '@/helpers/getApi';
import ViajeCard from '../components/ViajeCard.vue'
// import CardsGrid from '../components/CardsGrid.vue'
    export default {
  components: { ViajeCard },
        // components: { CardsGrid },
        name: 'Viaje',
        data() {
            return {
                id: this.$route.params.id,
                viajes: [],
                tipos: [],
                prevRoute: null
            }
        },
        mounted() {
            this.getViajes()
        },
        beforeRouteUpdate (to, from, next) {
            // const lastRoute = localStorage.getItem('lastRoute')
            let at = localStorage.getItem('at')
            if((to.path === '/viaje/eeuu' || to.path === '/viaje/otros') && at === 'false') {
                if(to.path === '/viaje/eeuu') {
                    localStorage.setItem('home', 2)
                    localStorage.setItem('lastRoute', '/viaje/eeuu')
                    this.$router.replace('/')
                } else if(to.path === '/viaje/otros') {
                    localStorage.setItem('home', 2)
                    localStorage.setItem('lastRoute', '/viaje/otros')
                    this.$router.replace('/')                           
                }
            } else {
                localStorage.removeItem('lastRoute')
            }
            this.id = to.params.id
            this.viajes = []
            this.tipos = []
            this.getViajes()
            next();
        },

        methods: {
            async getViajes() {
                const {tipos} = await getApiTypes(this.id)
                this.tipos = tipos
            },
        },
    }
</script>



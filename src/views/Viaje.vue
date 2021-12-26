<template>
    <div align="center" class="animate__animated animate__fadeIn">
        <div v-if="!cargando">
            <h1 v-if="id === 'eeuu'">Faltan: {{Math.trunc((new Date('2022-03-30').getTime() - new Date().getTime())/(1000*60*60*24))}} días 🏄</h1>
            <h1 v-if="id === 'brc'">Faltan: {{Math.trunc((new Date('2022-01-15').getTime() - new Date().getTime())/(1000*60*60*24))}} días 🏂</h1>
            <div class="filtrartipo">
                <h5>Filtrar por tipo</h5>
                <button class="tiposbutton" v-for="tipo in tipos" :key="tipo" @click="filtrarTipo(tipo)">{{capitalize(tipo)}}</button>
                <button class="tiposbutton deletebutton" @click="filtrarTipo('todos')" title="Borrar Filtros">🗑</button>
                
            </div>
            <div v-if="tipoFiltered === ''">
                <div  v-for="tipo in tipos" :key="tipo">
                    <h1>{{tipo}}</h1>
                    <div class="row row-cols-1 row-cols-md-3 container">
                        <ViajeCard :tipo="tipo" :idViaje="id" :getViajes="getViajes"/>
                    </div>
                </div>
            </div>
            <div v-if="tipoFiltered !== ''">
                <h1>{{tipoFiltered}}</h1>
                <div  v-for="tipo in tipos" :key="tipo">
                    <div class="row row-cols-1 row-cols-md-3 container">
                        <ViajeCard :tipo="tipoFiltered" :idViaje="id" :getViajes="getViajes" v-if="tipo === tipoFiltered"/>
                    </div>
                </div>
            </div>
            <button class="m-5">
                <router-link :to="'/carga/' + id" class="travelLink" :key="$route.fullPath">Cargar Imperdibles/Excursiones</router-link>
            </button>
        </div>
        <Loader class="Loader animate__animated animate__fadeIn" v-if="cargando"/>
    </div>
</template>

<script>
import { getApiTypes } from '@/helpers/getApi';
import ViajeCard from '../components/ViajeCard.vue'
import Loader from '../components/Loader.vue';
// import CardsGrid from '../components/CardsGrid.vue'
    export default {
  components: { ViajeCard, Loader },
        // components: { CardsGrid },
        name: 'Viaje',
        data() {
            return {
                id: this.$route.params.id,
                viajes: [],
                tipos: [],
                prevRoute: null,
                tipoFiltered: '',
                cargando: false,
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
            this.tipoFiltered = ''
            this.getViajes()
            next();
        },
        methods: {
            async getViajes() {
                this.cargando = true
                const {tipos} = await getApiTypes(this.id)
                this.tipos = tipos
                this.cargando = false
            },
            filtrarTipo(tipo) {
                if(tipo === 'todos') {
                    this.tipoFiltered = ''
                    return
                }
                this.tipoFiltered = tipo
            },
            capitalize(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        },
    }
</script>
<style scoped>
.tiposbutton {
    padding: 0.5rem;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 25px;
    height: 70%;
    margin-right: 10px;
}
.filtrartipo {
    display: inline-block;
    margin: 0.5rem;
}
.deletebutton:hover {
    background: rgba(248, 46, 46, 0.609);
}
@media screen and (max-width: 480px) {
    .deletebutton {
      margin-top: 10px;
      margin-left: 10px;
    }
}
</style>


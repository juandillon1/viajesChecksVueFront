<template>
    <div align="center" class="animate__animated animate__fadeIn">
        <div v-if="!cargando">
            <h1 v-if="id === 'eeuu'">Faltan: {{Math.trunc((new Date('2022-03-30').getTime() - new Date().getTime())/(1000*60*60*24))}} días para U.S.A 🏄</h1>
            <div>
                <button class="m-5">
                    <router-link :to="'/carga/' + id" class="travelLink" :key="$route.fullPath">Cargar Lugares Nuevos</router-link>
                </button>
            </div>
            <div class="filtrartipo">
                <h5>Filtrar por Lugar</h5>
                <button class="tiposbutton" v-for="subtipo in subtipos" :key="subtipo" @click="filtrarSubTipo(subtipo)">{{capitalize(subtipo)}}</button>
                <button class="tiposbutton deletebutton" @click="filtrarSubTipo('todos')" title="Borrar Filtros">🗑</button>
            </div>
            <div v-if="tipoFiltered === '' && subtipoFilter === ''">
                <div  v-for="tipo in tipos" :key="tipo">
                    <h1>{{tipo}}</h1>
                    <div class="row row-cols-1 row-cols-md-3 container">
                        <ViajeCard :tipo="tipo" :subtipoFilter="''" :idViaje="id" :getViajes="getViajes"/>
                    </div>
                </div>
            </div>
            <div v-if="tipoFiltered !== '' && subtipoFilter === ''">
                <!-- <div  v-for="tipo in tipos" :key="tipo"> -->
                    <h1>{{tipoFiltered}} ASD</h1>
                    <div class="row row-cols-1 row-cols-md-3 container">
                        <ViajeCard :tipo="tipoFiltered" :subtipoFilter="''" :idViaje="id" :getViajes="getViajes"/>
                    </div>
                <!-- </div> -->
            </div>
            <div v-if="subtipoFilter !== '' && tipoFiltered === ''">
                <h1>{{subtipoFilter}}</h1>
                <div  v-for="subtipo in subtipos" :key="subtipo">
                    <div class="row row-cols-1 row-cols-md-3 container">
                        <ViajeCard :subtipoFilter="subtipoFilter" :idViaje="id" :getViajes="getViajes" v-if="subtipo === subtipoFilter"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader class="Loader animate__animated animate__fadeIn" v-if="cargando"/>
    </div>
</template>

<script>
import { getApiTypes, getApiSubTypes } from '@/helpers/getApi';
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
                subtipos: [],
                prevRoute: null,
                tipoFiltered: '',
                subtipoFilter: '',
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
            this.subtipos = []
            this.tipoFiltered = ''
            this.subtipoFilter = ''
            this.getViajes()
            next();
        },
        methods: {
            async getViajes() {
                this.cargando = true
                const {tipos} = await getApiTypes(this.id)
                this.tipos = tipos
                const {subtipos} = await getApiSubTypes(this.id)
                this.subtipos = subtipos
                this.cargando = false
            },
            filtrarTipo(tipo) {
                if(tipo === 'todos') {
                    this.tipoFiltered = ''
                    return
                }
                this.subtipoFilter = ''
                this.tipoFiltered = tipo
            },
            filtrarSubTipo(subtipo) {
                if(subtipo === 'todos') {
                    this.subtipoFilter = ''
                    return
                }
                this.tipoFiltered = ''
                this.subtipoFilter = subtipo
            },
            capitalize(string) {
                return string.charAt(0).toUpperCase() + string.slice(1)
            },
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
.buscarinfo {
    margin: 0;
    width: 290px;
}
@media screen and (max-width: 480px) {
    .deletebutton {
      margin-top: 10px;
      margin-right: 0px;
    }
    .buscarinfo {
        margin: 0;
        width: 180px;
    }
}
</style>


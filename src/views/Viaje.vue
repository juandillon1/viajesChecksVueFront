<template>
    <div align="center">
        <div  v-for="viajesData in viajesLocal" :key="viajesData.tipo">
            <h1>{{viajesData.tipo}}</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 container">
                <div class="col" v-for="viaje in viajesData.viaje" :key="viaje.id">
                    <div class="card h-100">
                    <img :src="viaje.img || 'https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png'" class="card-img-top" alt="...">
                    <span class="badge bg-success">PRECIO ${{viaje.precio}}</span>
                    <a :href="viaje.url" target="_blank" v-if="viaje.url"><span class="badge bg-primary">Link</span></a>
                    <a :href="viaje.comollego" target="_blank" v-if="viaje.comollego"><span class="badge bg-info">¿Cómo llego?</span></a>
                    <div class="card-body">
                        <h5 class="card-title">{{viaje.titulo}}</h5>
                        <p class="card-text">{{viaje.descripcion}}</p>
                        <button class="btn btn-danger ml-5" v-on:click="handleDelete(viaje._id)">Eliminar</button>
                        <button class="btn btn-primary m-1" v-on:click="updateRoute(viaje.idViaje, viaje._id)">Modificar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="m-5">
            <router-link :to="'/carga/' + id" class="travelLink" :key="$route.fullPath">Cargar Imperdibles/Excursiones</router-link>
        </button>
    </div>
</template>

<script>
import {getApi} from '@/helpers/getApi'
import {deleteApi} from '@/helpers/deleteApi'
import Swal from 'sweetalert2'
// import CardsGrid from '../components/CardsGrid.vue'
    export default {
        // components: { CardsGrid },
        name: 'Viaje',
        data() {
            return {
                id: this.$route.params.id,
                viajes: [],
                viajesFiltrados: [],
                viajesSinFiltro: [],
                tipos: [],
                viajesLocal: '',
                titulo: '',
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
            this.viajesSinFiltro = []
            this.tipos = []
            this.viajesLocal = ''
            this.tipofiltered()
            next();
        },

        methods: {
            tipofiltered() {
                this.viajesSinFiltro = this.viajesfiltered()
                this.viajesSinFiltro.forEach(viaje => {
                    this.tipos.push(viaje.tipo)
                });
                this.tipos = [...new Set(this.tipos)]
                let viajes = []
                this.tipos.forEach(tipo => {
                    viajes.push({
                        tipo: tipo,
                        viaje: this.viajes.filter(viaje => viaje.tipo === tipo)
                    })
                });
                localStorage.setItem('viajes', JSON.stringify(viajes))
                this.viajesLocal = JSON.parse(localStorage.getItem('viajes'))
                this.viajesLocal.forEach((viaje, index) => {
                    viaje.viaje.forEach(viajeSF => {
                        viajeSF.comollego = `https://www.google.com.ar/maps/place/${viajeSF.titulo}`
                        this.viajesLocal[index].viaje.viaje = [...this.viajesLocal[index].viaje, viaje.comollego]
                    });
                });
            },
            viajesfiltered() {
                return this.viajes.filter(viaje => viaje.idViaje === this.id)
            },
            async getViajes() {
                const {viajes} = await getApi()
                this.viajes = viajes
                this.tipofiltered()
            },
            async handleDelete(id) {
                const viaje = await deleteApi(id)
                Swal.fire({
                    title: 'Item borrado!',
                    text: `Se borró el item ${viaje.viaje.titulo}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                this.getViajes()
            },
            updateRoute(idViaje, id) {
                this.$router.replace(`/actualizar/${idViaje}/${id}`)
            },
        },
    }
</script>

<style scoped>
    a {
        border-bottom: 0;
    }
    .card {
        background: transparent;
        border: 1px solid;
    }
    p {
        background-color: #ffffff;
        color: #000000;
    }
    .badge {
        width: 100%;
        border-radius: 0%;
        font-size: 18px;
        padding: 0.6rem;
    }
</style>

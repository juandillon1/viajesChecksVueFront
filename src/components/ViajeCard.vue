<template>
    <template v-if="!cargando">
        <div class="col mb-3 animate__animated animate__fadeIn" v-for="viaje in viajesData" :key="viaje.id">
            <div class="card h-100">
                <h5 v-if="viaje.subtipo">{{viaje.subtipo}}</h5>
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
    </template>
    <Loader class="Loader animate__animated animate__fadeIn" v-if="cargando"/>
</template>

<script>
import {getApiFiltered} from '@/helpers/getApi'
import {deleteApi} from '@/helpers/deleteApi'
import Swal from 'sweetalert2'
import Loader from './Loader.vue'
    export default {
  components: { Loader },
        name: 'ViajeCard',
        props: ['tipo', 'idViaje', 'getViajes', 'subtipoCheck', 'subtipoData'],
        data() {
            return {
                viajesData: [],
                cargando: false,
            }
        },
        async mounted() {
            this.cargando = true
            const {viajes} = await getApiFiltered(this.idViaje, this.tipo)
            viajes.forEach(viaje => {
                viaje.comollego = `https://www.google.com.ar/maps/place/${viaje.titulo}`
            });
            this.viajesData = viajes
            this.cargando = false
        },
        methods: {
            async handleDelete(id) {
                this.cargando = true
                const viaje = await deleteApi(id)
                Swal.fire({
                    title: 'Item borrado!',
                    text: `Se borró el item ${viaje.viaje.titulo}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                this.getViajes()
                this.cargando = false
            },
            updateRoute(idViaje, id) {
                this.$router.replace(`/actualizar/${idViaje}/${id}`)
            },
        }
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
    .Loader {
        margin-left: 35%;
    }
    @media screen and (max-width: 480px) {
		.Loader {
            margin-left: 10%;
        }
	}
</style>
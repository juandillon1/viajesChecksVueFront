<template>

    <template v-if="!cargando">
        <!-- <div id="child" style="display: none">
            <div class="mb-3">
                <div style="display: inline-block">
                    <label for="exampleInputPassword1" class="form-label">Buscar</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Ej: Cerro Catedral" @keypress="buscar($event)" autocomplete="off">
                </div>
            </div>
        </div> -->
        <template v-if="viajesFiltrados.length === 0">
            <div class="col mb-3 animate__animated animate__fadeIn" v-for="viaje in viajesData" :key="viaje.id">
                <div class="card h-100">
                    <h5 v-if="viaje.subtipo">{{viaje.subtipo}}</h5>
                    <img :src="viaje.img || 'https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png'" class="card-img-top" alt="...">
                    <span class="badge bg-info info" v-if="subtipoFilter">{{viaje.tipo}}</span>
                    <span class="badge badgeDesc bg-success">PRECIO ${{viaje.precio}}</span>
                    <a :href="viaje.url" target="_blank" v-if="viaje.url"><span class="badge badgeDesc bg-primary">Link</span></a>
                    <a :href="viaje.comollego" target="_blank" v-if="viaje.comollego"><span class="badge badgeDesc bg-info">¿Cómo llego?</span></a>
                    <div class="card-body">
                        <h5 class="card-title">{{viaje.titulo}}</h5>
                        <p class="card-text">{{viaje.descripcion}}</p>
                        <button class="btn btn-danger ml-5" v-on:click="handleDelete(viaje._id)">Eliminar</button>
                        <button class="btn btn-primary m-1" v-on:click="updateRoute(viaje.idViaje, viaje._id)">Modificar</button>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="viajesFiltrados.length > 0">
            <div class="col mb-3 animate__animated animate__fadeIn" v-for="viaje in viajesFiltrados" :key="viaje.id">
                <div class="card h-100">
                    <h5 v-if="viaje.subtipo">{{viaje.subtipo}}</h5>
                    <img :src="viaje.img || 'https://www.emsevilla.es/wp-content/uploads/2020/10/no-image-1.png'" class="card-img-top" alt="...">
                    <span class="badge badgeDesc bg-success">PRECIO ${{viaje.precio}}</span>
                    <a :href="viaje.url" target="_blank" v-if="viaje.url"><span class="badge badgeDesc bg-primary">Link</span></a>
                    <a :href="viaje.comollego" target="_blank" v-if="viaje.comollego"><span class="badge badgeDesc bg-info">¿Cómo llego?</span></a>
                    <div class="card-body">
                        <h5 class="card-title">{{viaje.titulo}}</h5>
                        <p class="card-text">{{viaje.descripcion}}</p>
                        <button class="btn btn-danger ml-5" v-on:click="handleDelete(viaje._id)">Eliminar</button>
                        <button class="btn btn-primary m-1" v-on:click="updateRoute(viaje.idViaje, viaje._id)">Modificar</button>
                    </div>
                </div>
            </div>
        </template>
    </template>
    <Loader class="Loader animate__animated animate__fadeIn" v-if="cargando"/>
</template>

<script>
import {getApiFiltered, getApiSubFiltered} from '@/helpers/getApi'
import {deleteApi} from '@/helpers/deleteApi'
import Swal from 'sweetalert2'
import Loader from './Loader.vue'
    export default {
  components: { Loader },
        name: 'ViajeCard',
        props: ['tipo', 'subtipoFilter', 'idViaje', 'getViajes', 'subtipoCheck', 'subtipoData'],
        data() {
            return {
                viajesData: [],
                cargando: false,
                buscarText: '',
                viajesFiltrados: [],
            }
        },
        async mounted() {
            /* const FirstParent = document.getElementById('parent')
            const SecondParent = document.getElementById('child')
            if(FirstParent.getElementsByClassName('mb-3').length < 1) {
                while (SecondParent.childNodes.length > 0) {
                    FirstParent.appendChild(SecondParent.childNodes[0]);
                }
            } */
            if(this.subtipoFilter !== '') {
                this.viajesData = [];
                this.cargando = true;
                const {viajes} = await getApiSubFiltered(this.idViaje, this.subtipoFilter)
                viajes.forEach(viaje => {
                    viaje.comollego = `https://www.google.com.ar/maps/place/${viaje.titulo}`
                });
                this.viajesData = viajes
                this.cargando = false
            } else {
                this.viajesData = [];
                this.cargando = true
                const {viajes} = await getApiFiltered(this.idViaje, this.tipo)
                viajes.forEach(viaje => {
                    viaje.comollego = `https://www.google.com.ar/maps/place/${viaje.titulo}`
                });
                this.viajesData = viajes
                this.cargando = false
            }
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
            /* buscar(event) {
                this.viajesFiltrados = this.viajesData.filter(r => r.titulo.toLowerCase().includes(event.target.value.toLowerCase()));
            } */
        },
    }
</script>

<style scoped>
    a {
        border-bottom: 0;
    }
    .info {
        background: #e47900 !important;
        position: absolute;
        right: 2%;
        top: 7%;
        font-size: 18px;
        font-weight: 600;
    }
    .card {
        background: transparent;
        border: 1px solid;
    }
    p {
        background-color: #ffffff;
        color: #000000;
    }
    .badgeDesc {
        width: 100%;
        border-radius: 0%;
        font-size: 18px;
        padding: 0.6rem;
    }
</style>
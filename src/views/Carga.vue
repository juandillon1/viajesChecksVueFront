<template>
    <div class="container">
        <div align="center">
            <h1>Carga Info Viajes {{id}}</h1>
            <form v-on:submit.prevent="cargarData">
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Titulo</label>
                    <input type="text" id="form4Example1" v-model="titulo" class="form-control" autocomplete="off"/>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Tipo</label>
                    <select class="form-select" aria-label="seleccionar" v-model="tipo" v-on:click.prevent="changeArea">
                        <option selected>Selecciona una opción</option>
                        <option :value="tipo" v-for="tipo in tipos" :key="tipo">{{tipo}}</option>
                        <option value="add">Agregue una opción...</option>
                    </select>
                    <form v-show="showAddOption" v-on:submit.prevent="addOption">
                        <input type="text" id="form4Example1" v-model="newOption" class="form-control mt-3" placeholder="Ingresá acá el nuevo tipo..." autocomplete="off">
                        <button type="submit" class="btn btn-info btn-block mt-3" style="background-color: 'transparent' !important">Cargar</button>
                    </form>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Precio</label>
                    <input type="number" id="form4Example1" v-model="precio" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Link</label>
                    <input type="text" id="form4Example1" v-model="url" class="form-control" autocomplete="off" />
                </div>
                <div class="form-outline mb-4">
                    <label for="formFile" class="form-label">Imagen</label>
                    <input type="text" id="form4Example1" v-model="img" class="form-control" autocomplete="off" />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example3">Descripción</label>
                    <textarea class="form-control" id="form4Example3" rows="4" v-model="descripcion" v-on:click="changeArea" autocomplete="off" ></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Guardar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {postApi} from '@/helpers/postApi'
import { getApiTypes } from '@/helpers/getApi';
    import Swal from 'sweetalert2'
    export default {
        name: 'Carga',
        data(){
            return {
                id: this.$route.params.id,
                titulo: '',
                descripcion: '',
                tipo: '',
                precio: 0,
                url: '',
                img: '',
                tipos: [],
                newOption: '',
                showAddOption: false,
            }
        },
        async mounted() {
            const {tipos} = await getApiTypes(this.id)
            this.tipos = tipos
        },
        methods: {
            async cargarData() {
                if(!this.tipo) {
                    Swal.fire({
                    title: 'Revisa bien!',
                    text: `El tipo es obligatorio`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                    })
                    return
                }
                if(!this.descripcion) {
                    Swal.fire({
                    title: 'Revisa bien!',
                    text: `La descripción es obligatoria`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                    })
                    return
                }
                if(!this.titulo) {
                    Swal.fire({
                    title: 'Revisa bien!',
                    text: `El titulo es obligatorio`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                    })
                    return
                }
                const body = {
                    idViaje: this.id,
                    titulo: this.titulo,
                    descripcion: this.descripcion,
                    tipo: this.tipo,
                    precio: this.precio,
                    url: this.url,
                    img: this.img,
                }
                const carga = await postApi(body)
                Swal.fire({
                    title: 'Item cargado!',
                    text: `Se cargó el item ${carga.viaje.titulo}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                this.$router.replace(`/viaje/${carga.viaje.idViaje}`)
            },
            changeArea(event) {
                const el = event.target
                el.setAttribute('style', 'background-color: transparent')
                if (el.value === 'add') {
                    this.showAddOption = true
                } else {
                    this.showAddOption = false
                }
            },
            addOption() {
                this.tipos.push(this.newOption)
                this.tipo = this.newOption
                this.newOption = ''
                this.showAddOption = false
            }
        }
    }
</script>

<style scoped>
    .form-control, .form-select, .textarea{
        color: #ffffff;
        background-color: transparent;
    }
</style>
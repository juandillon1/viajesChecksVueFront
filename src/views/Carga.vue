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
                    <select class="form-select" aria-label="seleccionar" v-model="tipo" v-on:click="changeArea">
                        <option selected>Selecciona una opción</option>
                        <option value="excursión">Excursión</option>
                        <option value="Imperdible">Imperdible</option>
                    </select>
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
                img: ''
            }
        },
        mounted() {
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
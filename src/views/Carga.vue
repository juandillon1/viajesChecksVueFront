<template>
    <div class="container animate__animated animate__fadeIn">
        <div align="center">
            <h1>Carga Info Viajes {{id}}</h1>
            <form v-on:submit.prevent="cargarData">
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Lugar</label>
                    <input type="text" id="form4Example1" v-model="titulo" class="form-control" autocomplete="off" placeholder="Por ej: Lego Land"/>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">¿Que tipo de lugar es este?</label>
                    <select class="form-select" aria-label="seleccionar" v-model="tipo" v-on:click.prevent="changeArea($event,'tipo')">
                        <option value="" disabled selected>Por ej: Imperdible, recomendable, olvidable, etc...</option>
                        <option :value="tipo" v-for="tipo in tipos" :key="tipo">{{tipo}}</option>
                        <option value="add">Agregue una opción...</option>
                    </select>
                    <form v-show="showAddOption" v-on:submit.prevent="addOption">
                        <input type="text" id="form4Example1" v-model="newOption" class="form-control mt-3" placeholder="Ingresá acá el nuevo tipo..." autocomplete="off">
                        <button type="submit" class="btn btn-info btn-block mt-3" style="background-color: 'transparent' !important">Cargar</button>
                    </form>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">¿Este lugar a dónde pertenece?</label>
                    <select class="form-select" aria-label="seleccionar" v-model="subtipo" v-on:click.prevent="changeArea($event,'subtipo')">
                        <option value="" disabled selected>Por ej: Disney, New York, Miami, etc...</option>
                        <option :value="subtip" v-for="subtip in subtipos" :key="subtip">{{subtip}}</option>
                        <option value="add">Agregue una opción...</option>
                    </select>
                    <form v-show="showAddOption2" v-on:submit.prevent="addOption2">
                        <input type="text" id="form4Example1" v-model="newOption" class="form-control mt-3" placeholder="Ingresá acá el nuevo sub tipo..." autocomplete="off">
                        <button type="submit" class="btn btn-info btn-block mt-3" style="background-color: 'transparent' !important">Cargar</button>
                    </form>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">¿Precio que se gasta en el lugar?</label>
                    <input type="number" id="form4Example1" v-model="precio" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">¿Tenés un link de la página del lugar?</label>
                    <input type="text" id="form4Example1" v-model="url" class="form-control" autocomplete="off" placeholder="Por ej: https://disneyworld.disney.go.com/es-ar/"/>
                </div>
                <div class="form-outline mb-4">
                    <label for="formFile" class="form-label">¿Hay alguna Imagen de referencia?</label>
                    <input type="text" id="form4Example1" v-model="img" class="form-control" autocomplete="off" placeholder="Por ejemplo pegar una url: https://imagendeinternet.com/imagen.jpg" />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example3">¿Podrías decir que se puede hacer en el lugar?</label>
                    <textarea class="form-control" id="form4Example3" rows="4" v-model="descripcion" v-on:click="changeArea" autocomplete="off" placeholder="Por ej: En este lugar se puede comprar ropa barata" ></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">Guardar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {postApi} from '@/helpers/postApi'
import { getApiTypes, getApiSubTypes } from '@/helpers/getApi';
    import Swal from 'sweetalert2'
    export default {
        name: 'Carga',
        data(){
            return {
                id: this.$route.params.id,
                titulo: '',
                descripcion: '',
                tipo: '',
                subtipo: '',
                precio: 0,
                url: '',
                img: '',
                tipos: [],
                subtipos: [],
                newOption: '',
                showAddOption: false,
                showAddOption2: false,
            }
        },
        async mounted() {
            let subArray = []
            await this.types()
            this.tipos.forEach(tipo => {
                subArray.push(tipo)
            });
            subArray.forEach(tipo => {
                this.subTypes(tipo)
            });
            if(this.tipos.length === 0) {
                this.subTypes('empty')
            }
        },
        methods: {
            async types() {
                const {tipos} = await getApiTypes(this.id)
                this.tipos = tipos
            },
            async subTypes(tipo) {
                const {subtipos} = await getApiSubTypes(this.id, tipo)
                if(tipo === 'empty') {
                    this.subtipos.push([])
                } else {
                    subtipos.forEach(subtipo => {
                        this.subtipos.push(subtipo)
                    });
                }
                this.subtipos = [...new Set(this.subtipos)];
                console.log(this.subtipos)
            },
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
                    subtipo: this.subtipo,
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
            changeArea(event, tipo) {
                const el = event.target
                el.setAttribute('style', 'background-color: transparent')
                if (el.value === 'add') {
                    if(tipo === 'tipo') {
                        this.showAddOption = true
                        this.showAddOption2 = false
                    } else {
                        this.showAddOption2 = true
                        this.showAddOption = false
                    }
                } else {
                    this.showAddOption = false
                    this.showAddOption2 = false
                }
            },
            addOption() {
                this.tipos.push(this.newOption)
                this.tipo = this.newOption
                this.newOption = ''
                this.showAddOption = false
            },
            addOption2() {
                this.subtipos.push(this.newOption)
                this.subtipo = this.newOption
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
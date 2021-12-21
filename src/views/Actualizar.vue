<template>
    <div class="container">
        <div align="center">
            <h1>Info Viaje {{idViaje}} | {{titulo}}</h1>
            <form v-on:submit.prevent="updateData">
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Titulo</label>
                    <input type="text" id="form4Example1" v-model="titulo" class="form-control" autocomplete="off"/>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form4Example1">Tipo</label>
                    <select class="form-select" aria-label="seleccionar" v-model="tipo" v-on:click="changeArea($event, 'tipo')">
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
                    <label class="form-label" for="form4Example1">Sub Tipo</label>
                    <select class="form-select" aria-label="seleccionar" v-model="subtipo" v-on:click.prevent="changeArea($event,'subtipo')">
                        <option selected>Selecciona una opción</option>
                        <option :value="subtip" v-for="subtip in subtipos" :key="subtip">{{subtip}}</option>
                        <option value="add">Agregue una opción...</option>
                    </select>
                    <form v-show="showAddOption2" v-on:submit.prevent="addOption2">
                        <input type="text" id="form4Example1" v-model="newOption" class="form-control mt-3" placeholder="Ingresá acá el nuevo sub tipo..." autocomplete="off">
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
    import {updateApi} from '@/helpers/updateApi'
    import Swal from 'sweetalert2'
    import { getApiUpdate, getApiSubTypes, getApiTypes } from '@/helpers/getApi';
    export default {
        name: 'Actualizar',
        data(){
            return {
                id: this.$route.params.id,
                idViaje: this.$route.params.idViaje,
                titulo: '',
                descripcion: '',
                tipo: '',
                precio: 0,
                url: '',
                img: '',
                viaje: {},
                subtipo: '',
                subtipos: [],
                newOption: '',
                showAddOption: false,
                showAddOption2: false,
                tipos: []
            }
        },
        async mounted() {
            const {viaje} = await getApiUpdate(this.id)
            let subArray = []
            this.viaje = viaje[0]
            await this.types()
            this.setValues()
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
                const {tipos} = await getApiTypes(this.idViaje)
                this.tipos = tipos
            },
            async subTypes(tipo) {
                const {subtipos} = await getApiSubTypes(this.idViaje, tipo)
                if(tipo === 'empty') {
                    this.subtipos.push([])
                } else {
                    subtipos.forEach(subtipo => {
                        this.subtipos.push(subtipo)
                    });
                }
                this.subtipos = [...new Set(this.subtipos)];
            },
            setValues() {
                this.titulo = this.viaje.titulo,
                this.descripcion = this.viaje.descripcion,
                this.tipo = this.viaje.tipo,
                this.subtipo = this.viaje.subtipo,
                this.precio = this.viaje.precio,
                this.url = this.viaje.url,
                this.img = this.viaje.img
            },
            async updateData() {
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
                    titulo: this.titulo,
                    descripcion: this.descripcion,
                    tipo: this.tipo,
                    subtipo: this.subtipo,
                    precio: this.precio,
                    url: this.url,
                    img: this.img,
                }
                const actualizar = await updateApi(body, this.id)
                Swal.fire({
                    title: 'Item actualizado!',
                    text: `Se actualizó el item ${actualizar.viaje.titulo}`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                this.$router.replace(`/viaje/${actualizar.viaje.idViaje}`)
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
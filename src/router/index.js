import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Viaje from '../views/Viaje.vue'
import Carga from '../views/Carga.vue'
import Actualizar from '../views/Actualizar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/viaje/:id',
    name: 'Viaje',
    component: Viaje
  },
  {
    path: '/carga/:id',
    name: 'Carga',
    component: Carga
  },
  {
    path: '/actualizar/:idViaje/:id',
    name: 'Actualizar',
    component: Actualizar
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

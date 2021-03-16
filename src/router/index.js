import Vue from 'vue'
import VueRouter from 'vue-router'
import Liste from '../views/Liste.vue'
import Ajout from '../views/Ajout.vue'
import Produit from '../views/Produit.vue'
import Modififcation from '../views/Modification.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Liste',
    component: Liste,
    alias:'/Produit'
  },
  {
    path: '/Produit/Ajout',
    name: 'Ajout',
    component: Ajout
  },
  {
    path:'/Produit/:id',
    name:'Produit',
    component: Produit
  },
  {
    path:'/Produit/:id/edition',
    name:'Modification',
    component: Modififcation
  }

]


const router = new VueRouter({
  routes
})

export default router

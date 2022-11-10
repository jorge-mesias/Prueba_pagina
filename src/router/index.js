import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/Homes.vue')
  },
  // {
  //   path: '/Prueba',
  //   name: 'case',
  //   component: () => import( '../components/Prueba.vue')
  // },
  {
    path: '/productos',
    name: 'products',
    component: () => import( '../views/Productos.vue')
  },

  {
    path: '/recet',
    name: 'recetas',
    component: () => import( '../views/recetas/RecetaMenu')
  },
  
  {
    path: '/alumnos',
    name: 'alumnos',
    component: () => import( '@/views/Alumnos/AlumnosPage'),
    
    children:[
      {
        path: 'Menu',
        name: 'cursomenu',
        component: () => import( '@/views/Alumnos/Alumno1')
      },
      {
        path: 'Menu-b',
        name: 'cursomenub',
        component: () => import( '@/views/Alumnos/Alumno2')
      },
      {
        path: 'Menu-c',
        name: 'cursomenuc',
        component: () => import( '@/views/Alumnos/Alumno3')
      },
     
      
    ]
    
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

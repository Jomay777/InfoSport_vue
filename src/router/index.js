import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  // Define tus rutas aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
   { path: '/', component: HomeView },
   { path: '/register', component: () => import('../views/RegisterView.vue')},
   { path:'/login', component: () => import ('../views/LoginView.vue') },
   { path:'/mainControlPanel', component: () => import ('../views/MainControlPanelView.vue') }


  ],
});

export default router;
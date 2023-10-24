import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PdfView from '../views/PdfView.vue'
import NotFoundView from '../views/NotFoundView.vue'  // Ajout de la vue de la page 404

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pdf',
    name: 'pdf',
    component: Pdf
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

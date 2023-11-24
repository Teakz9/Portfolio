import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PDFView from '../views/PDFView.vue'
import Error404 from '../views/Error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pdf',
      name: "pdf",
      component: PDFView
    },
    {
      path: "/:patchMatch(.*)",
      name:"Error404",
      component: Error404
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(`Navigating to ${to.path} from ${from.path}`);
  next();
});

router.afterEach((to, from) => {
  console.log(`Navigated to ${to.path} from ${from.path}`);
});

export default router
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/content/Home'
import Error404 from '@/components/content/Error404'
import UserTable from '@/components/content/UserTable'
import Shop from '@/components/content/Shop'
// import Contact from '@/components/content/Contact'

const routes = [
  { name: "home", component: Home },
  { name: "error-404", component: Error404 },
  // { name: "contact", component: Contact },
  { name: "user-table", component: UserTable },
  { name: "shop", component: Shop },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
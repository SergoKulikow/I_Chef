import MainPage from '../pages/MainPage.vue';
import { createRouter, createWebHistory } from "vue-router"
import UserPage from '../pages/UserPage.vue'
import LoginPage from '../pages/LoginPage.vue'





const routes = [
    { 
        path: '/main',
        component: MainPage,
        name: 'MainPage'
    },
    { 
        path: '/user',
        component: UserPage,
        name: 'UserPage'
    },
    { 
        path: '/login',
        component: LoginPage,
        name: 'LoginPage'
    }
]
    
const router = new createRouter({
    history: createWebHistory(),
    routes,
  });


export default router
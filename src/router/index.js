import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Contacts from '@/components/Contacts.vue'
import Products from '@/components/Products.vue'
import Login from '@/components/Login.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/products', // Путь для "Projects"
        name: 'products',
        component: Products
    },
    {
        path: '/contact', // Путь для "Contact"
        name: 'contact',
        component: Contacts
    },
];

const router = createRouter({
    history: createWebHistory(), // Используем историю HTML5
    routes // Передаем определенные маршруты
});

export default router;

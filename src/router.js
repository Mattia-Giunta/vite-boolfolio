import { createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue'
import SingleProject from './pages/SingleProject.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projectfolio',
            name: 'projectfolio',
            component: ProjectList
        },
        {
            path: '/projectfolio/:slug',
            name: 'single-project',
            component: SingleProject
        }
    ]
});

export { router };
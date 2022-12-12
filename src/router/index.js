import Home from '../views/Home/Home';
import ArticlePage from '../views/ArticlePage/ArticlePage'
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/:slug',
        name: 'ArticlePage',
        component: ArticlePage,
        props: (route) => ({
            slug: route.params.slug,
        })
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;

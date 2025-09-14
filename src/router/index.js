import {createRouter, createWebHistory} from 'vue-router'
import { i18n } from '@/locales'

import AppView from '@/views/Home.vue'
import NotFoundView from '@/views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: "Home",
        component: AppView,
        meta: {title: i18n.global.t("views.home.header")}
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: NotFoundView,
        meta: {title: i18n.global.t("views.not_found.header")}
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './modules/App.vue'

import DashboardRoutes from './modules/dashboard/router/routes'
import UsersRoutes from './modules/users/router/routes'
import HomeRoutes from './modules/home/router/routes'
import WorkRoutes from './modules/work/router/routes'
import ContactRoutes from './modules/contact/router/routes'
import AdminRoutes from './modules/admin/router/routes'


const routes = Object.assign(
	DashboardRoutes, 
	UsersRoutes, 
	HomeRoutes,
	WorkRoutes,
	ContactRoutes,
	AdminRoutes
)

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    hashbang: false,
    history: true
})

router.map(routes)

router.start(App, '#app')

import home from './home.js'
import away from './away.js'
import errorPage from "./error.js"
const routes = [
    {
        path: '/',
        name: 'Base',
        component: { template:'<h1>base page</h1>' }
    },
    {
        path: '/home',
        name: 'Home',
        component: home
    },
    {
        path: '/away',
        name: 'Away',
        component: away
    },
    {
        path: '/error',
        name: "404",
        component: errorPage
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (routes.find( r => r.path == to.path )){
        next()
    }else{
        router.push(routes[routes.length-1].path)
    }

})


export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('views/Home.vue')
const Category = () =>
    import ('views/Category.vue')
const Mine = () =>
    import ('views/Mine.vue')

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    name: 'Home',
    component: Home
}, {
    path: '/category',
    name: 'Category',
    component: Category
}, {
    path: '/mine',
    name: 'Mine',
    component: Mine
}]

Vue.use(VueRouter)

//获取原型对象上的push函数
// const originalPush = VueRouter.prototype.push
//     //修改原型对象中的push方法
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
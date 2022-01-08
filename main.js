import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'
import EditProfile from './components/EditProfile.vue'
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Register },
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/profile',
        name: "Profile",
        component: Profile
    },
    {
        path: '/editprofile/:id',
        component: EditProfile
    },


];
const router = new VueRouter({
    routes
});


new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
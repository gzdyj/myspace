import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserListView from '../views/UserListView';
import UserPofileView from '../views/UserPofileView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import NotFoundView from '../views/NotFoundView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/UserProfile',
    name: 'userprofile',
    component: UserPofileView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
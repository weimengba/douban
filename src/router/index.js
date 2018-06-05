import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/views/PagesView'
import HomeView from '@/views/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/pages',
      component: PageView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        }
      ]
    }
  ]
})

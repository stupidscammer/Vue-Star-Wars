import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Film from '@/components/Film';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/film/:id',
      name: 'Film',
      component: Film,
      props: {
        id: '',
      },
    },
  ],
  mode: 'history',
});

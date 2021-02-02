import Vue from 'vue'
import Router from 'vue-router'
import VCatalog from '../components/VCatalog/VCatalog'
import VCart from '../components/VCart/VCart'

Vue.use(Router);

let router = new Router({
  routes:[
    {
      path: '/',
      name: 'catalog',
      component: VCatalog
    },
    {
      path: '/cart',
      name: 'cart',
      component: VCart,
      props: true
    }
  ]
});

export default router;

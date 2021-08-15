import HelloWorld from '../components/HelloWorld.vue';
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/excel', component: () => import('../components/Excel.vue') }
]

export default routes;
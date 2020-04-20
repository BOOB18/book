import  Vue from 'vue'
import  Router from 'vue-router'
import  bookR from './bookRouter'



let ary = [{
  path:'/*',
  redirect:'/home'
}];


Vue.use(Router);
export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes:bookR.concat(ary),
  linkActiveClass:'current'
})

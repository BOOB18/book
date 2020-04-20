export default [

  {
    path:'/',
    component:()=>import('../views/views.vue'),
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('../views/home/index.vue')
      },
      {
        path:'/list',
        name:'list',
        component:()=>import('../views/list/index.vue')
      },
      {
        path:'/collect',
        name:'collect',
        component:()=>import('../views/collect/index.vue')
      },
      {
        path:'/add',
        name:'add',
        component:()=>import('../views/add/index.vue')
      }
    ]
  },{
  path:'/login',
    component:()=>import('../views/login/login.vue')
  }

]

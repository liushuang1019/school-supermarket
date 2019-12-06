const routes = [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/detail',
      name:'detial',
      meta:{
          require:false
      },
      component:()=>import('../views/detail/detail.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        require:false
    },
      component:()=>import('../views/login/login.vue')
    },{
      path: '/regitry',
      name: 'regitry',
      meta:{
        require:false
    },
      component:()=>import('../views/regitry/regitry.vue')
    },{
      path: '/index',
      name: 'index',
      meta:{
        require:false
    },
      component:()=>import('../views/index/index.vue'),
      children:[
        {
          path: 'car',
          name:'car',
          meta:{
            require:true
        },
          component:()=>import('../views/index/car/car.vue')
        },
        {
          path: 'classify',
          name:'classfiy',
          meta:{
            require:false
        },
          component:()=>import('../views/index/classify/classify.vue')
        },{
          path: 'home',
          name:'home',
          meta:{
            require:false
        },
          component:()=>import('../views/index/home/home.vue')
        },{
          path: 'my',
          name:'my',
          meta:{
            require:true
        },
          component:()=>import('../views/index/my/my.vue')
        }
      ]
    }
  ]

  export default routes;
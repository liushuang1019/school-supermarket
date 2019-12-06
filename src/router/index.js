import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerconfig.js'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  console.log(to,from)
  // next()
  if(to.matched.some(item=>item.meta.require)){
     if(!window.localStorage.token){
         next({
           path:'/login',
          query:{
            redirect:to.fullPath
          }
         })
     }else{
       next()
     }
  }else{
    next()
  }

})
export default router

<template>
  <div class="login">
    <div class="item">
      <b>登录</b>
    </div>
      <div class="item">
        <input type="text" placeholder="用户名" v-model="user">
      </div>
      <div class="item">
        <input type="text" placeholder="密码" v-model="pwd">
      </div>
      <div class="item">
        <input type="button" value='登录' @click='submit'>
        <input type="button" value='注册' v-if='isshow' @click="registry">
      </div>

  </div>
</template>

<script>
// import axios from 'axios';
import {login} from '@/api/api.js';
export default {
  data(){
    return {
      user:'',
      pwd:'',
      isshow:false
    }
  },
  methods:{
    // submit(){
    //    axios.post('/api/user/login',{phone:this.user,password:this.pwd}).then(res=>{//正确
    //      if(res.data.code==1){
    //        window.localStorage.token=res.data.data.token;
    //        this.$router.push({path:'/index/home'})
    //      }else{
    //        console.log("***")
    //      }
         
    //    }).catch((e)=>{//错误走路线
    //      console.log(e)
    //    })
    // }

  //  async submit(){//
  //     try{//成功的
  //         let res=await axios.post('/api/user/login',{phone:this.user,password:this.pwd});//await后跟promise实例对象
  //             if(res.data.code===1){
  //               console.log(res.data)
  //               window.localStorage.token=res.data.data.token;//存储
  //               this.$router.push('/index/home')
  //             }
  //     }catch(e){//失败的
  //         console.log(e.response)
  //     }
  //  }

    async submit(){//
      try{//成功的
          let res=await login({phone:this.user,password:this.pwd});//await后跟promise实例对象
              if(res.data.code===1){
                console.log(res.data)
                window.localStorage.token=res.data.data.token;//存储
                this.$router.push({path:this.$route.query.redirect})
              }
      }catch(e){//失败的
      this.isshow=true;
          console.log(e.response)
      }
   },

  registry(){
    this.$router.push('/registry');
  }
  }
}
</script>

<style scoped>
 .login{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
 }
 .login .item{
   padding: 10px 20px;
   display: flex;
   justify-content: space-around;
 }
 .login .item input{
   width: 100%;
   height: 40px;
   background: #eee;
   border-radius: 5px;
   border:0;
   outline: 0;
 }
 .login .item input[type='button']{
   width: 40%;
   height: 40px;
   background: #eee;
   border-radius: 5px;
   border:0;
   outline: 0;
 }
</style>
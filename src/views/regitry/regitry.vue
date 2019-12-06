<template>
  <div class="registry">
      <div class="item">
      <b>注册</b>
    </div>
      <div class="item">
        <input type="text" placeholder="用户名" v-model="user">
      </div>
      <div class="item">
        <input type="text" placeholder="密码" v-model="pwd">
      </div>
      <div class="item">
        <input type="button" value='注册' @click='newregistry'>
      </div>
  </div>
</template>

<script>
import {registry} from '@/api/api.js';
export default {
 data(){
   return {
     user:'',
     pwd:''
   }
 },
 methods:{
   async newregistry(){
     var phone=this.user;
     var password=this.pwd;
      console.log(phone,password)
      try{
        let res=await registry({phone,password});
              if(res.data.code===1){
                this.$router.go(-1)
              }
      }catch(e){
         console.log(e.response,'11');
      }
   }
 }
}
</script>

<style>
 .registry{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
 }
 .registry .item{
   padding: 10px 20px;
 }
 .registry .item input{
   width: 100%;
   height: 40px;
   background: #eee;
   border-radius: 5px;
   border:0;
   outline: 0;
 }
</style>
<template>
  <div class="home">
    <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item,index) in swiperlist' :key='index'>
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
    <!-- bscroll列表 -->
    <div class="scroll">
      <div class="box">
         <scrollItem v-for='(item,index) in list' :key='index' :item='item'></scrollItem>
         <div v-if='show'>---我是有底线的---</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';
import {banner,homescroll} from '@/api/api.js';
import scrollItem from '../../../components/scrollItem';
import Bscroll from 'better-scroll';
export default {
 data(){
   return {
     swiperlist:[],
     pageid:0,
     limit:10,
     list:[],
     show:false
   }
 },
 async mounted(){
    //  轮播
    let bannerfn=await banner();
    this.swiperlist=bannerfn.data.data;

 
   this.getlist()

     this.$nextTick(()=>{//解决一次轮播
        new Swiper('.swiper-container',{
          loop:true,
          autoplay:true
        })
        
       this.initBs()
   })
 
 },
 components:{
   scrollItem
 },
 methods:{
   initBs(){
       // 将bscroll挂载到全局
        this.myBscroll=new Bscroll('.scroll',{
          pullDownRefresh:{
             threshold: 50
          },
          pullUpLoad:{
             threshold: -100
          }
        })
        this.myBscroll.on("pullingUp", () => {
          console.log("上拉加载");
          this.pageid++;
            this.getlist()
          });
         this.myBscroll.on('pullingDown',()=>{
           console.log("下拉");
           this.list=[];//重新刷新list
           this.show=false;
           this.pageid=0;
           this.getlist()
         }) 
   },
   async getlist(){
      // 上下拉
      let scroll=await homescroll({pageid:this.pageid,limit:this.limit});
      console.log(scroll.data.data)
      this.list=this.list.concat(scroll.data.data);
      if(scroll.data.data.length<=0){
          this.show=true;
      }
      

       this.myBscroll.refresh();//重新刷新
      this.myBscroll.finishPullUp();
      this.myBscroll.finishPullDown();
   }

 }

};
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
}
.home .swiper-container{
  width: 100%;
  height: 200px;
}
.home .swiper-container img{
    width: 100%;
  height: 200px;
}
.scroll{
  width: 100%;
  flex: 1;
  overflow: hidden;
}
.box>div{
  display: flex;
  justify-content:space-around ;
}
</style>
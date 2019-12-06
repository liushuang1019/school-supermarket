<template>
  <div class="index">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="foot">
 
      <router-link v-for="(item,index) in arr" :key="index" tag="dl" :to="item.path">
        <dd :class='["icon"," iconfont",item.icon ]'></dd>
        <dt>{{item.tit}}</dt>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          icon: "icon-icon22fuzhi",
          tit: "购物车",
          path: "/index/car"
        },
        {
          icon: "icon-fenlei",
          tit: "分类",
          path: "/index/classify"
        },
        {
          icon: "icon-home",
          tit: "首页",
          path: "/index/home"
        },
        {
          icon: "icon-wode",
          tit: "我的",
          path: "/index/my"
        }
      ]
    };
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.index .main {
  width: 100%;
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: column;
}
.index .foot {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid #eee;
}
.index .foot dl {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.index .foot dl dd{
  flex: 7;
}
.index .foot dl dt{
  flex: 3;
}
.router-link-active{
  color: orange;
}
</style>
<template>
      <dl class="item">
          <dd>
              <img :src="item.cover" alt="">
          </dd>
          <dt>
              <h4>{{item.name}}</h4>
              <p><span>￥{{item.price}}</span><span>购物车</span></p>
          </dt>
      </dl>
</template>

<script>
export default {
    props:{//接收参数
        item:Object
    }
}
</script>

<style scoped>
.item{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.item dd{
    width: 120px;
    height: 120px;
        display: flex;
    justify-content: space-around;
    align-items: center;
}
.item dd img{
     width: 100px;
    height: 100px;

}
.item dt{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
}
.item dt p span{
    margin-right: 10px;
}
</style>
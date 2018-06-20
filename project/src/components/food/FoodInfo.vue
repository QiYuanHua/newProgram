<template>
   <div class="main">
     <div class="lunbo">
      <mt-swipe :auto="4000">
       <mt-swipe-item>
         <div class="item">
           <img src="https://fieldsimage.oss-cn-hangzhou.aliyuncs.com/product/201803/1522417257845753.JPG" alt="">
         </div>
       </mt-swipe-item>
       <mt-swipe-item>
         <div class="item">
           <img src="https://fieldsimage.oss-cn-hangzhou.aliyuncs.com/product/201803/1522417253774963.JPG" alt="">
         </div>
       </mt-swipe-item>
       <mt-swipe-item>
         <div class="item">
           <img src="https://fieldsimage.oss-cn-hangzhou.aliyuncs.com/product/201803/1522417257853997.JPG" alt="">
         </div>
       </mt-swipe-item>
     </mt-swipe>
     </div>
     <div class="information">
       <div class="name_price">
         <p class="name">Fields 优选黑猪 冷冻 90%瘦肉糜</p>
         <p class="name1">非比寻常的猪肉</p>
         <p class="price">￥39</p>
       </div>
       <div class="send">
         <p class="sen"> 上海地区，16:00前下单当日送达。</p>
       </div>
       <div class="weight">
         <div class="w1">
           <span class="w11">规格:</span>
           <span class="w12">500克</span>
         </div>
         <div class="w2">
           <p>产地：中国</p>
         </div>
         <div class="w3">
           <p>存储方式：冷冻保存</p>
         </div>
       </div>
     </div>
     <div class="introduct">
       <p>产品详细介绍：</p>
       <p>全程无药饲养，无添加剂，养猪场空气异常新鲜，水质干净，采用土法饲养出来的黑猪肉，肉质比普通猪肉要有嚼劲，味道异常鲜美，并通过了无激无抗的认证。猪肉糜可以用来炒菜、肉馅面食、猪肉汉堡、肉丸。立即订购！</p>
     </div>
   </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
    export default {
        name: "",

    }
</script>

<style scoped>
  .lunbo{
    height: 600px;
  }
  .item{
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item>img{
    width: 600px;
    height: 600px;
  }
  .name_price{
    padding: 20px 40px 0;
  }
  .name{
    font-size: 28px;
    color: #333;
  }
  .name1{
    padding-top: 16px;
    color: #009c4c;
  }
  .price{
    color: #009c4c;
    font-size: 34px;
    line-height: 60px;
  }
  .sen{
    padding: 20px 40px;
    color: #f07641;
    border-top: 2px solid #f0f0f0;
    border-bottom: 2px solid #f0f0f0;
  }
  .weight{
    padding: 0 40px;
  }
  .w1{
    margin-top: 20px;
  }
  .w11{
    line-height: 68px;
    margin-right: 34px;
  }
  .w12{
    padding: 16px 24px;
    border: 2px dotted #009c4c;
    border-radius: 6px;
  }
  .w2>p,.w3>p {
    line-height: 44px;
    color: #333;
  }
  .w3{
    margin-bottom: 16px;
  }
  .information{
    border-bottom: 16px solid #f0f0f0;
  }
  .introduct{
    margin-top: 30px;
    padding: 0 20px;
    padding-bottom: 30px;
  }
  .introduct>p{
    line-height: 1.6;
    color: #333;
  }
</style>

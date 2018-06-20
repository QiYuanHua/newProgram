<template>
  <div>
    <div class="title">
      <h2>食记</h2>
    </div>
    <div class="food_cate">
      <div class="food_class">
        <p class="c1">食谱分类</p>
        <p class="c2"><a href="#"><img src="https://m.fieldschina.com/static/img/foods_1.jpg" alt=""></a></p>
      </div>
      <div class="food_event">
        <p class="e1">美味纪事</p>
        <p class="e2"><a href="#"><img src="https://m.fieldschina.com/static/img/foods_2.jpg" alt=""></a></p>
      </div>
      <hr>

    </div>
    <FoodMenu></FoodMenu>
  </div>
</template>

<script>
  import FoodMenu from './FoodMenu'
    export default {
        name: "",
        components:{
          FoodMenu
        }
    }
</script>

<style scoped>
  .title{
    position: fixed;
    z-index:10;
    top: 0;
    right: 0;
    left:0;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    margin: 0 auto;
  }
  h2{
    margin: 0;
    font-size: 36px;
    line-height: 92px;
    height: 92px;
    box-sizing: border-box;
    width: 100%;
    padding: 0 130px;
    text-align: center;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .food_cate{
    margin-top: 92px;
    position: relative;
    padding: 10px 0 40px 0;
    border-bottom: 16px solid #f0f0f0;
    overflow: hidden;
  }
  .food_class,.food_event{
    float: left;
    width: 50%;
  }
  .c1,.e1{
    font-size: 28px;
    color: #333;
    padding: 10px 0 30px 0;
    text-align: center;
  }
  .c2,.e2{
    text-align: center;
  }
  .c2>a>img,.e2>a>img{
    width: 230px;
    height: 230px;
  }
  hr{
    position: absolute;
    display: block;
    top: 25%;
    left: 50%;
    width: 2px;
    height: 190px;
    border: none;
    border-right: 2px solid #f0f0f0;
  }

</style>

<template>
  <div>
    <div class="title">
      <h2>食记</h2>
    </div>
    <div class="main">
      <div class="foodImg">
        <img src="https://fieldsimage.oss-cn-hangzhou.aliyuncs.com/recipes/201707/purple_asparagus.jpg" width="100%" alt="">
      </div>
      <div class="head">
        <h1>烤紫芦笋配黑米、牛油果和豆苗</h1>
        <p class="type">健康素食</p>
        <div class="degree">
          <span class="diff">难易程度</span>
          <span class="process"><b class="dot"></b></span>
        </div>
      </div>
      <div class="desc">
        <p>紫黑色食品中富含大量的花青素，具有清除自由基，抗氧化，防止衰老的功能。可起到护肝、养目、防癌、修复等作用。</p>
      </div>
      <div class="need">
        <div class="_title">食谱材料</div>
        <div class="n1">
          <p>2个牛油果</p>
          <p>1勺橄榄油</p>
          <p>300g黑米，浸泡于500g水中，过夜</p>
          <p>1勺橄榄油</p>
        </div>
      </div>
      <div class="function">
        <div class="_title">操作步骤</div>
        <div class="n1">
          <p>2个牛油果</p>
          <p>1勺橄榄油</p>
          <p>300g黑米，浸泡于500g水中，过夜</p>
          <p>1勺橄榄油</p>
        </div>
      </div>
      <div class="buy">
        <div class="_title">做这个菜需要的食材</div>
        <FoodNeed></FoodNeed>
        <FoodNeed></FoodNeed>
        <FoodNeed></FoodNeed>
        <FoodNeed></FoodNeed>
        <div class="selectAll">
          <div class="select">
            <input type="checkbox">
            <i class="icon iconfont icon-icon-test"></i>
          </div>
          <span>全选</span>
          <span class="num">共6件</span>
        </div>
        <div class="btn">
          <button class="button">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FoodNeed from "./FoodNeed"
    export default {
        name: "",
      components:{
          FoodNeed,
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
  .foodImg{
    width: 100%;
    margin-top: 92px;
  }
  img{
    vertical-align: middle;
  }
  .head{
    width: 100%;
  }
  h1{
    padding: 40px 0 10px;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    color: #333;
    line-height: 2;
  }
  .type{
    width: 50%;
    margin: 0 25%;
    font-size: 28px;
    padding-bottom: 12px;
    margin-bottom: 20px;
    text-align: center;
    color: #717171;
  }
  .degree{
    border-top: 1px solid #f0f0f0;
    width: 70%;
    margin: 0 15%;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    color: #717171;
    font-size: 28px;
  }
  .process{
    display: inline-block;
    width: 200px;
    height: 24px;
    border: 2px solid #f0f0f0;
    border-radius: 12px;
    background: #fff;
    margin-left: 5px;
  }
  .dot{
    width: 80px;
    height: 24px;
    display: inline-block;
    background-color: #f0f0f0;
    border-radius: 12px;
  }
  .desc{
    width: 100%;
    border-top: 16px solid #f0f0f0;
  }
  .desc>p{
    padding: 20px 30px;
    line-height: 36px;
    font-size: 24px;
    color: #717171
  }
  .need,.function,.buy{
    width: 100%;
    border-top: 16px solid #f0f0f0;
  }
  ._title{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: #333333;
    border-bottom: 2px solid #f0f0f0;
  }
  .n1{
    padding: 0 30px;
    margin-top: 20px;
  }
  .n1>p{
    font-size: 24px;
    display: flex;
    align-items: center;
    height: 40px;
    color: #717171;
    margin-bottom: 40px;
  }
  .selectAll{
    padding: 20px 24px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    font-size: 32px;
    overflow: hidden;
  }
  .selectAll>span{
    margin-left: 70px;
    color: #717171;
    line-height: 32px;
  }
  .select{
    width: 32px;
    height: 32px;
    position: absolute;
    left: 32px;
    border-radius: 50%;
    border: 2px solid #c8c8c8;
    overflow: hidden;
  }
  .num{
    float: right;
  }
  .select>i{
    font-size: 32px;
    color: white;
    line-height: 32px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .select>input{
    width: 32px;
    height: 32px;
    border: none;
  }
  .select>input:before {
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #009c4c;
    border-radius: 50%;
    content: '';
  }
  .btn{
    padding: 20px 40px;
    margin-bottom: 100px;
  }
  .button{
    display: inline-block;
    width: 100%;
    margin-bottom: 0;
    padding: 0 24px;
    border-radius: 8px;
    font-size: 34px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    background-color: #009c4c;
    cursor: pointer;
  }
</style>

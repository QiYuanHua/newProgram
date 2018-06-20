<template>
  <div class="main">
    <div class="item">
      <div class="first">
        <span class="name">小天</span>
        <span class="type">公司</span>
        <span class="tele">15852135040</span>
      </div>
      <div class="second">
        <span class="addre">上海松江</span>
      </div>
      <div class="third">
        <span class="moren">默认</span>
        <a href="#"><i class="icon iconfont icon-remove-1-copy"></i></a>
        <a href="#"><i class="icon iconfont icon-edit_icon"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  .main{
    width: 100%;
  }
  .item{
    font-size: 14px;
    position: relative;
    margin: 0 auto;
    padding: 16px 40px;
    border-top: 2px solid #f0f0f0;
    border-bottom: 16px solid #f0f0f0;
  }
  .first,.second,.third{
    width: 100%;
    overflow: hidden;
  }
  .name{
    font-size: 28px;
    line-height: 1.4;
    color: #333;
    float: left;
    margin-right: 8px;
  }
  .type{
    line-height: 1.4;
    float: left;
    padding: 2px 16px 0 16px;
    color: #009c4c;
    border: 2px solid #009c4c;
    border-radius: 18px;
  }
  .tele{
    float: right;
    font-size: 28px;
    line-height: 1.4;
    color: #333;
  }
  .second{
    display: inline-block;
    padding: 20px 0;
    color: #333;
    border-bottom: 2px solid #f0f0f0;
  }
  .third{
    line-height: 40px;
    width: 100%;
    padding: 10px 0 10px 0;
  }
  .moren{
    color: red;
  }
  .third>a{
    float: right;
    margin-left: 30px;
    font-size: 30px;
    color: #a4a4a4;
  }
  i{
    font-size: 34px;
  }
</style>

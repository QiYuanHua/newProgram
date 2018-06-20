<template>
    <div>
      <div class="container">
        <div class="item">
          <div class="select">
            <input type="checkbox">
            <i class="icon iconfont icon-icon-test"></i>
          </div>
          <div class="pic">
            <img src="https://fieldsimage.oss-cn-hangzhou.aliyuncs.com/product/201511/1446659411795092_s2.jpg" alt="">
          </div>
          <div class="name">
            <a href="#">墨西哥 牛油果</a>
            <p class="have">暂无现货</p>
            <p class="price">￥30</p>
          </div>
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
  .container{
    width: 100%;
    border-bottom: 2px solid #f0f0f0;
  }
  .select{
    width: 32px;
    height: 32px;
    position: absolute;
    top: 77px;
    left: 32px;
    border-radius: 50%;
    border: 2px solid #c8c8c8;
    overflow: hidden;
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
  .item{
    padding: 30px 20px;
    position: relative;
    min-height: 154px;
  }
  .pic{
    position: absolute;
    top: 30px;
    left: 80px;
    width: 150px;
    height: 150px;
  }
  .pic>img  {
    width: 100%;
  }
  .name{
    padding-left: 220px;
  }
  .name>a{
    line-height: 1.2;
    color: #333;
    font-size: 28px;
  }
  .have{
    color: red;
    line-height: 1.2;
    font-size: 24px;
  }
  .price{
    line-height: 1.5;
    font-size: 28px;
    color: #009c4c;
    position: absolute;
    bottom: 30px;
  }
</style>

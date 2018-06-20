<template>
  <div>
    <div class="food_card">
      <a href="#"><img src="https://fieldsimage.oss-cn-hangzhou.aliyuncs.com/recipes/201707/purple_asparagus.jpg" width="100%" alt=""></a>
      <div class="food_desc">
        <div class="food_merit">
          <p class="til">
            <a href="#">烤紫芦笋配黑米、牛油果和豆苗</a>
          </p>
          <p class="txt"></p>
          <p class="iii">紫黑色食品中富含大量的花青素，具有清除自由基，抗氧化，防止衰老的功能。可起到护肝、养目、防癌、修复等作用。</p>
        </div>
        <div class="food_bottom">
          <p class="agree">
            <span class="aa1">难易程度</span>
            <span class="diff">
              <b class="dot"></b>
            </span>
          </p>
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
  .food_card{
    width: 100%;
    overflow: hidden;
    border-bottom: 16px solid #f0f0f0;
  }
  .food_card>a{
    width: 100%;
  }
  .food_card>a>img {
    width: 100%;
    vertical-align: middle;
  }
  .food_desc{
    width: 100%;
  }
  .food_merit{
    padding: 10px 40px;
    /*border-bottom: 1px dashed #f0f0f0;*/
  }
  .til{
    width: 72%;
    padding: 10px 0;
  }
  .til>a{
    font-size: 30px;
    color: #333;
  }
  .txt{
    padding-top: 10px;
  }
  .iii{
    font-size: 28px;
    color: #717171;
  }
  .food_bottom{
    width: 100%;
    padding-bottom: 20px;
  }
  .agree{
    padding: 16px 40px 10px;
    border-top: 2px dashed #f0f0f0;
    color: #717171;
    overflow: hidden;
  }
  .aa1{
    float: left;
    margin-right: 10px;
    font-size: 20px;
  }
  .diff{
    overflow: hidden;
    display: inline-block;
    width: 400px;
    height: 20px;
    padding: 0;

    border-radius: 12px;
    border: 2px solid #f0f0f0;
    float: left;

  }
  .dot{
    width: 160px;
    float: left;
    height: 100%;
    border-radius: 12px;
    background: #f0f0f0;
  }
</style>

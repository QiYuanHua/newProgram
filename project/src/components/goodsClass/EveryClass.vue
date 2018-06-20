<template>
    <div>
      <div class="every_item">
        <a href="#"><img src="http://image.fieldschina.com/article_image/APPicon_201702/green/chief_20180517.png" alt=""></a>
        <a href="#" class="text">大厨美食</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "EveryClass"
    }
</script>

<style scoped>
  .every_item{
    width: 33.33%;
    position: relative;
    float: left;
    margin: 20px 0 10px;
  }
  a{
    width: 100%;
    float: left;
    text-align: center;
  }
  .every_item>a>img{
    width: 57%;
    margin: 0 auto 10px auto;
  }
  .text{
    text-align: center;
    margin-top: 24px;
    font-size: 28px;
    color: #717171;
    height: 64px;
    line-height: 32px;
  }
</style>

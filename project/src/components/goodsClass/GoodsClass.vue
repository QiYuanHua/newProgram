<template>
    <div>
      <div class="title">
        <h2>分类</h2>
      </div>
      <div class="main">
        <every-class></every-class>
        <every-class></every-class>
        <every-class></every-class>
        <every-class></every-class>
        <every-class></every-class>

      </div>

    </div>
</template>

<script>
  import EveryClass from "./EveryClass"
    export default {
        name: "",
      components:{
          EveryClass
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
  .main{
    margin-top: 92px;
  }
</style>

<template>
  <div>
    <div class="title">
      <h2>地址管理</h2>
    </div>
    <div class="list">
      <AddressList></AddressList>
    </div>
  </div>
</template>

<script>
  import AddressList from "./AddressList"
    export default {
        name: "",
        components:{
          AddressList,
        },
        data:function(){
          return{
            data:"",
          }
        },
    }
</script>

<style scoped>
  .title{
    position: fixed;
    z-index:10;
    top: 0;
    right: 0;
    left:0;
    border-bottom: 2px solid #f0f0f0;
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
  .list{
    margin-top: 92px;
  }
</style>

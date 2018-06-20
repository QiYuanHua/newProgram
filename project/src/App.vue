<template>
  <div id="app">
    <div class="tablebar">
      <div>
        <router-link :to="{path:'/home'}" tag="div"><i class="icon iconfont icon-zhuye"></i><span>莆田</span></router-link>
      </div>
      <div>
        <router-link :to="{path:'/class'}" tag="div"><i class="icon iconfont icon-fenlei"></i><span>分类</span></router-link>
      </div>
      <div>
        <router-link :to="{path:'/shopcar'}" tag="div"><i class="icon iconfont icon-icon01" id="car"></i></router-link>
      </div>
      <div>
        <router-link :to="{path:'/menu'}" tag="div"><i class="icon iconfont icon-edit_icon"></i><span>食记</span></router-link>
      </div>
      <div>
        <router-link :to="{path:'/user'}" tag="div"><i class="icon iconfont icon-geren"></i><span>我</span></router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{

  }
  .tablebar{
    width: 100%;
    height: 92px;
    display: flex;
    position: fixed;
    bottom: 0px;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #f0f0f0;
  }
  .tablebar>div{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .tablebar>div>div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tablebar>div>div>i{
    font-size: 40px;
  }
  .tablebar>div>div>span{
    margin-top: 8px;
    color: #333;
  }
  .router-link-active{
    color: #009c4c;
  }
  #car{
    font-size: 70px;
    font-weight: 100;
  }
  .mint-swipe-indicator {
    width: 16px;
    height: 16px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .3;
    margin: 0 6px;
  }
  .mint-swipe-indicator.is-active {
    background: #009c4c;
    opacity: 1;
  }
</style>

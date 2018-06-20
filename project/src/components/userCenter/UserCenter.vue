<template>
    <div>
      <div class="header">
        <img class="back" src="https://m.fieldschina.com/static/img/wap-pic-03.webp" width="100%" alt="">
        </div>
      <div class="login">
          <div class="headImg"></div>
          <div class="log">
            <a href="#" class="ll1">登录</a>
            <span class="ll2">|</span>
            <a href="#" class="ll3">注册</a>
          </div>
          <div class="setSome">
            <i class="iconfont icon-setting-o sS1"></i>
          </div>
          <div class="money">
          <div class="container">
            <div class="leave">
              <span class="xx1">余额</span>
              <span class="xx2"> > </span>
            </div>
            <div class="score">
              <span class="xx1">积分</span>
              <span class="xx2"> > </span>
            </div>
            <div class="youhui">
              <span class="xx1">优惠券</span>
              <span class="xx2"> > </span>
            </div>
          </div>
        </div>
        </div>
      <div class="main">
        <div class="order">
          <ul>
            <li>
              <div>
                <i class="iconfont icon-dingdan"></i>
                <span>我的订单</span>
              </div>
            </li>
            <li>
              <div>
                <i class="iconfont icon-dingdan"></i>
                <span>宅配订单</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="set">
          <ul>
            <li>
              <div>
                <i class="iconfont icon-xihuan"></i>
                <span>我的收藏</span>
              </div>
            </li>
            <li>
              <div>
                <i class="icon iconfont icon-map--o"></i>
                <span>地址管理</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="others">
          <ul>
            <li>
              <div>
                <i class="iconfont icon-wodeyouhuiquan"></i>
                <span>充值特惠</span>
              </div>
            </li>
            <li>
              <div>
                <i class="iconfont icon-huiyuan"></i>
                <span>VIP商城</span>
              </div>
            </li>
            <li>
              <div>
                <i class="iconfont icon-gerenziliao"></i>
                <span>好友推荐</span>
              </div>
            </li>
            <li>
              <div>
                <i class="iconfont icon-liwu"></i>
                <span>激活礼品卡</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="connect">
          <ul>
            <li>
              <div>
                <i class="iconfont icon-kefu"></i>
                <span>联系客服</span>
                <i class="iconfont icon-arrowright"  id="more1"></i>
                <span id="tele">400-820-7708</span>
              </div>
            </li>
            <li>
              <div>
                <i class="iconfont icon-weixin"></i>
                <span>微信客服</span>
              </div>
            </li>
            <li>
              <div>
                <i class="iconfont icon-more_light"></i>
                <span>了解更多</span>
                <i class="iconfont icon-arrowright" id="more2"></i>
              </div>
            </li>
          </ul>
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
  .header{
    width: 100%;
    height: 398px;
    overflow: hidden;
    position: relative;
    /*background-image: url(https://m.fieldschina.com/static/img/wap-pic-03.webp);*/
  }
  .back{
    position: relative;
  }
  .log{
    position: absolute;
    top: 112px;
    left: 260px;
    overflow: hidden;
  }
  .sS1{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 30px;
    top: 26px;
    font-size: 48px;
    color: white;
  }
  .ll1{
    color: white;
    float: left;
    font-size: 28px;
  }
  .ll3{
    color: white;
    float: right;
    font-size: 28px;
  }
  .ll2{
    color: white;
    font-size: 28px;
    margin: 0 26px;
  }
  .login {
    width: 100%;
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .money{
    position: absolute;
    width: 100%;
    top: 280px;
    left: 0;
    height: 118px;
  }
  .container{
    padding: 20px 40px;
    display: flex;
  }
  .leave,.score,.youhui{
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    font-size: 24px;
  }
  .xx1{
    line-height: 36px;
  }
  .xx2{
    line-height: 42px;
  }
  .headImg{
    width: 170px;
    height: 170px;
    overflow: hidden;
    border-radius: 50%;
    position: absolute;
    top: 40px;
    left: 60px;
    background-color: white;
  }
  .main li{
    width: 100%;
    height: 80px;
    display: block;
    border-bottom: 2px solid #f0f0f0;
  }
  .main ul{
    border-bottom: 16px solid #f0f0f0;
  }
  li>div{
    height: 100%;
    padding: 0 40px;
    line-height: 80px;
  }
  li>div>span{
    line-height: 80px;
    font-size: 28px;
  }
  li>div>i{
    margin-right: 20px;
    display: inline-block;
    font-size: 32px;
  }
  #tele{
    font-size: 24px;
    color: #009c4c;
    margin-right: 80px;
    float: right;
  }
  #more1{
    float: right;
  }
  #more2{
    float: right;
  }
  .connect{
    padding-bottom: 92px;
  }
</style>

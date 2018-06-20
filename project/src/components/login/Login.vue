<template>
  <div>
    <div class="title">
      <h2>登录莆田网</h2>
    </div>
    <div class="login">
      <div class="form">
        <div class="form_item">
          <input type="text" name="username" v-model="username" @blur="judgeUser"/>
        </div>
        <div class="form_item">
          <input :type="isType?'password':'text'" name="password"  v-model="password">
          <span @click="hide"><i class="icon iconfont" :class="isHidden?'icon-icon-test1':'icon-xianshi'"></i></span>
        </div>
      </div>
      <div class="forget">
        <span>忘记密码</span>
      </div>
        <button class="denglu" @click="DL">登录</button>
      <div class="re">
        <a href="#">没有账号？去注册！</a>
      </div>
      <div class="wrong">
        <p v-if="isTrue1">用户名错误</p>
        <p v-if="isTrue2">密码错误</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {setCookie,getCookie,delCookie} from '../../cookie.js'
    export default {
        name: "",
      data:function(){
        return{
          isHidden:true,
          isType:true,
          username:'',
          password:'',
          isTrue1:0,
          isTrue2:0,
        }
      },
      methods:{
          hide(){
            this.isHidden=!this.isHidden;
            this.isType=!this.isType;
          },
          DL(){
            var params = new URLSearchParams();
            params.append('username', this.username);
            params.append('password', this.password);
            // console.log(this.password);
            this.$http.post('http://10.80.7.192/putian/login/login.php',params).then(res=>{
              // console.log(res);
              if (res.data!='success'){
                this.isTrue2=3;
                this.u_judge2();
              }else{
                setCookie('username',this.username,1000*60);
              }
            }).catch(err=>{
              console.log(err);
            })
          },
          judgeUser(){
            var params = new URLSearchParams();
            params.append('username', this.username);
            this.$http.post('http://10.80.7.192/putian/login/isregister.php',params).then(res=>{
              // console.log(res);
              if(res.data!="fail"){
                this.isTrue1 = 2;
                this.u_judge1();
              }
            }).catch(err=>{
              console.log(err);
            })
          },
          u_judge1(){
              var time = setInterval(() => {
              this.isTrue1--;
              console.log(this.isTrue1);
              if(this.isTrue1 <= 0){
                clearInterval(time);
                this.isTrue1=0;
              }
            },1000)
          },
          u_judge2(){
            var time = setInterval(() => {
              this.isTrue2--;
              console.log(this.isTrue2);
              if(this.isTrue2 <= 0){
                clearInterval(time);
                this.isTrue2=0;
              }
            },1000)
          },
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
  .login{
    margin-top: 162px;
    padding: 0 40px;
    text-align: center;
  }
  .form_item{
    position: relative;
    width: 100%;
    background-color: #fff;
    line-height: 80px;
    font-size: 28px;
    color: #a4a4a4;
    border: 2px solid #f0f0f0;
    border-bottom: none;
  }
  .form_item:last-of-type {
    border-radius: 0 0 10px 10px;
    border-bottom: 2px solid #f0f0f0;
  }
  .form_item:first-child {
    border-radius: 10px 10px 0 0;
  }
  .form_item>input{
    width: 75%;
    line-height: 40px;
    padding: 20px 80px;
    border: none;
    border-radius: 8px;
    outline: 0;
    font-size: 28px;
    color: #333;
  }
  .form_item>span{
    display: inline-block;
    position: absolute;
    width: 40px;
    right: 20px;
    top: 0px;
  }
  .form_item>span>i{
    display: inline-block;
  }
  .forget{
    width: 100%;
    margin: 26px 0;
    color: #009c4c;
    text-align: right;
  }
  .denglu{
    width: 100%;
    background-color: #009c4c;
    color: white;
    font-size: 40px;
    line-height: 80px;
    border-radius: 8px;
    outline: none;
  }
  .re{
    width: 100%;
    margin: 26px 0;
  }
  .re>a{
    font-size: 28px;
    color: #009c4c;
  }
  .wrong{
    width: 100%;
    position: fixed;
    top: 350px;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrong>p{
    position: relative;
    font-size: 28px;
    line-height: 60px;
    top: 30%;
    width: 70%;
    padding: 8px 5%;
    margin: 0 15%;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    background: black;
    opacity: 0.8;
    word-break: break-all;
  }
</style>

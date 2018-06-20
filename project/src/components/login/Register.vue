<template>
   <div>
     <div class="title">
       <h2>注册莆田网账号</h2>
     </div>
     <div class="login">
       <div class="form">
         <div class="form_item">
           <input type="text" name="username" placeholder="手机号" v-model="username" @blur="b_user">
         </div>
         <div class="form_item">
           <input type="text" name="code" placeholder="图形验证码" id="code" v-model="code" @blur="b_code">
           <!--<img :src="codePic" alt="" class="codeImg" @click="changePic">-->
           <div class="codeImg">
             <img :src="codePic" alt="" @click="changePic">
           </div>
         </div>
         <div class="form_item">
           <input type="text" name="message" placeholder="短信验证码" id="message" v-model="message" @blur="b_message">
         </div>
         <div class="form_item">
           <input :type="isType?'password':'text'" name="password" placeholder="请输入密码" v-model="password" @blur="b_password">
           <span @click="hide"><i class="icon iconfont" :class="isHidden?'icon-icon-test1':'icon-xianshi'"></i></span>
         </div>
       </div>
       <div class="terms">
         <input type="checkbox" v-model="checkName">
         <p>我已经阅读并同意</p>
         <a href="#">莆田网的条款和使用条件</a>
       </div>
       <button :class="isRegister?'res':'isRes'" @click="zhuce">注册</button>
     </div>
   </div>
</template>

<script>
    export default {
        name: "",
      data:function(){
        return{
          isHidden:true,
          isType:true,
          codePic:"http://10.80.7.192/putian/login/img.php",
          a:0,
          username:"",
          code:'',
          message:'',
          password:'',
          checkmessage:true,//判断短信验证码是否正确
          checkcode:true,//判断图片验证码是否正确
          checkName:true,//是否同意条款
          checkpassword:false,
          checkuser:false
        }
      },
      methods:{
        hide(){
          this.isHidden=!this.isHidden;
          this.isType=!this.isType;
        },
        changePic(){
          this.a++;
          this.codePic="http://10.80.7.192/putian/login/img.php?a="+this.a
        },
        zhuce(){
          var params = new URLSearchParams();
          params.append('username', this.username);
          params.append('password', this.password);
          this.$http.post('http://10.80.7.192/putian/login/register.php',params).then(res=>{
            console.log(res.data);
          }).catch(err=>{
            console.log(err);
          })
        },
        b_user(){
          var params = new URLSearchParams();
          params.append('username', this.username);
          this.$http.post('http://10.80.7.192/putian/login/isregister.php',params).then(res=>{
            console.log(res);
            if(res.data=="fail"){
              alert("验证码错误");
              this.checkcode = false;
            }else{
              this.checkcode=true;
            }
          }).catch(err=>{
            console.log(err);
          })
          if (this.username.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
            this.checkuser=true;
          }else{
            alert("请输入正确手机号码");
            this.username=""
          }
        },
        b_code(){
          var params = new URLSearchParams();
          params.append('code', this.code);
          this.$http.post('http://10.80.7.192/putian/login/canregister.php',params).then(res=>{
            console.log(res);
          }).catch(err=>{
            console.log(err);
          })
        },
        b_message(){},
        b_password(){
          if(this.password.match(/^[a-zA-Z0-9]{6,18}$/)){
          this.checkpassword = true;
          }else{
            alert("请输入6-18位数字字母的组合");
          }
        },
      },
      computed: {
        isRegister(){
            if (this.username&&this.password&&this.checkmessage&&this.checkcode&&this.checkName){
              return false
            }else{
              return true
            }
        }
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
    text-align: left;
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
  #code{
    width: 60%;
  }
  #message{
    width: 60%;
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
  .terms{
    margin: 26px 0;
    overflow: hidden;
    line-height: 28px;
  }
  .terms>p,.terms>a,.terms>input{
    float: left;
  }
  .terms>input{
    width: 26px;
    height: 26px;
    border: 1px solid #c8c8c8;
    margin: 0 6px 0px 2px;
    -webkit-appearance: none;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    position: relative;
  }
  .terms>input:before{
    width: 26px;
    height: 26px;
    position: absolute;
    top: -1px;
    left: -1px;
    background-color: #009c4c;
    content: '';
  }
  .terms>input:after{
    position: absolute;
    top: 3px;
    left: 2px;
    width: 16px;
    height: 8px;
    border: 4px solid #fff;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    background: 0 0;
    content: '';
  }
  .terms>a{
    color: #009c4c;
  }
  .res{
    color: #a4a4a4;
    background-color: #f0f0f0;
    pointer-events: none;
  }
  .isRes{
    color: #fff;
    background-color: #009c4c;
  }
  button {
    width: 100%;
    font-size: 32px;
    line-height: 80px;
    border: none;
    border-radius: 8px
  }
  .codeImg{
    position: absolute;
    width: 200px;
    height: 60px;
    right: 20px;
    top: 8px;
    border: 2px solid #f0f0f0;
    overflow: hidden;
  }
  .codeImg>img{
    width: 200px;
    height: 60px;
  }
</style>

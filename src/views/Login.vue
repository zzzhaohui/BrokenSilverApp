<template>
  <div id="app">
    <div class="logo">logo</div>
    <div class="login">
      <input
        span="24"
        @click="onUser"
        v-model="user"
        type="text"
        name="user"
        id="user"
        placeholder="输入用户名"
      />
      <span v-show="show1">请输入正确的账号</span>
      <input
        span="24"
        @click="onPassword"
        v-model="password"
        type="password"
        name="password"
        id="password"
        placeholder="输入密码"
      />
      <span class="span2" v-show="show2">账户或者密码错误</span>
      <input span="24" type="button" value="Singn in" @click="onLogin" />
    </div>
    <p>{{ this.$store.state.count }}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show1: false,
      show2: false,
      user: "",
      password: "",
    };
  },
  methods: {
    // 非空判断
    onUser(){
      this.show1 = false
    },
    onPassword(){
      if(this.user === ''){
        this.show1 = true
      }
      this.show2 = false;
    },
    onLogin() {
      if (this.user === "") {
        this.show1 = true;
      } else if (this.password == "") {
        this.show2 = true;
      } else {
        this.show1 = false;
        this.show2 = false;
      }
      
    },


  }
};
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 666px;
  background: #377eb4;
  .logo {
    padding: 100px 0;
  }

  .login {
    width: 100%;
    text-align: center;
    position: relative;
    input {
      width: 66%;
      text-align: center;
      border-radius: 20px;
      display: inline-block;
      margin-top: 30px;
      padding: 8px 0;
      border: none;
    }
    span {
      display: block;
      position: absolute;
      top: 69px;
      left: 137px;
      color: red;
      font-size: 12px;
    }
    .span2 {
      top: 137px;
    }
  }
}
</style>
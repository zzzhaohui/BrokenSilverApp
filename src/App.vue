<template>
  <div class="app">
    <!-- home -->
    <div v-show="showNav">
      <router-view />
      <van-tabbar v-model="active" v-if="footShow">
        <van-tabbar-item icon="home-o" to="/">Home</van-tabbar-item>
        <van-tabbar-item icon="search" dot to="/flow">flow</van-tabbar-item>
        <van-tabbar-item icon="contact" info="6" to="/About">About</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- login -->
    <div id="login" v-show="showLogin">
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
    </div>
  </div>
</template>

<script>
import login from "./views/Login";
export default {
  name: "app",
  data() {
    return {
      active: 0,
      footShow: true,
      show1: false,
      show2: false,
      user: "",
      password: "",
      showNav: true,
      showLogin: false
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      var state = this.$store.state.count;
      if (state === 2) {
        this.showNav = true;
        this.showLogin = false;
      }
    },
    // 登录的非空判断
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
        this.showNav = true;
        this.showLogin = false
      }
      
    }
  },
  
  watch: {
    // 监听路由变化
    $route(to, from) {
      console.log(from);
      // console.log(to.name)
      let ThisPage = to.name;
      if (
        ThisPage === "Transfer" ||
        ThisPage === "Capital" ||
        ThisPage === "Establish" ||
        ThisPage === "Approval" ||
        ThisPage === "EnterprisePurchasing" ||
        ThisPage === "ShareHolding" || 
        ThisPage === 'Detailed' ||
        ThisPage === 'Trans'
      ) {
        this.footShow = false;
      } else {
        this.footShow = true;
      }
    }
  },
  components: {
    login
  }
};
</script>


<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
}
#login{
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

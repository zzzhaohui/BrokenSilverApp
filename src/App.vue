<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" v-if="footShow">
      <van-tabbar-item icon="home-o" to="/">Home</van-tabbar-item>
      <van-tabbar-item icon="search" dot to="/flow">flow</van-tabbar-item>
      <van-tabbar-item icon="contact" info="6" to="/About">About</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0,
      footShow: true
    };
  },
   
watch: { // 监听路由变化
    $route (to, from) {
      console.log(from)
      // console.log(to.name)
      let ThisPage = to.name;
      if (ThisPage === 'Transfer' || ThisPage === 'Capital' || ThisPage === 'Establish' || ThisPage ==='Approval' || ThisPage === 'EnterprisePurchasing' || ThisPage ==='ShareHolding') {
        this.footShow = false;
      } else {
        this.footShow = true;
      }
    }
  }
};
</script>


<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: noen;
}
#app {
  width: 100%;
  height: 100%;

  #nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        list-style: none;
        a {
          padding: 6px;
          text-decoration: none;
        }
        .router-link-exact-active {
          background: red;
          border-radius: 6%;
        }
      }
    }
  }
}
</style>

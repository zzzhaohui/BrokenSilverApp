<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
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
    
    };
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

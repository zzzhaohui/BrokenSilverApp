<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/flow">Flow</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  list-style: noen;
}
#app{
  width: 100%;
  height: 100%;

  #nav{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li{
        list-style: none;
        a{
          padding: 6px;
          text-decoration: none;
        }
        .router-link-exact-active{
          background: red;
          border-radius: 6%;
        }
      }
    }
  }
}
</style>

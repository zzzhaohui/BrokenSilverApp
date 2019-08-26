<template>
  <div class="home">
    <div class="header">
      <div class="header-left">
        <h3>总资产</h3>
        <h5>99,999.00</h5>
      </div>
      <div class="header-right">
        <h5>图标</h5>
        <h5>付款</h5>
      </div>
    </div>
    <div class="conter"> 
        <ul>
          <li>创建</li>
          <li>审批</li>
          <li>企业采集</li>
          <li>全员持股</li>
        </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  .header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    background: #d3e4f8;
  }
  .conter{
    width: 100%;
    margin-top: 50px;
    text-align: center;
    ul{
      width: 100%;
      text-align: center;
      li{
        width: 60%;
        display: inline-block;
        margin: 10px 0;
        padding: 10px 0;
        background: #c0c0c0;
        border-radius: 20px;
      }
    }
  }
}
</style>
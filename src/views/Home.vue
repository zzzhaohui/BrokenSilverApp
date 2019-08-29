<template>
<!-- 我是首页 -->
  <div class="home">
    <div class="header">
      <div class="header-left" @click="onCapital">
        <h3>总资产</h3>
        <h5 class="capi">99,999.00</h5>
      </div>
      <div class="header-right" @click="onTransfer">
        <van-icon class="idcard" name="idcard" />
        <h5>付款</h5>
      </div>
      
    </div>
    <div class="conter"> 
        <ul>
          <li @click="onEstablish">创 &nbsp;&nbsp;建</li>
          <li @click="onApproval">审 &nbsp;&nbsp;批</li>
          <li @click="onEnterprisePurchasing">企业采集</li>
          <li @click="onShareHolding">全员持股</li>
        </ul>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      
    }
  },
  methods:{
    onCapital(){ //资金总览
      this.$router.push('/Capital')
    },
    onTransfer(){
      this.$router.push('/Transfer')
    },
    onEstablish(){  //创建审批
      this.$router.push('/Establish')
    },
    onApproval(){ //审批查看
      this.$router.push('/Approval')
    },
    onEnterprisePurchasing(){  //企业采集
      this.$router.push('/EnterprisePurchasing')
    },
    onShareHolding(){ //全员持股
      this.$router.push('/ShareHolding')
    }
  },
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
    background: #83aedf;
    h3{
      font-size: 20px;
    }
    .capi{
      margin-top: 10px;
    }
    .idcard{
      font-size: 30px;
    }
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
<template>
  <!-- 资金总览页面 -->
  <div class="capital">
    <div class="header">
      <van-button class="ret" @click="onRet" icon="arrow-left" type="primary" />
      <h3>资产总览</h3>
    </div>
    <Circular/>
  </div>
</template>

<script>
import Circular from './../components/capital/Circular'
export default {
  name: "capital",
  data() {
    return {
      
    };
  },
  methods: {
    onRet() {
      this.$router.go(-1);
    }
  },
  components: {
    Circular
  }
};
</script>

<style lang="less" scoped>
.capital {
  width: 100%;
  .header {
    width: 100%;
    .ret {
      color: #000000;
      background: #fff;
      border: none;
    }
    h3 {
      display: inline-block;
    }
  }
}
</style>
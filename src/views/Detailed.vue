<template>
  <!-- 资金详情页面 -->
  <div class="detailed">
    <div class="header">
      <van-button class="ret" @click="onRet" icon="arrow-left" type="primary" />
      <h3>资金详情</h3>
    </div>
    <!-- 图表的插入 -->
    <chart />
  </div>
</template>

<script>
//引入图表
import chart from "./../components/utils/Chart.vue";

export default {
  name: "detailed",
  data() {
    return {};
  },
  methods: {
    onRet() {
      this.$router.go(-1);
    }
  },
  components: {
    chart
  }
};
</script>

<style lang="less" scoped>
.detailed {
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
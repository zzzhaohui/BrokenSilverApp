<template>
  <!-- 资金详情页面 -->
  <div class="detailed">
    <div class="header">
      <van-button class="ret" @click="onRet" icon="arrow-left" type="primary" />
      <h3>资金详情</h3>
    </div>
    <div class="clear"></div>
    <!-- 图表的插入 -->
    <chart />

    <div class="conter">
      <ul>
        <li>
          <!-- 需要循环插入 -->
          <DeRecord/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//引入图表
import chart from "./../components/utils/Chart.vue";
//引入详情数据展示模块
import DeRecord from "./../components/detailed/DeRecord.vue";

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
    chart, //展示图表
    DeRecord //详情数据的展示
  }
};
</script>

<style lang="less" scoped>
.detailed {
  width: 100%;
  .header {
    width: 100%;
    position: fixed;
    background: #fff;
    z-index: 9999;
    .ret {
      color: #000000;
      background: #fff;
      border: none;
    }
    h3 {
      display: inline-block;
    }
  }
  .conter {
    width: 100%;
    
  }
  .clear{
    display: block;
    padding: 22px;
  }
}
</style>
<template>
  <!-- 转账汇款下面的列表 -->
  <div class="TransList">
    <div class="header">
      <div class="header1">{{ w.company }}</div>
      <div class="header2">{{ w.isState }}</div>
    </div>
    <div class="conter">
      <div>{{ w.rmb }}元</div>
    </div>
    <div class="footer">
      <div>{{ time }}</div>
      <div>当前处理人：{{ w.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransList",
  props: {
    list: {
      type: Object,
    }
  },
  data() {
    return {
      time: "",
      w: this.list
    };
  },
  mounted() {
    this.formatDate();
  },
  methods: {
    //时间格式的转换
    formatDate() {
      var dateee = new Date().toJSON();
      var date = new Date(+new Date(dateee) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
      this.time = date;
    }
  }
};
</script>

<style lang="less" scoped>
.TransList {
  width: 96%;
  background: #fff;
  display: inline-block;
  border-radius: 10px;
  font-size: 14px;
  .header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 8px 16px;
    .header1{
        font-weight: 700;
    }
    .header2{
        color: #9dd560;
    }
  }
  .conter{
      width: 100%;
      text-align: right;
      padding: 8px 16px;
      color: #ff6012;
  }
  .footer{
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 8px 16px;
      border-top: 1px solid #f2f2f2;
      color: #aeaeae;
  }
}
</style>
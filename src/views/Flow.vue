<template>
  <!-- 流程审查页面 -->
  <div class="flow">
    <div class="header">
      <van-nav-bar
        title="流程查看"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        fixed
      />
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Flow",
  data() {
    return {
      activeNames: ["1", "2"],
      fileList: []
    };
  },
  methods: {
    onClickLeft() {
      //   Toast("返回");
      this.$router.go(-1);
    },
    onClickRight() {
      //   Toast("按钮");
      alert("占未想好");
    }
  },
  
};
</script>

<style lang="less" scoped>
.flow {
  width: 100%;
  text-align: center;
  background: #d5d5d5;
  .header {
    .van-hairline--bottom {
      background: #597fae;
      i,
      span,
      div {
        color: #fff;
      }
    }
  }
}
</style>
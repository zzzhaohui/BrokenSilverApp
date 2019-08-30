<template>
  <!-- 资金总览页面 -->
  <div class="capital">
    <div class="header">
      <van-button class="ret" @click="onRet" icon="arrow-left" type="primary" />
      <h3>资产总览</h3>
    </div>
    <!-- 图表的插入 -->
    <chart/>
    <div class="conter">
      <h6>账户明细</h6>
      <div class="con1">
        <van-cell title="余额" is-link value="12,222.00" @click="onSeeBalance"/>
        <van-cell title="工商银行" is-link value="12,222.00" @click="showPopup" />
        <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '20%' }"
          get-container="#idCard"
          class="layer"
        > 
          <div class="option">
            <div @click="onTransfer">转账汇款</div>
            <div class="option-div1" @click="onSeeDetailed">收支明细</div>
            <div>购买理财</div>
          </div>
          <div class="cancel" @click="onCancel">取消</div>
        </van-popup>
        <van-cell title="建设银行" is-link value="0.00" />
        <van-cell title="报销" is-link value="0.00" />
        <van-cell title="理财" is-link value="0.00" />
      </div>
    </div>
  </div>
</template>

<script>
//引入图表
import chart from './../components/utils/Chart.vue'

export default {
  name: "capital",
  data() {
    return {
      show: false
    };
  },
  methods: {
    onRet() {
      this.$router.go(-1);
    },
    //打开弹出层
    showPopup() {
      this.show = true;
    },
    //关闭弹出层
    onCancel(){
      this.show = false
    },
    //转账汇款
    onTransfer() {
      this.$router.push("/Transfer");
    },
    //余额查看
    onSeeBalance(){
      alert('余额查看')
    },
    //查看详细
    onSeeDetailed(){
      this.$router.push('/detailed')
    }
    
  },
  components: {
    chart
  }
};
</script>

<style lang="less" scoped>
.capital {
  width: 100%;
  // background: #d5d5d5;
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
   .conter {
    text-align: center;
    background: #f9f7f8;
    h6{
      padding: 8px 0;
    }
    .con1 {
      text-align: left;
      .layer {
        width: 100%;
        height: 24% !important;
        text-align: center;
        background: #4c4c4c;

        .option{
          width: 96%;
          display: inline-block;
          border-radius: 10px;
          background: #fff;
          div{
            width: 100%;
            padding: 10px 0;
          }
          .option-div1{
            border-top: #c6c6c6 1px solid; 
            border-bottom: #c6c6c6 1px solid; 
          }
        }
        .cancel{
          width: 96%;
          margin-top: 10px;
          display: inline-block;
          border-radius: 10px;
          background: #fff;
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
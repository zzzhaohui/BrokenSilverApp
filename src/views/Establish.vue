<template>
  <!-- 流程审查页面 -->
  <div class="Establish">
    <div class="header">
      <van-nav-bar
        title="新建报销"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        fixed
      />
    </div>
    <br>
    <br>
    <br>
    <div class="conter">
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1" class="con1">
          <div slot="title">
            <span>
              报销类型
              <i>*</i>
            </span>
            <span>报销单</span>
          </div>
          <p class="p1">报销单号：45454564646464646</p>
          <p class="p2">2019年07月田客报销</p>
        </van-collapse-item>
        <van-collapse-item disabled name="2" class="con2">
          <div slot="title">
            <span>01</span>
          </div>

          <ul>
            <li>
              <van-cell value="请选择" is-link>
                <template slot="title">
                  <span class="custom-title">成本中心</span>
                </template>
              </van-cell>
            </li>
            <li>
              <van-cell value="请选择" required is-link>
                <template slot="title">
                  <span class="custom-title">报销科目</span>
                </template>
              </van-cell>
            </li>
            <li>
              <van-cell value="2019-07-09" required>
                <template slot="title">
                  <span class="custom-title">生产时间</span>
                </template>
              </van-cell>
            </li>
            <li>
              <van-cell value="请选择" required>
                <template slot="title">
                  <span class="custom-title">报销金额</span>
                </template>
              </van-cell>
            </li>
            <li>
              <!-- Remarks(备注) -->
              <van-panel title="备注">
                <textarea name id="rTextarea" cols="43" rows="5" placeholder="输入该明细的详情备注（限300字）"></textarea>
              </van-panel>
            </li>
            <li>
              <van-panel title="图片">
                <van-uploader v-model="fileList" multiple :max-count="6" />
              </van-panel>
            </li>
            <li class="con8">
              <van-uploader>
                <van-button type="primary">+点击添加报销明细</van-button>
              </van-uploader>
            </li>
            <li>
              <van-panel title="明细费用">
                <textarea name id cols="43" rows="5" placeholder="输入该明细的详情备注（限300字）"></textarea>
              </van-panel>
            </li>
            <li>
              <van-panel title="图片">
                <van-uploader v-model="fileList" multiple :max-count="6" />
              </van-panel>
            </li>
            <li class="con11">
              <van-uploader>
                <van-button type="primary">+点击添加报销明细</van-button>
              </van-uploader>
            </li>
            <li>
              <van-cell-group>
                <van-cell title="费用明细" />
                <van-cell-group>
                  <van-cell title="明细总计" value="￥0.00" />
                  <!-- <van-cell title="明细总计" value="￥0.00" /> -->
                  <!-- <van-cell title="1明细" /> -->
                </van-cell-group>
              </van-cell-group>
            </li>
            <li class="con12">
              <van-uploader>
                <van-button type="primary">+点击添加报销明细</van-button>
              </van-uploader>
            </li>
            <li class="con13">
              <van-cell value="button" required>
                <template slot="title">
                  <span class="custom-title">审批人</span>
                </template>
              </van-cell>
              <van-uploader>
                <van-button type="primary">+点击添加报销明细</van-button>
              </van-uploader>
            </li>
            <li class="con14">
              <van-cell value="button">
                <template slot="title">
                  <span class="custom-title">相关人</span>
                </template>
              </van-cell>
              <van-uploader>
                <van-button type="primary">+点击添加报销明细</van-button>
              </van-uploader>
            </li>
          </ul>
          <div class="btnSend">
            <div class="sendBtn">
            <van-button color="#f4f6f8">保存草稿</van-button>
            <van-button class="BtnTwo" color="#5585f0">提交</van-button>
          </div>
          </div>
          
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "Establish",
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
.Establish {
  width: 100%;
  text-align: center;
  background: #f9f7f8;
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
  .van-panel__header-value {
    span {
      color: #b0b0b0;
    }
  }
  #rTextarea {
    color: black;
  }
  .conter {
    width: 96%;
    //   border: 1px solid red;
    display: inline-block;
    text-align: left;
    font-size: 14px;
    
    .con1 {
      div {
        display: flex;
        justify-content: space-between;
        i {
          color: red;
        }
      }
    }
    .con5 {
      span {
        font-size: 12px;
      }
    }
    .con8,
    .con11,
    .con12,
    .con13,
    .con14 {
      width: 100%;
      text-align: center;
      background: rgb(248,248,248);
      // border-radius: 10px;
      // border: 1px solid red;
      button {
        width: 100%;
        border: none;
        color: #569ccf;
        background: rgb(248,248,248);
        // border-radius: 5%;
      }
    }
    .con13,
    .con14 {
      .van-cell__title {
        text-align: left;
      }
    }
  }
  .btnSend{
    // width: 100%;
    // position: fixed;
    // bottom: 10px;
    // left: 0;
    .sendBtn{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    button{
      padding: 0 36px;
      border-radius: 18px;
      span{
        color: black;
      }
    }
    .BtnTwo{
      padding: 0 50px;
      span{
        color: #fff;
      }
    }
  }
  }
  .con2,
  .con13,
  .con14 {
      margin-top: 8px;
    }
}
</style>
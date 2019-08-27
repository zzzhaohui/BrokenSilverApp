<template>
  <!-- 流程审查页面 -->
  <div class="flow">
    <div class="header">
      <van-nav-bar
        title="新建报销"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
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
        <van-collapse-item name="2" class="con2">
          <div slot="title">
            <span>01</span>
          </div>

          <ul>
            <li>
              <van-collapse-item name="3" class="con3">
                <div slot="title">
                  <span>成本中心</span>
                </div>
                <div slot="value">请选择</div>
              </van-collapse-item>
            </li>
            <li>
              <van-collapse-item name="4" class="con4">
                <div slot="title">
                  <span>
                    报销科目
                    <i>*</i>
                  </span>
                </div>
                <div slot="value">请选择</div>
              </van-collapse-item>
            </li>
            <li>
              <van-collapse-item name="5" class="con5">
                <div slot="title">
                  <span>
                    报销类型
                    <i>*</i>
                  </span>
                  <span>2019年-07-24至2019-07-24</span>
                </div>
              </van-collapse-item>
            </li>
            <li>
              <van-collapse-item name="6" class="con6">
                <div slot="title">
                  <span>备注</span>
                </div>
                <textarea name id cols="30" rows="10"></textarea>
                <div slot="right-icon"></div>
              </van-collapse-item>
            </li>
            <li>
              <van-collapse-item name="7" class="con7">
                <div slot="title">图片</div>
                <van-uploader v-model="fileList" multiple :max-count="6" />
              </van-collapse-item>
            </li>
            <li class="con8">
              <van-uploader>
                <van-button type="primary">+点击添加报销明细</van-button>
              </van-uploader>
            </li>
            <li>
              <van-collapse-item name="8" class="con9">
                <div slot="title">明细费用</div>
                <textarea name id cols="30" rows="10" placeholder="输入该明细的详情备注（限300字）"></textarea>
              </van-collapse-item>
            </li>
            <li>
              <van-collapse-item name="9" class="con10">
                <div slot="title">图片</div>
                <van-uploader v-model="fileList" multiple :max-count="6" />
              </van-collapse-item>
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
                  <van-cell title="1明细" />
                </van-cell-group>
              </van-cell-group>
            </li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flow",
  data() {
    return {
      activeNames: ["1"],
      accordion: true,
      disabled: true,
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
  }
};
</script>

<style lang="less" scoped>
.flow {
  width: 100%;
  text-align: center;
  .header {
    .van-hairline--bottom {
      background: #2c8fba;
      i,
      span,
      div {
        color: #fff;
      }
    }
  }
  .conter {
    width: 94%;
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
    .con11 {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
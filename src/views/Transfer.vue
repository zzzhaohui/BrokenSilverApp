<template>
  <!-- 转账页面 -->
  <div class="transfer">
    <div class="header">
      <van-nav-bar
        title="转账"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        fixed
      />
    </div>
    <br />
    <br />
    <br />
    <div class="conter">
      <div class="con1">
        <ul>
          <li>
            <van-cell>
              <template slot="title">
                <span class="custom-title">收款人</span>
                <!-- <van-tag type="danger">标签</van-tag> -->
              </template>
            </van-cell>
          </li>
          <li>
            <div class="van-cell van-cell--clickable">
                <div class="van-cell__title">
                    <span class="custom-title">户名</span>
                </div>
                <div class="van-cell__value">
                    <input type="text" placeholder="请输入收款人姓名">
                </div>
                <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
            </div>
          </li>
          <li>
            <div class="van-cell van-cell--clickable">
                <div class="van-cell__title">
                    <span class="custom-title">账号</span>
                </div>
                <div class="van-cell__value">
                    <input type="text" placeholder="请输入收款人账号">
                </div>
                <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
            </div>
          </li>
          <li>
              <!-- <div class="van-cell" @click="onSele">
                  <div class="van-cell__title">
                      <span class="custom-title">银行</span>
                  </div>
                  <div class="van-cell__value" >
                      <span>选择银行</span>
                  </div>
                  <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
              </div> -->
            <van-cell value="请选择银行" is-link clickable @click="onSele">
              <template slot="title">
                <span class="custom-title">银行</span>
              </template>
            </van-cell>
          </li>
        </ul>
      </div>
      <div class="con2">
        <ul>
          <li>
            <van-cell>
              <template slot="title">
                <span class="custom-title">转账金额</span>
                <div>￥0手续费</div>
              </template>
            </van-cell>
          </li>
          <li>
            <div class="van-cell van-cell--clickable">
              <div class="van-cell__title">
                <span class="custom-title">付款卡</span>
              </div>
              <div class="van-cell__value" @click="onChoiceBank">
                <span>招商银行（7456）</span>
                <div>余额￥0.00</div>
              </div>
              <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
            </div>
          </li>
        </ul>
      </div>
      <div class="con3">
        <ul>
          <li>
            <div class="van-cell van-cell--clickable">
              <div class="van-cell__title">
                <span class="custom-title">短信通知</span>
              </div>
              <div class="van-cell__value">
                <span>可不填</span>
              </div>
              <i class="van-icon van-icon-friends-o van-cell__right-icon"></i>
            </div>
          </li>
        </ul>
      </div>
      <div class="con4">
        <ul>
          <li>
            <div class="van-cell van-cell--clickable">
              <div class="van-cell__title">
                <span class="custom-title">
                  附&nbsp;&nbsp;件 <p>点击添加附件</p>
                  <div>
                      <i class="van-icon van-icon-friends-o van-button__icon"></i>
                      <input type="file" accept="image/*" class="van-uploader__input" name id />
                  </div>
                </span>
                <div>提示：若是公转私请上传相关电子证明材料</div>
              </div>
            </div>
          </li>
          <li>
              <div class="van-cell van-cell--clickable">
                  <div class="van-cell__title">
                      <span class="">用途</span>
                  </div>
                  <div class="van-cell__value" @click="onAdd">
                      <span>请输入文字</span>
                  </div>
                  <i class="van-icon van-icon-arrow-down van-cell__right-icon" @click="onAdd"></i>
              </div>
          </li>
        </ul>
      </div>
      <van-button class="btnSubmi" round type="danger" color="#017ef4">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transfer",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      alert("暂未定义");
    },
    onSele(){ //选择银行 
        alert('选择银行')
    },
    onChoiceBank(){ //付款卡
        alert('选择付款卡')
    },
    onAdd(){ //用途说明
        alert('用途说明')
    }
  },
 
};
</script>

<style lang="less" scoped>
.transfer {
  width: 100%;
  .header {
    width: 100%;
    div,span,i{
        // background: #f8f8f8;
    background: #597fae;
    color: #fff;
    }
  }
  .conter {
    width: 100%;
    text-align: center;
    background: #f8f8f8;
    .con1 {
      width: 96%;
      display: inline-block;
      ul {
        li {
          .van-cell__title {
            text-align: left;
          }
          .van-cell__value{
                input{
                    text-align: center;
                    border: none;
                }
            }
        }
      }
    }
    .con2 {
      width: 96%;
      display: inline-block;
      margin-top: 8px;
      ul {
        li {
          .van-cell__title {
            text-align: left;
          }
          .van-cell__label {
            text-align: right;
          }
        }
      }
    }
    .con3 {
      width: 96%;
      display: inline-block;
      margin-top: 8px;
      ul {
        li {
          .van-cell__title {
            text-align: left;
          }
        }
      }
    }
    .con4 {
      width: 96%;
      display: inline-block;
      margin-top: 8px;
      ul {
        width: 100%;
        li {
          width: 100%;
          .van-cell__title {
            width: 100%;
            text-align: left;
            span {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              p{
                  margin-right: 126px 
              }
            }
          }
          .van-cell__value{
              text-align: left;
              margin-right: 166px;
          }
        }
      }
    }
    .btnSubmi{
        margin-top: 10px;
        width: 90%;
    }
  }
}
</style>
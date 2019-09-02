<template>
  <!-- 转账页面 -->
  <div class="trans">
    <div class="header">
      <van-button class="ret" @click="onRet" icon="arrow-left" type="primary" />
      <h3>转账汇款</h3>
    </div>
    <div class="clear"></div>
    <div class="conter">
      <div class="con1">
        <div>我的申请</div>
        <div>我的处理</div>
      </div>
      <div class="con2">
        <ul>
          <li :class="{ active: isActive1 }" @click="onChange('已办结')">已办结</li>
          <li :class="{ con2_li2,active: isActive2  }" @click="onChange('处理中')">处理中</li>
          <li :class="{ active: isActive3 }" @click="onChange('已退款')">已退款</li>
        </ul>
      </div>
      <!-- con2切换展示的内容，并传递数据给子组件 -->
      <div class="con3">
        <ul>
          <li v-for="w in listArr" :key="w.id">
            <TransList :list="w"></TransList>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//引入展示列表
import TransList from "./../components/trans/TransList.vue";

export default {
  name: "Trans",
  data() {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false,
      con2_li2: true,
      listArr: [],
      listArr1: [
        {
          id: 1,
          company: "益达成都xxxxxx",
          isState: "完成",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 2,
          company: "益达成都xxxxxx",
          isState: "完成",
          rmb: "10,1000.00",
          name: "汪xxx"
        },
        {
          id: 3,
          company: "益达成都xxxxxx",
          isState: "完成",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 4,
          company: "益达成都xxxxxx",
          isState: "完成",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 5,
          company: "益达成都xxxxxx",
          isState: "完成",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 6,
          company: "益达成都xxxxxx",
          isState: "完成",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 7,
          company: "益达成都xxxxxx",
          isState: "完成",
          rmb: "10,1000.00",
          name: "何xxx"
        }
      ],
      listArr2: [
        {
          id: 1,
          company: "益达日本xxxxxx",
          isState: "处理中",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 2,
          company: "益达日本xxxxxx",
          isState: "处理中",
          rmb: "10,1000.00",
          name: "汪xxx"
        },
        {
          id: 3,
          company: "益达日本xxxxxx",
          isState: "处理中",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 4,
          company: "益达日本xxxxxx",
          isState: "处理中",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 5,
          company: "益达日本xxxxxx",
          isState: "处理中",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 6,
          company: "益达日本xxxxxx",
          isState: "处理中",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 7,
          company: "益达日本xxxxxx",
          isState: "处理中",
          rmb: "10,1000.00",
          name: "何xxx"
        }
      ],
      listArr3: [
        {
          id: 1,
          company: "益达哈哈xxxxxx",
          isState: "已退款",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 2,
          company: "益达哈哈xxxxxx",
          isState: "已退款",
          rmb: "10,1000.00",
          name: "汪xxx"
        },
        {
          id: 3,
          company: "益达哈哈xxxxxx",
          isState: "已退款",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 4,
          company: "益达哈哈xxxxxx",
          isState: "已退款",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 5,
          company: "益达哈哈xxxxxx",
          isState: "已退款",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 6,
          company: "益达哈哈xxxxxx",
          isState: "已退款",
          rmb: "10,1000.00",
          name: "何xxx"
        },
        {
          id: 7,
          company: "益达哈哈xxxxxx",
          isState: "已退款",
          rmb: "10,1000.00",
          name: "何xxx"
        }
      ]
    };
  },
  mounted() {
    this.onChange("已办结");
  },
  methods: {
    //返回上一页面
    onRet() {
      this.$router.go(-1);
    },
    //点击切换的时候改变style
    onChange(v) {
      switch (v) {
        case "已办结":
          this.listArr = "";
          this.isActive1 = true;
          this.isActive2 = false;
          this.isActive3 = false;

          this.listArr = this.listArr1;
          break;
        case "处理中":
          this.listArr = "";
          this.isActive2 = true;
          this.isActive3 = false;
          this.isActive1 = false;

          this.listArr = this.listArr2;
          break;
        case "已退款":
          this.listArr = "";
          this.isActive3 = true;
          this.isActive2 = false;
          this.isActive1 = false;

          this.listArr = this.listArr3;
          break;
      }
    }
  },
  components: {
    TransList
  }
};
</script>

<style lang="less" scoped>
.trans {
  width: 100%;
  background: #f8f8f8;
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
  .clear {
    display: block;
    padding: 22px;
  }
  .con1 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 30px 0;
  }
  .con2 {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      li {
        width: 100%;
        text-align: center;
        padding: 4px 0;
      }
      .con2_li2 {
        border-left: 1px solid #e2e5ea;
        border-right: 1px solid #e2e5ea;
      }
      .active {
        border-bottom: 2px solid #007df2;
        color: #007df2;
      }
    }
  }
  .con3 {
    width: 100%;
    ul {
      width: 100%;
      li {
        width: 100%;
        margin-top: 6px;
        text-align: center;
      }
    }
  }
}
</style>
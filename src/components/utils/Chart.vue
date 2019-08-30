<template>
  <div class="Chart">
    <div id="chart_example"></div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  data() {
    return {};
  },
  mounted() {
      this.onLoad()
  },
  methods: {
    onLoad() {
      let this_ = this;
      let myChart = this.$echarts.init(
        document.getElementById("chart_example")
      );
      let option = {
        title: {
          text: "资金总览",
          subtext: "如下",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          bottom: 10,
          left: "center"
          // data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        //圆形图表的占比
        series: [
          {
            name: "具体消费",
            type: "pie",
            radius: ["30%", "50%"],
            innerSize: "50%",
            avoidLabelOverlap: false,
            center: ["50%", "53%"],
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "18",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "车费报销" },
              { value: 310, name: "餐饮报销" },
              { value: 234, name: "联盟广告" }
            ]
          }
        ]
      };

      myChart.setOption(option);
      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  }
};
</script>

<style lang="less" scoped>
.Chart {
  width: 100%;
  #chart_example {
    width: 100%;
    height: 350px;
    // border: 1px solid red;
    margin: 0 auto;
  }
}
</style>
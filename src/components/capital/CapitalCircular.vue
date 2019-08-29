<template>
  <div class="circular">
    <div id="myChart" :style="{width: '300px',height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name: "Circular",
  data() {
    return {
      msg: "Welcome to Your"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["总资金", "邮件营销"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
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
              { value: 335, name: "总资金"},
              { value: 310, name: "" },
            ]
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
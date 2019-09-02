<template>
  <div class="deRecord">
    <div class="time">
        <ul>
            <!-- <li>日期</li> 
            <li><a href="">刷新</a></li> -->
        </ul>
    </div>
    <ul>
      <li>
        <van-cell-group>
          <van-cell v-for="(v,i) in dataArr" :key="i" :title="v.title" :value="v.value" :label="time"/>
        </van-cell-group>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "deRecord",
  data() {
    return {
      time: "",
      dataArr: [
          {id: '1',title: '成都xxxxx公司',value: '-1500',label: this.time},
          {id: '2',title: '成都xxxxx公司',value: '-656',label: this.time},
          {id: '3',title: '成都xxxxx公司',value: '-325',label: this.time},
          {id: '4',title: '成都xxxxx公司',value: '-5879',label: this.time},
          {id: '5',title: '成都xxxxx公司',value: '-1500',label: this.time},
          {id: '6',title: '成都xxxxx公司',value: '-1500',label: this.time},
          {id: '7',title: '成都xxxxx公司',value: '-1500',label: this.time},
          {id: '8',title: '成都xxxxx公司',value: '-1500',label: this.time},
          {id: '9',title: '成都xxxxx公司',value: '-1500',label: this.time},
          {id: '10',title: '成都xxxxx公司',value: '-1500',label: this.time},
      ]
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
        this.time = date
    }
  }
};
</script>

<style lang="less" scoped>
.deRecord {
  width: 100%;
  .time {
    width: 100%;
    background: #f9f7f8;
    ul{
        display: flex;
        justify-content: space-between;
        padding: 8px 16px;
        font-size: 14px;
        color: #000;
        a{
            color: #000;
        }
    }

  }
}
</style>
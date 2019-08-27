<template>
<!-- 我是创建审批的页面 -->
    <div class="capital">
        <van-button class="ret" @click="onRet" icon="arrow-left" type="primary" />
        我是创建审批的页面
    </div>
</template>

<script>
export default {
    name: 'capital',
    data(){
        return {

        }
    },
    methods: {
        onRet() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
.capital{
    width: 100%;
    .ret {
      color: #000000;
      background: #fff;
      border: none;
    }
}
</style>
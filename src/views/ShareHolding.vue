<template>
<!-- 我是全员持股页面 -->
    <div class="approval">
        <van-button class="ret" @click="onRet" icon="arrow-left" type="primary" />
        我是全员持股页面
    </div>
</template>

<script>
export default {
    name: 'ShareHolding',
    methods: {
        onRet() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
.ret {
      color: #000000;
      background: #fff;
      border: none;
    }
</style>
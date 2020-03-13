<template>
  <div class="goods-card">
    <div class="bg-text">
      {{info.comment}}
    </div>
    <div class="goods w-flex">
      <img :src="info.images" />
      <div class="goods-info">
        <div class="title">{{info.title}}</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsCard',
    props: {
      info: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-card {
    height: 430px; padding-top: 56px; position: relative;
    .bg-text {
      position: absolute; top: -20px; right: 0; width: 150px; color: #3E3A39; opacity: .3; z-index: 10;
    }
    .goods {
      align-items: center;
      img {
        width: 410px; height: 307px; border-radius: 4px;
      }
      .goods-info {
        background: #fff; width: 448px; height: 275px; right: 0; position: absolute; box-shadow:0px 0px 40px 0px rgba(165,165,165,0.1);
      }
    }
  }
</style>

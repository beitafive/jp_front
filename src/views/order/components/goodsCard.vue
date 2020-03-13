<template>
  <div class="goods-card">
    <div class="goods-info w-flex">
      <img src="" />
      <div class="goods-right">
        <div class="title">标题</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsCard'
  }
</script>

<style scoped lang="scss">
  .goods-card {
    width: 430px; box-sizing: border-box; padding: 20px 20px; background: #F9F9F9; height: 200px; background: #F9F9F9;
    .goods-info {
      align-items: center;
      img {
        width: 100px; height: 100px; margin-right: 12px;
      }
      .goods-right {
        .title {
          color: #3E3A39; font-size: 16px;
        }
      }
    }
  }
</style>

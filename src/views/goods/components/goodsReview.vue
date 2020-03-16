<template>
  <div class="goods-review">
    <img src="" class="review" />
    <div class="review-operate">
      <div class="review-img-box" :style="{width: list.length * 144 +'px'}">
        <img v-for="(item, index) in list" :key="index" :src="item" @click="callIndex(index)" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsReview',
    props: {
      list: {
        type: Array,
        default () {
          return [1,2,3]
        }
      },
      index: {
        type: Number,
        default () {
          return 0
        }
      }
    },
    methods: {
      callIndex (index) {
        this.$emit('callback', index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-review {
    .review {
      width: 440px; height: 440px;
    }
    .review-operate {
      width: 440px; height: 138px; overflow: auto; margin-top: 8px;
      .review-img-box {
        img {
          width: 136px; height: 136px; margin-right: 8px; line-height: 0;
        }
      }
    }
  }
</style>

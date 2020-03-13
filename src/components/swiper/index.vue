<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in list" :key="index">
        <img :src="item.image_url" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import swiper from 'swiper'
  export default {
    name: 'index',
    data () {
      return {
        list: [],
        mySwiper: {}
      }
    },
    mounted () {
      this.getBanner()
    },
    methods: {
      initSwiper () {
        this.mySwiper = new swiper('.swiper-container',{
          direction: 'vertical',
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      },
      getBanner () {
        this.$http(this.$api.banner).then(res => {
          // eslint-disable-next-line no-console
          if (res) {
            this.list = res.data.list
            setTimeout(() => {
              this.initSwiper()
            }, 300)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .swiper-container {
    width: 870px; height: 250px;
  }
  img {
    width: 870px; height: 250px;
  }
</style>
<style>
  .swiper-pagination-bullet-active { background: #fff;}
</style>

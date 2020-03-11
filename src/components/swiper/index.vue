<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">1</div>
      <div class="swiper-slide">2</div>
      <div class="swiper-slide">3</div>
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
      this.initSwiper()
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
      getList () {

      }
    }
  }
</script>

<style scoped lang="scss">
  .swiper-container {
    width: 870px; height: 250px; background: #42b983;
  }
</style>
<style>
  .swiper-pagination-bullet-active { background: #fff;}
</style>

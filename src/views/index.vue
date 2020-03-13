<template>
  <div class="w-index">
    <w-header />
    <router-view />
    <w-footer />
  </div>
</template>

<script>
  import { wHeader, wFooter } from '@/components'
  export default {
    name: 'index',
    components: {
      wHeader,
      wFooter
    },
    data () {
      return {
        now: ''
      }
    },
    mounted () {
      window.onscroll = () => {
        let scrollTop = ''
        if(document.documentElement&&document.documentElement.scrollTop){
          scrollTop=document.documentElement.scrollTop;
        }else if(document.body){
          scrollTop=document.body.scrollTop;
        }
        this.$store.dispatch('setScrollTop', scrollTop)
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .w-index {
    width: 1200px; margin: 0 auto;
  }
</style>

<template>
  <div class="choose-lang" @mouseleave="show=false" :style="{ background: show ? '#fff': '' }">
    <div class="show-view" @mouseenter="show=true">
      <span>{{showLang}}</span>
      <i class="iconfont icon-xiayige" :style="{ transform: show ? 'rotate(270deg) scale(.8)' : '' }"></i>
    </div>
    <div class="select-list" v-show="show">
      <div class="select-item" v-for="(item, index) in list" :key="index" @click="chooseLang(item)"> {{item.name}} </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'choose-lang',
    data () {
      return {
        show: false,
        showLang: localStorage.langName || '日 文',
        list: [ { name: '中 文', value: 'zh' }, { name: '日 文', value: 'ja' }]
      }
    },
    mounted () {
      // eslint-disable-next-line no-console
      console.log(this.$i18n.locale)
    },
    methods: {
      chooseLang (item) {
        localStorage.lang = item.value
        localStorage.langName = item.name
        this.$i18n.locale = item.value
        this.showLang = item.name
        this.show = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .choose-lang {
    width: 124px; position: relative;  cursor: pointer;
    .show-view {
      height: 55px; line-height: 55px;
      span {
        margin-right: 15px; display: inline-block;
      }
      .icon-xiayige {
        display: inline-block; font-size: 12px; transform: rotate(90deg) scale(.8);
      }
    }
    .select-list {
      position: absolute; top: 55px; left: 0; width: 124px; z-index: 10000; background: #fff;
      .select-item {
        height: 32px; line-height: 32px;
      }
      .select-item:hover {
        background: #FF575E;
        color: #fff;
      }
    }
  }
</style>

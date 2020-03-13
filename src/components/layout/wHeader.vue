<template>
  <div class="w-header w-flex">
    <div class="title-and-operate w-flex" :style="{ background: scrollTop > 55 ? '#fff': '#FDF8F8' }">
      <img src="@/assets/img/header_logo.png" class="logo" v-if="scrollTop >= 150 || $route.path === '/order'" />
      <div class="titles" v-for="(item) in titles" :key="item">{{item}}</div>
      <choose-lang />
      <i :class="['iconfont', 'operate-icon', item.className]" v-for="(item, index) in operateIcon" :key="index" @click="handleIcon(item)"></i>
    </div>
    <div class="store-card-div">
      <img src="@/assets/img/store_card.png" class="store-card">
    </div>
    <div class="content w-flex" v-show="$route.path !== '/order'">
      <img src="@/assets/img/header_logo.png" class="logo" />
      <div class="content-right w-flex">
        <div class="title-and-operate-div"></div>
        <w-swiper />
        <div class="desc w-flex">
          <span v-for="(item) in desc" :key="item">{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import wSwiper from '../swiper'
  import chooseLang from '../common/choose-lang'
  export default {
    name: 'wHeader',
    data () {
      return {
        name: '',
        titles: '镜月着物レンタル',
        desc: 'LUNA镜月着物レンタル',
        operateIcon: [
          { className: 'icon-facebook', link: '' },
          { className: 'icon-ins', link: '' },
          { className: 'icon-weibo', link: '' },
          { className: 'icon-line', link: '' },
          { className: 'icon-youjian', link: '' }
        ]
      }
    },
    computed: {
      scrollTop () {
        return this.$store.getters.getScrollTop
      }
    },
    components: {
      wSwiper,
      chooseLang
    },
    methods: {
      handleIcon (item) {
        window.open(item.link)
      }
    }
  }
</script>

<style scoped lang="scss">
  .w-header {
    font-size:12px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(62,58,57,1);
    color: #3E3A39;
    justify-content: space-between;
    .title-and-operate {
      width: 1100px;
      margin-left: 100px;
      height: 55px;
      align-items: center;
      justify-content: flex-end;
      background: #fff;
      position: fixed;
      z-index: 1000;
      .titles {
        margin-right: 60px;
      }
      .operate-icon {
        margin-left: 17px; font-size: 16px; cursor: pointer; color: #000;
      }
      .operate-icon:hover {
        opacity: 0.5;
      }
    }
    .logo {
      width: 150px; height: 50px; margin: 0 45px 0 35px;
    }
    .store-card-div {
      width: 43px; height: 230px; padding-top: 20px; position: relative;
      .store-card {
        width: 43px; height: 230px;
      }
    }
    .content {
      width: 1100px; height: 365px; background: #FDF8F8; align-items: center;

      .content-right {
        height: 100%;
        flex-direction: column;
        .title-and-operate-div { flex: 1; }
        .desc {
          height: 60px; align-items: center;justify-content: space-between; font-size:12px; font-family:PingFangSC-Regular,PingFang SC;
          span {
            width: 18px;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="goods-page w-flex">
    <goods-nav @callback="getInfo" />
    <div class="goods-info w-flex">
      <goods-review />
      <div class="goods">
        <div class="title">{{info.title}}</div>
        <div class="small-title">Lunaプラン</div>
        <div class="desc">{{info.comment}}</div>
        <div class="content">
          <div class="content-title">{{$t('goods.service_content')}}</div>
          <div class="content-title">· {{$t('goods.goods_content')}}</div>
          <div class="infos">{{info.server_description}}</div>
          <div class="content-title">· {{$t('goods.service_content')}}</div>
          <div class="infos">{{info.description}}</div>
          <div class="pre-btn" @click="$router.push('/order/' + info.id)">{{$t('index.now_pre')}}</div>
        </div>
        <div class="tips">{{$t('goods.tips')}}</div>
        <div class="goods-price">
          <div class="price-title">{{$t('goods.fee')}}</div>
          <div class="price-box w-flex">
            <span>¥{{info.price}}({{$t('goods.tax')}})</span>
            <img src="@/assets/img/sale.png" />
            <span>¥{{info.price}}({{$t('goods.tax')}})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { goodsNav, goodsReview } from './components'
  export default {
    name: 'list',
    data () {
      return {
        info: {},
        index: 0
      }
    },
    components: {
      goodsNav,
      goodsReview
    },
    mounted () {
      this.getInfo()
    },
    methods: {
      getInfo () {
        this.index = 0
        this.$http(this.$api.goods.detail,{
          id: this.$route.params.id
        }).then(res => {
          this.info = res.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-page {
    padding-top: 30px;
    .goods-info {
      width: 838px;
      margin-left: auto;
      .goods {
        flex: 1; margin-left: 12px; text-align: left; padding-top: 32px;
        .title {
          font-size: 24px; color: #3E3A39; padding-left: 12px;
        }
        .small-title {
          font-size: 14px; color: rgba(62,58,57,.6); margin: 5px 0 10px; padding-left: 12px;
        }
        .desc {
          font-size: 12px; color: rgba(19,19,19, .7); padding-left: 12px;
        }
        .content {
          background: #F9F9F9; padding: 2px 12px 12px; margin: 12px 0 8px; position: relative;
          .content-title {
            color: #131313; font-size: 14px; margin: 10px 0 5px;
          }
          .infos {
            color: rgba(19,19,19,.7); font-size: 14px;
          }
          .pre-btn {
            width: 68px; height: 68px; cursor: pointer; font-size: 14px; line-height: 18px; box-sizing: border-box; padding: 16px 20px; position: absolute; bottom: 25px; right: 0; background: #FF575E; border-radius: 100%; color: #fff;
          }
        }
        .tips {
          margin: 20px 0;
        }
        .goods-price {
          background: #F9F9F9; padding: 12px;
          .price-title {
            color: #131313; font-size: 14px; margin-bottom: 12px;
          }
          .price-box {
            align-items: center; font-size: 14px;
            img {
              width: 30px; margin: 0 6px;
            }
            span:nth-of-type(1) {
              color: rgba(62,58,57,.6); text-decoration: line-through;
            }
            span:nth-of-type(2) {
              color: #FF575E; font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>

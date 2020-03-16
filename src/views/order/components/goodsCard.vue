<template>
  <div class="goods-card">
    <div class="goods-info w-flex">
      <img :src="info.images" />
      <div class="goods-right">
        <div class="title">{{info.title}}</div>
        <div class="price">¥{{info.price}}({{$t('goods.tax')}})</div>
        <div class="price-box w-flex">
          <img src="@/assets/img/sale.png" />
          <span>¥{{info.price}}({{$t('goods.tax')}})</span>
        </div>
        <div class="goods-detail" @click="$router.push('/goods/'+info.id)">
          {{$t('index.goods_detail')}}
          <i class="iconfont icon-xiayige"></i>
        </div>
      </div>
    </div>
    <div class="goods-label">{{$t('order.pre_time')}}</div>
    <div class="goods-value">
      {{ !times.date || !times.time ? $t('order.select_pre_time') : times.date + ' ' + times.time}}
    </div>
    <div class="goods-label">{{$t('goods.goods_content')}}</div>
    <div class="goods-value">
      {{ info.description }}
    </div>
    <div class="goods-label">{{$t('goods.service_content')}}</div>
    <div class="goods-value">
      {{ info.server_description}}
    </div>
    <div class="goods-label">{{$t('order.contact')}}</div>
    <div class="goods-value">
      {{ contact ? contact : $t('order.contact_tips')}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsCard',
    data () {
      return {
        info: {}
      }
    },
    props: {
      times: {
        type: Object,
        default () {
          return {
            date: '',
            time: ''
          }
        }
      },
      contact: {
        type: String
      }
    },
    mounted () {
      this.getInfo()
    },
    methods: {
      getInfo () {
        this.$http(this.$api.goods.detail, {
          id: this.$route.params.goods_id
        }).then(res => {
          this.info = res.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-card {
    width: 430px; box-sizing: border-box; border: 20px solid #f9f9f9; padding: 20px; background: #F9F9F9; height: 400px; background: #fff; text-align: left;
    .goods-info {
      align-items: center;
      img {
        width: 100px; height: 100px; margin-right: 12px;
      }
      .goods-right {
        .title {
          color: #3E3A39; font-size: 16px;
        }
        .price {
          color: rgba(62,58,57,.6); text-decoration: line-through; margin: 5px 0 8px;
        }
        .price-box {
          align-items: center; color: #FF575E; font-size: 16px;
          img {
            width: 33px; height: 16px;
          }
        }
        .goods-detail {
          fonts-size: 14px; color: #FF575E; margin-top: 19px; cursor: pointer;
          i {
            display: inline-block;font-size: 10px; transform: scale(.6);
          }
        }
      }
    }
    .goods-label {
      color: #131313; font-size: 14px; margin: 13px 0 6px;
    }
    .goods-value {
      color: rgba(19,19,19,.6); font-size: 14px;
    }
  }
</style>

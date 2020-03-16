<template>
  <div class="goods-card">
    <div class="bg-text">
      {{list[index%4]}}
    </div>
    <div class="goods w-flex">
      <img :src="info.images" @click="$router.push('/goods/' + info.id)" />
      <div class="goods-info w-flex">
        <div class="title">{{info.title}} <span> Lunaプラン </span></div>
        <div class="goods-price w-flex">
          <span>¥{{info.price}}({{$t('goods.tax')}})</span>
          <img src="@/assets/img/sale.png" />
          <span>¥{{info.price}}({{$t('goods.tax')}})</span>
        </div>
        <div class="desc">
          {{info.comment}}
        </div>
        <div class="goods-detail" @click="$router.push('/goods/' + info.id)">
          {{$t('index.goods_detail')}} <i class="iconfont icon-xiayige"></i>
        </div>
        <div class="pre-btn" @click="$router.push('/order/' + info.id)">{{$t('index.now_pre')}}</div>
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
      },
      index: {
        type: Number
      }
    },
    data () {
      return {
        list: ['好きな小紋着物を選んだら、半幅帯を合わせ、ヘアセットやバッグ小物等も選び、自分の個性を活かしたコーディネートをしてくれるプランです。',
          '個性的なブランド着物を選んだら、名古屋帯を合わせ、ヘアセットやバッグ小物等も選び、自分の個性を活かした和洋折衷コーディネートをしてくれるプランです。',
          '好きな訪問着に袋帯、名古屋帯を使い、本格的な帯結び（変わり結び）をしてくれるプランです。\n' +
          '普段の生活の中ではなかなか体験できない伝統的な着物を味わうことができます。',
          '女性はlunaプランから、男性は好みの着物、羽織を選び、2人をバランスよくコーディネートしてくれるそう。\n' +
          '着物デートで2人の大切な思い出を作ることができます'
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .goods-card {
    height: 430px; padding-top: 56px; position: relative;
    .bg-text {
      position: absolute; top: -20px; right: 0; width: 150px; color: #3E3A39; opacity: .3; z-index: 10; text-align: left;
    }
    .goods {
      align-items: center;
      img {
        width: 410px; height: 307px; border-radius: 4px; cursor: pointer;
      }
      .goods-info {
        background: #fff; width: 448px; height: 275px; right: 0; position: absolute; box-shadow:0px 0px 40px 0px rgba(165,165,165,0.1); text-align: left; box-sizing: border-box;
        padding: 25px 24px 16px; flex-direction: column;
        .title {
          color: #3E3A39; font-size: 18px;
          span {
            color: rgba(62,58,57,.5); font-size: 14px;
          }
        }
        .goods-price {
          align-items: center; font-size: 14px; margin: 12px 0 14px;
          img {
            width: 33px; height: 16px; margin: 0 6px;
          }
          span:nth-of-type(1) {
            color: rgba(62,58,57,.6); text-decoration: line-through;
          }
          span:nth-of-type(2) {
            color: #FF575E; font-size: 16px;
          }
        }
        .desc {
          color: rgba(19,19,19,.7); font-size: 14px; line-height: 18px; flex: 1;
        }
        .goods-detail {
          fonts-size: 14px; color: #FF575E;
          i {
            display: inline-block;font-size: 10px; transform: scale(.6);
          }
        }
        .pre-btn {
          width: 68px; height: 68px; cursor: pointer; font-size: 14px; line-height: 18px; box-sizing: border-box; padding: 16px 20px; position: absolute; bottom: -20px; right: 100px; background: #FF575E; border-radius: 100%; color: #fff;
        }
      }

    }
  }
</style>

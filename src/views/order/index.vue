<template>
  <div class="order w-flex">
    <div class="order-left">
      <w-calendar />
      <div class="order-info">
        <div class="title">{{$t('order.title')}}</div>
        <div class="order-table">
          <div class="table-item w-flex">
            <div class="table-item-label"></div>
            <div class="table-item-content">

            </div>
          </div>
        </div>
      </div>
    </div>
    <goods-card />
  </div>
</template>

<script>
  import { wCalendar } from '@/components'
  import goodsCard from './components/goodsCard'
  export default {
    name: 'list',
    data () {
      return {

      }
    },
    components: {
      wCalendar,
      goodsCard
    },
    methods: {
      getList () {

      }
    }
  }
</script>

<style scoped lang="scss">
  .order {
    width: 1090px; box-sizing: border-box; padding: 20px 20px 0 0; margin-left: 105px; transform: translateY(-150px);
    .order-left {
      width: 660px; border-right: 10px solid #fff; background: #F9F9F9;
      .order-info {
        border-top: 5px solid #fff; height: 100px; padding: 12px;
        .title {
          text-align: left; font-size: 14px; color: #131313; font-weight: bold; margin-bottom: 12px;
        }
        .order-table {
          border: 1px solid #D8D8D8;
        }
      }
    }
  }
</style>

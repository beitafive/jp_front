<template>
  <div class="order w-flex">
    <div class="order-left">
      <w-calendar ref="calendar" :info="dateInfo" />
      <div class="order-info">
        <div class="title">{{$t('order.title')}}</div>
        <div class="order-table">
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.name')}} <span>*</span></div>
            <div class="table-item-content">
              <input v-model="info.name" class="w-input"/>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.pinyin')}}</div>
            <div class="table-item-content">
              <input v-model="info.pinyin" class="w-input"/>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.num')}} <span>*</span></div>
            <div class="table-item-content">
              <w-input-number v-model="info.male_number" :label="$t('order.man')"/>
              <w-input-number v-model="info.female_number" :label="$t('order.women')"/>
              <w-input-number v-model="info.children_number" :label="$t('order.child')"/>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.email')}} <span>*</span></div>
            <div class="table-item-content">
              <input v-model="info.email" class="w-input"/>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.two_confirm')}} <span>*</span></div>
            <div class="table-item-content">
              <input v-model="info.two_email" class="w-input"/>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.wx')}}</div>
            <div class="table-item-content">
              <input v-model="info.weixin" class="w-input"/>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.contact')}}</div>
            <div class="table-item-content">
              <input v-model="info.contection" class="w-input"/>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.camera')}}</div>
            <div class="table-item-content">
              <el-radio v-model="info.need_photography" label="1">{{$t('order.yes')}}</el-radio>
              <el-radio v-model="info.need_photography" label="2">{{$t('order.no')}}</el-radio>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.from_method')}}</div>
            <div class="table-item-content">
              <el-radio v-model="info.heard_from" label="Facebook">{{$t('order.facebook')}}</el-radio>
              <el-radio v-model="info.heard_from" label="杂志">{{$t('order.magazine')}}</el-radio>
              <el-radio v-model="info.heard_from" label="博客">{{$t('order.blog')}}</el-radio>
              <el-radio v-model="info.heard_from" label="OTA平台">{{$t('order.ota')}}</el-radio>
              <el-radio v-model="info.heard_from" label="搜索引擎">{{$t('order.web')}}</el-radio>
              <el-radio v-model="info.heard_from" label="微博">{{$t('order.weibo')}}</el-radio>
              <el-radio v-model="info.heard_from" label="LINE">{{$t('order.line')}}</el-radio>
              <el-radio v-model="info.heard_from" label="Instragram">{{$t('order.instragram')}}</el-radio>
              <el-radio v-model="info.heard_from" label="朋友介绍">{{$t('order.friend')}}</el-radio>
              <el-radio v-model="info.heard_from" label="其他">{{$t('order.other')}}</el-radio>
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.pay_method')}}</div>
            <div class="table-item-content">
              {{$t('order.in_store')}}
            </div>
          </div>
          <div class="table-item w-flex">
            <div class="table-item-label">{{$t('order.remark')}}</div>
            <div class="table-item-content">
              <input v-model="info.comment" class="w-input"/>
            </div>
          </div>
        </div>
        <div class="submit-btn" @click="onSubmit">{{$t('order.send_btn')}}</div>
      </div>
    </div>
    <goods-card />
  </div>
</template>

<script>
  import { wCalendar, wInputNumber } from '@/components'
  import goodsCard from './components/goodsCard'
  export default {
    name: 'list',
    data () {
      return {
        dateInfo: {
          date: '',
          time: ''
        },
        info: {
          name: '',
          pinyin: '',
          male_number: 0,
          female_number: 0,
          children_number: 0,
          email: '',
          two_email: '',
          weixin: '',
          contection: '',
          need_photography: '1',
          heard_from: 'Facebook',
          pay_way: '到店支付',
          comment:''
        },
        goodsInfo: {}
      }
    },
    components: {
      wCalendar,
      goodsCard,
      wInputNumber
    },
    methods: {
      getInfo () {
        // eslint-disable-next-line no-console
        console.log(this.info.man)
      },
      onSubmit () {
        // eslint-disable-next-line no-console
        console.log(this.dateInfo)
        // console.log(this.$refs.calendar.returnDate())
        this.$http(this.$api.create_order, {
          product_id: 14,
          ...this.info
        })
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
        border-top: 5px solid #fff; padding: 12px 12px 24px;
        .title {
          text-align: left; font-size: 14px; color: #131313; font-weight: bold; margin-bottom: 12px;
        }
        .order-table {
          border: 1px solid #D8D8D8; color: #3E3A39; font-size: 12px;
          .table-item {
            min-height: 40px; align-items: center; border-top: 1px solid #D8D8D8; padding-left: 12px;
            .table-item-label {
              width: 150px; text-align: left; height: 40px; line-height: 40px; align-self: flex-start;
              span {
                color: #DE4839;
              }
            }
            .table-item-content {
              background: #fff; flex: 1; min-height: 40px; line-height: 40px; text-align: left; padding-left: 10px; border-left: 1px solid #D8D8D8;
              .w-input {
                height: 40px; width: 100%;
              }
            }
          }
          .table-item:nth-of-type(1) {
            border: none;
          }
        }
      }
      .submit-btn {
        width: 248px; height: 42px; line-height: 42px; border-radius: 4px; background: #FF575E; color: #fff; font-size: 14px; margin-left: auto; margin-top: 36px;
      }
    }
  }
</style>
<style>
  .el-radio {
    width: 85px; margin-right: 0;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #FF575E;
    background: #FF575E
  }
  .el-radio__input.is-checked+.el-radio__label {
    color: #FF575E;
  }
  .el-radio .el-radio__label{
    font-size: 12px;
    padding-left: 6px;
  }
</style>

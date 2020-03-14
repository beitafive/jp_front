<template>
  <div class="w-calendar">
    <div class="headers w-flex">
      <div class="title">{{$t('common.pre_date')}}</div>
      <el-date-picker
        v-model="month"
        @change="changeMonth"
        type="month">
      </el-date-picker>
    </div>
    <div class="week w-flex">
      <div class="week-item" v-for="(item, index) in weekList" :key="index">{{$t(item)}}</div>
    </div>
    <div class="list-box w-flex">
      <div :class="['date-item', item.isMonth ? '' : 'date-item-no-month', item.select ? 'date-item-select' : '', (item.disabled || item.close) ? 'date-item-disabled' : '']" v-for="(item, index) in list" :key="index" @click="selectDate(item, index)">
        {{item.name}}
        <el-tooltip :content="$t('common.close')" placement="bottom" effect="light">
          <span class="date-item-close" v-if="item.close"></span>
        </el-tooltip>
      </div>
    </div>
    <div class="time-box">
      <el-time-select
        v-model="info.time"
        :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }">
      </el-time-select>
    </div>
  </div>
</template>

<script>
  import { time2Obj } from "../../utils/time"
  import { createList } from "./utils";
  export default {
    name: 'wCalendar',
    props: {
      info: {
        type: Object,
        default () {
          return {
            date: '',
            time: ''
          }
        }
      }
    },
    data () {
      return {
        month: new Date(),
        day: '',
        time: '',
        weekList: ['common.sun', 'common.mon', 'common.tue', 'common.wed', 'common.thu', 'common.fri', 'common.sat'],
        list: [],
        closeList: ['2020-3-14', '2020-3-16']
      }
    },
    mounted () {
      this.list = createList(time2Obj(), this.closeList)
      this.info.time = time2Obj().hour + ':00'
    },
    methods: {
      selectDate (item, index) {
        if (item.disabled || item.close) {
          return null
        } else {
          for (let i = 0, len = this.list.length; i < len; i++) {
            this.list[i].select = false
          }
          this.list[index].select = true
          this.info.date = item.date
        }
      },
      changeMonth () {
        this.list = createList(time2Obj(this.month), this.closeList)
      },
      returnDate () {
        if (!this.day) {
          return this.$message.error(this.$t('common.time_error'))
        }
        return this.day + ' ' + this.time
      }
    }
  }
</script>

<style scoped lang="scss">
  .w-calendar {
    width: 418px; background: #F9F9F9; box-sizing: border-box; padding: 12px;
    .headers {
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
      .title {
        font-size:14px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight: bold;
        color:rgba(19,19,19,1);
        line-height:18px;
        color: #131313;
      }
      .el-select {
        width: 110px; height: 24px; font-size: 12px;
      }
    }
    .list-box {
      align-items: center; flex-wrap: wrap;
      .date-item {
        width: 55px; height: 24px; line-height: 24px; text-align: center; font-size: 12px; margin: 1px 1px 0 0; background: #FFFFFF; cursor: pointer; position: relative;
      }
      .date-item-close {
        width: 18px; height: 1px; background: #706A68; position: absolute; top: 12px; left: 18px; transform: rotate(30deg);
      }
      .date-item-no-month {
        color: #3E3A39;
        opacity:  0.5;
      }
      .date-item-disabled {
        cursor: not-allowed;
        color: #606266;
        background: rgb(233, 233, 235);
      }
      .date-item-select {
        background: #FF575E;
        color: #fff;
      }
    }
    .week {
      .week-item {
        width: 55px; height: 24px; line-height: 24px; font-size: 12px; margin: 1px 1px 0 0; background: #F1F1F1;
      }
    }
    .time-box {
      text-align: right; margin-top: 5px;
    }
  }
</style>
<style lang="scss">
  .w-calendar {
    .el-date-editor {
      width: 110px!important; height: 24px; line-height: 24px;
      input {
        width: 110px; height: 24px; padding: 0 10px; border: 1px solid #D8D8D8; border-radius: 0; text-align: center;
      }
      span {
         display: none;
      }
    }
  }
</style>

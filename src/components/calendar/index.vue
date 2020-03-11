<template>
  <div class="w-calendar">
    <div class="headers w-flex">
      <div class="title">{{title}}</div>
<!--      <el-select v-model="month" >-->
<!--        <el-option-->
<!--          v-for="item in options"-->
<!--          :key="item.value"-->
<!--          :label="item.label"-->
<!--          :value="item.value">-->
<!--        </el-option>-->
<!--      </el-select>-->
    </div>
    <div class="week">
      <div class="week-item"></div>
    </div>
    <div class="list-box w-flex">
      <div :class="['date-item', item.isMonth ? '' : 'date-item-no-month', item.select ? 'date-item-select' : '', (item.disabled || item.close) ? 'date-item-disabled' : '']" v-for="(item, index) in list" :key="index" @click="selectDate(item, index)">
        {{item.name}}
        <el-tooltip content="Bottom center" placement="bottom" effect="light">
          <span class="date-item-close" v-if="item.close"></span>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  import { time2Obj } from "../../utils/time"
  import { createList } from "./utils";
  export default {
    name: 'wCalendar',
    props: {
      value: {
        type: String
      },
      title: {
        type: String,
        default: '预定日期'
      }
    },
    data () {
      return {
        month: '',
        monthList: [],
        list: [],
        closeList: ['2020-3-14', '2020-3-16']
      }
    },
    mounted () {
      this.list = createList(time2Obj('2020-03-02'), this.closeList)
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
          this.$emit('callback', item.date)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .w-calendar {
    width: 418px; height: 231px; background: #F9F9F9; box-sizing: border-box; padding: 12px;
    .headers {
      align-items: center;
      justify-content: space-between;
      .title {
        font-size:13px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(19,19,19,1);
        line-height:18px;
      }
      .el-select {
        width: 110px; height: 24px; font-size: 12px;
      }
    }
    .list-box {
      align-items: center; flex-wrap: wrap;
      .date-item {
        width: 55px; height: 24px; line-height: 24px; text-align: center; font-size: 12px; margin: 1px 1px 0 0 ; background: #FFFFFF; cursor: pointer; position: relative;
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
  }
</style>

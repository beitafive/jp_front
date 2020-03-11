import { time2Obj } from "../../utils/time"

export function createList ( time, closeList ) {
  // 生成本月的日期 当前月共 {num} 天
  const num = new Date(time.year,time.month,0).getDate()
  let list = []
  for (let i = 0;i < num; i++) {
    list.push({
      name: i+1,
      select: false,
      disabled: false,
      close: false,
      isMonth: true,
      date: time.year + '-' + time.month + '-' + (i+1)
    })
  }
  // 加上 前面日期  86400000
  const nums = new Date(list[0].date).getDay()
  const fristDay = Date.parse(new Date(list[0].date)) // 当前月 第一天
  const lastDay = Date.parse(new Date(list[num-1].date)) // 当前月最后一天
  for (let j = 0; j < nums; j++) {
    let dates = time2Obj(fristDay - 86400000 * j - 1)
    list.unshift({
      name: dates.day,
      select: false,
      disabled: false,
      close: false,
      date: dates.symbolDate
    })
  }
  // 加上 后面日期
  const nextNum = 42 - num - nums
  for (let j = 0; j < nextNum; j++) {
    let dates = time2Obj(lastDay + 86400000 * (j + 1))
    list.push({
      name: dates.day,
      select: false,
      disabled: false,
      close: false,
      date: dates.symbolDate
    })
  }
  // 设置关店 日期
  for (let i = 0, len = closeList.length; i < len; i++) {
    for (let j = 0, lens = list.length; j < lens; j++) {
      if (closeList[i] === list[j].date) {
        list[j].close = true
        continue
      }
    }
  }
  // 设置disabled
  const nowNum = Date.parse(new Date(time2Obj().symbolDate))
  for (let i = 0, len = list.length; i < len; i++) {
    if (Date.parse(list[i].date) < nowNum) {
      list[i].disabled = true
    }
  }
  return list
}

export function checkList () {

}


export function time2Obj (time, symbol = '-') {
  time = time ? new Date(time) : new Date()
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  let hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
  let minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
  let second = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
  let symbolTime = year + symbol + month + symbol + day + ' ' + hour + ':' + minute + ':' + second
  let symbolDate = year + symbol + month + symbol + day
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    symbolTime,
    symbolDate
  }
}

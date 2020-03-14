<template>
  <div class="w-input-number w-flex">
    <label>{{label}}</label>
    <i class="iconfont icon-jian" @click="jian()"></i>
    <input :value="value" @input="$emit('input', $event.target.value)" />
    <i class="iconfont icon-jia" @click="jia()"></i>
  </div>
</template>

<script>
  export default {
    name: 'wInputNumber',
    props: ['value', 'label'],
    methods: {
      jian () {
        this.$emit('input',+this.value-1)
      },
      jia () {
        this.$emit('input',+this.value+1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .w-input-number {
    color: #3C3C3C; height: 30px; align-items: center;
    label { margin-right: 8px; }
    input {
      width: 34px; text-align: center;
    }
    i {
      cursor: pointer;
    }
  }
</style>

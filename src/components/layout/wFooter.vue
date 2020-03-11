<template>
  <div class="w-footer w-flex">
    <img src="@/assets/img/footer_logo.png" />
    <div>{{$t('index.address')}}: 東京都台東区東上野２丁⽬ 13-5 2F</div>
    <div>{{$t('index.contact')}}: +81 7013790822</div>
  </div>
</template>

<script>
  export default {
    name: 'wFooter',
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .w-footer {
    height: 186px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #131313;
    img {
      width: 150px; height: 50px;
    }
    div:nth-of-type(1) {
      margin: 10px 0 5px;
    }
  }
</style>

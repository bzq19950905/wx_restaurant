<template>
  <router-link to='/myaddress/addaddress' class="footer" tag="footer">
    {{title}}
  </router-link>
</template>
<script>
export default {
  name: 'addResss',
  props: {
    title: {
      type: String,
      default: '底部标签'
    }
  }
}
</script>
<style lang="scss" scoped>
  .footer{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-weight: 700;
    font-size: .3rem;
    background: #017DC3;
  }
</style>

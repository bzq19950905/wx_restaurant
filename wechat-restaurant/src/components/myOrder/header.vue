<template>
  <header class="header">
    <a href="JavaScript:history.go(-1)">
    <v-icon name="angle-left" scale="1.5" />
    </a>
    <b>确认订单</b>
  </header>
</template>
<script>
export default {
  name: 'myOrder_name'
}
</script>
<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #FFF;
    a{
        position: absolute;
        left: .2rem;
        top: .2rem;
    }
    b{
        font-weight: 800;
        font-size: .34rem;
    }
}
</style>

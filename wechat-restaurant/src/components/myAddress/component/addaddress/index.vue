<template>
  <div class="wrap">
    <Header title="新增地址"/>
    <section class="section">
      <FormAdd />
    </section>
  </div>
</template>
<script>
import Header from '@/common/header'// 公用头部
import FormAdd from './form.vue'// 表单
export default {
  name: 'addaddress',
  components: {
    Header,
    FormAdd
  }
}
</script>
<style lang="scss">

</style>

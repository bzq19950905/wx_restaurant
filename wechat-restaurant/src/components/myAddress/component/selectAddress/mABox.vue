<template>
  <div class="my_box">
    <div v-for="(item, index) in Data" :key="index">
      <Child :ChildDataV="item[0]" :ChildDataK="index"/>
    </div>
  </div>
</template>
<script>
import Child from './mABoxChild.vue'
export default {
  name: 'myBox',
  props: {
    Data: {
      default: []
    }
  },
  components: {
    Child
  }
}
</script>
<style lang="scss" scoped>
.my_box{
  width: 100%;
  height: 100%;
  background: #FFF;
  padding: .2rem .4rem;
}
</style>

<template>
  <ul class="menu-left">
    <li v-for="(item, index) in Data" :key="index" :class="LeftIndex === index && 'active'" @click="SetRight(index)">
      {{item.name}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'menu-left',
  data () {
    return {
      LeftIndex: 0
    }
  },
  props: {
    Data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    eventBus.$on('setLeftIndex', (res) => {
      this.LeftIndex = res
    })
  },
  methods: {
    SetRight (i) {
      eventBus.$emit('setRightIndex', i)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-left{
    width: 2rem;
    height: 100%;
    background: #F4F4F4;
    li{
      width: 100%;
      height: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 .5rem;
      border-top: 1px solid #ccc;
      &:nth-of-type(1){
        border-top: 0;
      }
    }
}
.active{
  background: #fff;
}
</style>

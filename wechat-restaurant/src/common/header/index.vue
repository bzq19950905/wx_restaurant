<template>
  <header class="header">
    <a href="javascript:history.go(-1)"><v-icon name="angle-left" scale="1.5" /></a>
    <b>{{title}}</b>
  </header>
</template>
<script>
export default {
  name:'Header',
  data () {
    return {
    }
  },
  created () {
    this.title = this.$props.title 
  },
  props: {
    title:{
      type:String,
      default:'头部标签'
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #FFF;
    background:#07E049;
    a{
        position: absolute;
        left: .2rem;
        top: .2rem;
        .fa-icon{
          color: #6AD7DE;
        }
    }
    b{
        font-weight: 800;
        font-size: .34rem;
    }
}
</style>


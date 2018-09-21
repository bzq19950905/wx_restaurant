<template>
  <div id="app">
     <Loading v-if="isLoading"/>
    <router-view v-if="!isLoading"/>
  </div>
</template>

<script>
import MySvg from '@/common/svg'
import Loading from '@/common/loading'
export default {
  name: 'App',
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      setTimeout(() => {
        this.isLoading = false
      }, 1500)
    }
  },
  components: {
    MySvg,
    Loading
  }
}
</script>

<style>
@import url('./css/globalStyle');
</style>

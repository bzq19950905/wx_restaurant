<template>
  <div class="wrap">
    <Header title="我的地址"/>
    <section class="section">
      <MaBox :Data="my_Address"/>
    </section>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import Header from '@/common/header'// 公用头部
import MaBox from './component/mABox.vue'// 列表页
export default {
  name: 'MyAddress',
  components: {
    Header,
    MaBox
  },
  computed: {
    ...mapState({
      my_Address: (state) => state.myAddress.Data
    })
  },
  mounted () {
    this.initData()
  },
  methods: {
    ...mapActions({
    initData: 'myAddress/myData'
  })
  }
}
</script>
<style lang="scss" scoped>

</style>


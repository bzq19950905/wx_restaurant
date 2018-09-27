<template>
  <div class="wrap">
    <Header title="我的地址"/>
    <section class="section">
      <MaBox :Data="my_Address"/>
    </section>
    <Footer title="新增收货地址"/>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import Header from '@/common/header'// 公用头部
import MaBox from './mABox.vue'// 列表页
import Footer from './addRess.vue'// 底部
export default {
  name: 'MyAddress',
  components: {
    Header,
    MaBox,
    Footer
  },
  computed: {
    ...mapState({
      my_Address: (state) => state.myAddress.Data
    })
  },
  mounted () {
    this.initData()
    this.init()
  },
  methods: {
    ...mapActions({
      initData: 'myAddress/myData'
    }),
    init () {
      let local = window.sessionStorage
      local.clear('addaddressObj')
    }
  }
}
</script>
<style lang="scss">

</style>

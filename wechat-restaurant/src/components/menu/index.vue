<template>
  <div class="wrap">
    <HeaderMenu :Data="menuSellerData"/>
    <section class="section">
      <LeftMenu :Data="menuGoodsData"/>
      <RightMenu :Data="menuGoodsData"/>
    </section>
    <footer class="footer">
      <Shop link='/myorder'/>
    </footer>
  </div>
</template>
<script>
import HeaderMenu from './component/menuHeight.vue' // 头部
import LeftMenu from './component/menuLeft.vue' // 左导航页
import RightMenu from './component/menuRight.vue'// 右列表页
import Shop from '@/common/FooterShop' // 底部购物车
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  name: 'Menu',
  data () {
    return {

    }
  },
  mounted () {
    this.initData()
  },
  computed: {
    ...mapState({
      menuSellerData: (state) => state.menu.menuSeller
      // menuGoodsData: (state) => state.menu.menuGoods
    }),
    ...mapGetters({
      menuGoodsData: ['menu/Handle']
    })
  },
  methods: {
    ...mapActions({
      initData: 'menu/menuData'
    })
  },
  components: {
    HeaderMenu,
    LeftMenu,
    RightMenu,
    Shop
  }
}
</script>
<style scoped>
.wrap{
  background: #FFF;
}
.section{
  display: flex;
}
</style>

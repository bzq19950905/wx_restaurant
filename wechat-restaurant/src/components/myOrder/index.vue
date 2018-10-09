<template>
  <div class="wrap">
    <Header />
    <Distribution />
    <AddressA />
  <section class="section">
    <!-- v-for="(item,val,index) in mo_orderLissData " :key="index" -->
    <div class="mo_orderBox" v-if="Object.keys(mo_orderLissData).length > 0">
      <!-- 渲染 -->
      <OrderList :Data="mo_orderLissData"/>
    </div>
    <div class="mo_text" v-else>
      <p>
        空空的去买点吧~~
      </p>
    </div>
  </section>
  <footer class="footer">
     <Shop link='/myorder'/>
  </footer>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import Header from './component/header.vue' // 头部
import AddressA from './component/address.vue' // 付款栏
import Distribution from './component/distribution.vue' // 选择收货地址
import OrderList from './component/orderList.vue' // 订单列表
import Shop from '@/common/FooterShop' // 底部购物车
export default {
  name: 'myorder',
  mounted () {
    this.initData()
  },
  computed: {
    ...mapState({
      mo_orderLissData: (state) => state.menu.storageList
    })
  },
  methods: {
    ...mapActions({
      initData: 'myOrder/myData'
    })
  },
  components: {
    Header,
    AddressA,
    Distribution,
    OrderList,
    Shop
  }
}
</script>
<style scoped>
@import url('../../css/myorder/style.css');
</style>

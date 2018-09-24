<template>
  <div class="wrap">
    <Header />
    <Distribution />
    <AddressA />
  <section class="section">
    <div class="mo_orderBox" v-for="(item,index) in mo_orderLissData " :key="index">
      <!-- 渲染 -->
    <OrderList :listData = {item} />
    </div>
  </section>
  <footer class="footer">
  </footer>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import Header from './component/header.vue' // 头部
import AddressA from './component/address.vue' // 付款栏
import Distribution from './component/distribution.vue' // 选择收货地址
import OrderList from './component/orderList.vue' // 订单列表
export default {
  name: 'myorder',
  mounted () {
    this.initData()
  },
  computed: {
    ...mapState({
      mo_orderLissData: (state) => state.myOrder.myorderData
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
    OrderList
  }
}
</script>
<style scoped>
@import url('../../css/myorder/style.css');
</style>

<template>
  <div class="mo_distribution">
    <p>
      订单配送至
    </p>
    <router-link to="/myaddress" tag='b'>选择收货地址 <v-icon name="angle-right" scale="1" /> <b>{{mo_address}}</b></router-link>
    <!-- <b>选择收货地址 <v-icon name="angle-right" scale="1" /></b> -->
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'distribution',
  computed: {
    ...mapState({
      mo_address: (state) => state.myOrder.myAddress
    })
  }
}
</script>
<style lang="scss" scoped>
.mo_distribution{
    padding: 0 .2rem;
    p{
        line-height: 1.5;
    }
    b{
        line-height:2;
    }
    p{
        color: #66C5D7
    }
    b{
        color: #CEFFFF;
        font-weight: 800;
        font-size: .4rem;
        display: flex;
        align-items: center;
        .fa-icon{
            margin-left: .1rem;
        }
    }
}
</style>

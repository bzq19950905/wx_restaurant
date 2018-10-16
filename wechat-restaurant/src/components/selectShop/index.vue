<template>
  <div class="wrap">
    <Header title="附近的店"/>
    <section class="section">
    </section>
  </div>
</template>
<script>
import Header from '@/common/header'// 公用头部
import {mapState, mapActions} from 'vuex'
export default {
  name: 'selectShop',
  data () {
    return {
      // eslint-disable-next-line
      geolocation : new qq.maps.Geolocation("PLABZ-34WWI-TRYGM-5TDEM-YOOKH-JJBAH", "myapp")
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapActions({
      _selectInit: 'selectShop/SelectShopData',
      _selectOpt: 'selectShop/SelectShop_opt'
    }),
    init () {
      this.geolocation.getLocation(pos => {
        console.log(pos.lat, pos.lng)
        let Obj = {}
        Obj.lat = pos.lat
        Obj.lng = pos.lng
        this._selectOpt(Obj)
        setTimeout(() => {
          this._selectInit()
        }, 500)
        // this.$router.push({name: 'NearbyMap', params: {lat: pos.lat, lng: pos.lng}})
      })
    }
  },
  components: {
    Header
  }
}
</script>
<style lang="scss">
.top{
  color: #00f;
}
</style>

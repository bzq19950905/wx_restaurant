<template>
  <footer class="footer-shop">
    <aside @click="ToMask">
      <div class="shop-icon">
        <v-icon name="shopping-cart" scale="1.5" />
      </div>
      <div class="pic">
        ￥{{picAll}}
      </div>
    </aside>
    <router-link :to='link' tag="button">
      选好了
    </router-link>
    <transition name="fade">
      <MaskBox v-if="isMask" :isM="isMask"/>
    </transition>
  </footer>
</template>
<script>
import MaskBox from './mask.vue'
import {mapState} from 'vuex'
export default {
  name: 'footerShop',
  data () {
    return {
      isMask: false
    }
  },
  props: {
    link: {
      type: String,
      default () {
        return '/'
      }
    }
  },
  computed: {
    ...mapState({
      picAll: (state) => state.menu.picAll
    })
  },
  methods: {
    ToMask () {
      this.isMask = !this.isMask
    }
  },
  components: {
    MaskBox
  }
}
</script>
<style lang="scss" scoped>
.footer-shop{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  aside{
    flex: 1;
    background: #404040;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
    position: relative;
    .shop-icon{
      position: absolute;
      z-index: 999;
      left: .2rem;
      top: -.3rem;
      width: 1.2rem;
      height: 1.2rem;
      background: #00E74B;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .pic{
      font-weight: 800;
      color: #fff;
      font-size: .3rem;
    }
  }
  button{
    width: 2rem;
    height: 100%;
    border: 0;
    background: #00E34A;
    color: #fff;
    font-weight: 800;
    font-size: .3rem;
  }
}
.fade-enter-active, .fade-leave-active{
    transition: opacity 2s ease;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>

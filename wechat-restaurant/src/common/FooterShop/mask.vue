<template>
  <div class="mask">
    <transition name="scale">
      <div v-if="isM" class="mask-text">
        <div class="shop_delete">
          <aside @click="clearStorage">
            <span>清空购物车</span>
            <v-icon name="trash" scale="1" />
          </aside>
        </div>
        <div class="shop_box">
          <div v-for="(i, v, index) in shop_list" :key="index">
            <ShopList :textVal="i" :textKey="v"/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import ShopList from './shopList.vue'
export default {
  name: 'MaskBox',
  props: {
    isM: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  computed: {
    ...mapState({
      shop_list: (state) => state.menu.storageList
    })
  },
  methods: {
    clearStorage () {
      localStorage.clear('menuList')
      window.location.reload()
    }
  },
  components: {
    ShopList
  }
}
</script>
<style lang="scss" scoped>
.mask{
  width: 100%;
  height: calc(100% - 1rem);
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0,0,0,.4);
  display: flex;
  align-items: flex-end;
  .mask-text{
    width: 100%;
    height: 3.5rem;
    background: #F6F6F6;
    display: flex;
    flex-direction: column;
  }
}
.shop_delete{
  height: .8rem;
  border-bottom: 1px solid #ccc;
  aside{
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: .2rem;
    span{
      margin-right: .2rem;
      font-size: .26rem;
      color: #BABABA;
      font-weight: 800;
    }
    .fa-icon{
      font-size: .2rem;
      color: #BABABA;
    }
  }
}
.shop_box{
  flex: 1;
  overflow-y: auto;
}
.scale-enter-active{
    animation: scales 5s ease-in-out;
}
.scale-leave-active{
    animation: scales 5s ease-in-out reverse;
}
@keyframes scales {
    0% {
      transform: translateY(100%)
    }
    100%{
      transform: translateY(0%)
    }
}
</style>

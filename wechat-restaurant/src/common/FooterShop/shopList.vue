<template>
  <div class="shop">
    <div class="shop_active">
      <dl class="shop_list" v-if="isButton">
        <dt @click="change">
          {{textKey}}
        </dt>
        <dd>
        <div class="shop_yes">
          <b>￥{{textVal[0]*textVal[1]}}</b>
          <ShopButton :Data="textVal" :TextK="textKey"/>
        </div>
        </dd>
      </dl>
      <dl class="shop_is" @click="change" v-else>
        <dt>
          {{textKey}}
        </dt>
        <dd>
          ×{{textVal[0]}}
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import ShopButton from '@/common/shopAdd/button.vue'
export default {
  name: 'ShopList',
  data () {
    return {
      isButton: false
    }
  },
  props: {
    textVal: {
      type: Array,
      default () {
        return []
      }
    },
    textKey: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    change () {
      this.isButton = !this.isButton
    }
  },
  components: {
    ShopButton
  }
}
</script>
<style lang="scss" scoped>
.shop{
  width: 100%;
  height:1rem;
  border-bottom: 1px solid #ccc;
}
.shop_active{
  width: 100%;
  height: 100%;
  padding: 0 .2rem;
}
.shop_list{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  dt{
    font-size: .26rem;
    font-weight: 800;
    flex: 1;
  }
  dd{
    width: 2.4rem;
    height: 100%;
    display: flex;
    align-items: center;
  .shop_yes{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    b{
      color: #BD413F;
      font-weight: 800;
      font-size: .3rem;
    }
  }
  }
}
 .shop_is{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    dt{
      color: #BCBCBC;
      font-weight: 800;
      font-size: .26rem;
    }
    dd{
      color: #BCBCBC;
      font-size: .26rem;
    }
  }
</style>

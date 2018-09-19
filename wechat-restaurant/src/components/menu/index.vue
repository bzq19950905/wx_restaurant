<template>
  <div class="wrap">
    <header class="header">
      <dl>
        <dt>
          {{Seller.name}}
        </dt>
        <dd>
        </dd>
      </dl>
    </header>
    <section class="section">
    <!-- <yd-scrolltab>
        <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
            <div style="height: 350px;background-color: gray;"></div>
        </yd-scrolltab-panel>

        <yd-scrolltab-panel label="冰箱" icon="demo-icons-category2" active>
            <div style="height: 350px;background-color: blue;"></div>
        </yd-scrolltab-panel>

        <yd-scrolltab-panel label="洗衣机" icon="demo-icons-category3">
            <div style="height: 350px;background-color: yellow;"></div>
        </yd-scrolltab-panel>
    </yd-scrolltab> -->
    </section>
    <footer class="footer">

    </footer>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import {ScrollTab, ScrollTabPanel} from 'vue-ydui/dist/lib.rem/scrolltab';
export default {
  data () {
    return {
    }
  },
  mounted (){
    this.getData()
  },
  computed: {
    ...mapState({
      Seller: (state) => state.Menu.menuSeller,
      Goods: (state) => state.Menu.menuGoods,
      Order: (state) => state.Menu.menuOrder
    })},
  methods: {
    ...mapActions({
      getData:'Menu/getData'
    })
  }
}
</script>
<style scoped>
  @import url('../../css/menu/style.css');
</style>

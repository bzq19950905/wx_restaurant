<template>
  <div class="menu-Add">
    <div class="menu-yes" v-if="Data.count">
      <button class="rue" @click="action_rue(Data)">-</button>
      <p>{{Data.count}}</p>
    <button class="add" @click="action_add(Data)">+</button>
    </div>
      <div class="menu-no" v-else>
      <button @click="action_add(Data)">选规格</button>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'shopAdd',
  props: {
    Data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    ...mapActions({
      menuAdd: 'menu/menuAdd',
      menuCur: 'menu/menuCur'
    }),
    action_add (v) {
      this.menuAdd(v)
    },
    action_rue (v) {
      this.menuCur(v)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-Add{
  line-height: 2.5;
  position: absolute;
  right: .2rem;
  bottom: 0;
  .menu-no{
    width: 1.2rem;
    height: 100%;
    background: #02E14A;
    border-radius: .6rem;
    text-align: center;
    button{
      color: #FFF;
      font-weight: 800;
      border: 0;
    }
  }
  .menu-yes{
    display: flex;
    align-items: center;
    button{
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      border: 0;
      border: 1px solid #02E14A;
      color: #03E344;
      font-size: .33rem;
      &:nth-of-type(2){
        background: #03E344;
        color: #fff;
      }
    }
    p{
      padding: 0 .15rem;
    }
  }
}
</style>

<template>
  <div class="menu-Add">
    <div class="menu-yes">
      <button class="rue" @click="action_rue(Data, TextK)">-</button>
      <p>{{Data[0]}}</p>
    <button class="add" @click="action_add(Data, TextK)">+</button>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'shopAdd',
  props: {
    Data: {
      type: Array,
      default () {
        return []
      }
    },
    TextK: {
      type: String,
      default () {
        return ''
      }
    }
  },
  methods: {
    ...mapActions({
      menuAdd: 'menu/menuAdd',
      menuCur: 'menu/menuCur'
    }),
    action_add (v, k) {
      let Obj = {
        count: v[0],
        price: v[1],
        name: k
      }
      this.menuAdd(Obj)
    },
    action_rue (v, k) {
      let Obj = {
        count: v[0],
        price: v[1],
        name: k
      }
      this.menuCur(Obj)
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-Add{
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

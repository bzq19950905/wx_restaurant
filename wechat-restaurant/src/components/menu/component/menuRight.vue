<template>
  <div class="menu-right" ref="BoxScroll">
    <div class="sroll">
      <div class="menu-list" v-for="(item, index) in Data" :key="index" ref="food-list">
        <h1>{{item.name}}</h1>
        <dl v-for="(v, i) in item.children" :key="i">
          <dt>
            <img :src="v.img ? v.img :'http://img3.imgtn.bdimg.com/it/u=901142090,2578806043&fm=26&gp=0.jpg'" alt="">
          </dt>
          <dd>
            <h2>
            {{v.name}}
            </h2>
            <p>
              <span>
                ￥{{v.price}}
              </span>/元
            </p>
            <ShopAdd :Data="v"/>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import ShopAdd from '@/common/shopAdd'
export default {
  name: 'menu-right',
  data () {
    return {
      scrollY: 0,
      listHeight: []
    }
  },
  props: {
    Data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    ShopAdd
  },
  computed: {
    currentIndex () {
      let index = this.listHeight.findIndex((item) => item >= this.scrollY)
      index = (index === -1) ? this.listHeight.length : index
      index = index && (index - 1)
      return index
    }
  },
  methods: {
    _initScroll () {
      this.foodsScroll = new BScroll(this.$refs['BoxScroll'], {
        probeType: 3
      })
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs['food-list']
      let height = 0
      this.listHeight.push(height)
      if (foodList) {
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },
    setIndex () {
      eventBus.$emit('setLeftIndex', this.currentIndex)
    }
  },
  mounted () {
    setTimeout(() => {
      this.$nextTick()
        .then(this._initScroll)
        .then(this._calculateHeight)
    }, 500)
    eventBus.$on('setRightIndex', (res) => {
      let foodList = this.$refs['food-list']
      let el = foodList[res]
      this.foodsScroll.scrollToElement(el, 300)
    })
  },
  watch: {
    currentIndex: 'setIndex'
  }
}
</script>
<style lang="scss" scoped>
.menu-right{
  flex: 1;
  overflow: hidden;
  padding-left:.2rem;
}
.menu-list{
  h1{
    border-left: 2px solid #32C462;
    padding-left: .15rem;
    font-size: .24rem;
    font-weight: 800;
    color: #676767;
    margin-top: .2rem;
  }
  dl{
    display: flex;
    padding: .2rem 0;
    border-bottom: 1px solid #ccc;
    dt{
      width: 1.2rem;
      height: 1.2rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    dd{
      flex: 1;
      padding-right: 1.4rem;
      padding-left: .2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      h2{
        width: 100%;
        font-size: .28rem;
        font-weight: 800;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;  //这里是在第二行有省略号
        overflow: hidden;
      }
      p{
        color: #BFC0C5;
        font-size: .28rem;
        span{
          font-weight: 800;
          color: red;
          font-size: .3rem;
        }
      }
    }
  }
}
</style>

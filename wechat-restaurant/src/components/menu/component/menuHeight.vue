<template>
  <header class="menu-header">
    <dl>
      <dt>
        <img :src="Data.img ? Data.img :'//p0.meituan.net/440.0/deal/8e2f2d82e46810fbd7bfcde8bf8e5f1e149122.jpg'" alt="">
      </dt>
      <dd>
        <h1>{{Data.name}}</h1>
        <p>{{isBusiness}}</p>
        <span>
          <v-icon name="angle-right" scale="1.5" />
        </span>
      </dd>
    </dl>
  </header>
</template>
<script>
export default {
  name: 'menu-header',
  props: {
    Data: {
      type: null,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      isBusiness: '营业中',
      data: []
    }
  },
  mounted () {
    this.init()
  },
  created () {
    this.data = this.$props.Data
  },
  methods: {
    init () {
      if (this.$props.Data.score) {
        this.isBusiness = '未营业'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-header{
  width: 100%;
  height: 1.6rem;
  border-bottom: 1px solid #ccc;
  dl{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    dt{
      width: 1.2rem;
      height: 1.2rem;
      background: red;
      margin-left: .2rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    dd{
      flex: 1;
      margin-left:.2rem;
      position: relative;
      h1{
        font-weight: 800;
        line-height: 2;
        font-size: .3rem;
      }
      p{
        line-height: 2;
        color:#C6C6C6;
        font-size: .26rem;
      }
      span{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        .fa-icon{
          color:#C6C6C6;
        }
      }
    }
  }
}
</style>

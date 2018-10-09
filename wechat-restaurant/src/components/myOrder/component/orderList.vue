<template>
  <div class="mo_orderList">
    <h1>
      粥品香坊(回龙观)
    </h1>
    <ul v-for="(item, index) in Data" :key="index">
      <li>
        <dl>
          <dt>
            <aside>
              <img :src="item.img ? item.img :'http://img3.imgtn.bdimg.com/it/u=901142090,2578806043&fm=26&gp=0.jpg'" alt="">
            </aside>
            <div class="mo_orderList_title">
              {{index}}
            </div>
          </dt>
          <dd>
            *{{item[0]}}
          </dd>
        </dl>
        <b>
          ￥{{item[0]*item[1]}}
        </b>
      </li>
    </ul>
    <Discount />
    </div>
</template>
<script>
import Discount from './discount.vue' // 配置项
export default {
  name: 'orderList',
  props: {
    Data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    Discount
  }
}
</script>
<style lang="scss" scoped>
.mo_orderList{
  h1{
    line-height: 2.5;
    color: #000;
    font-weight: 800;
    font-size: .3rem;
  }
  ul{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    li{
      padding:.2rem 0;
      width: 100%;
      display: flex;
      padding-right: 1.8rem;
      position: relative;
      dl{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        dt{
          display: flex;
          align-items: center;
        aside{
          width: 1rem;
          height: .8rem;
          img{
          width: 100%;
          height: 100%;
          }
        }
        .mo_orderList_title{
          font-weight: 800;
          font-size: .26rem;
          margin-left:.2rem;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
      }
    }
  }
  b{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%)
    }
  }
  }
}
</style>

<template>
  <div class="mo_orderList">
    <h1>
      {{listData.item.shop_name}}
    </h1>
    <ul>
      <li>
        <dl>
          <dt>
            <aside>
              <img src="http://img3.imgtn.bdimg.com/it/u=3103677091,911965448&fm=200&gp=0.jpg" alt="">
            </aside>
            <div class="mo_orderList_title">
              {{listData.item.name}}
            </div>
          </dt>
          <dd>
            *{{listData.item.order_status}}
          </dd>
        </dl>
        <b>
          ￥{{listData.item.order_price}}
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
  props: ['listData'],
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

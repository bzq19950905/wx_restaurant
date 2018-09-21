<template>
<ul class="mo_discount">
  <li>
    <aside>
      <b class="mo_discount_packing">包装</b>
      <span>餐盒</span>
    </aside>
    <strong>￥<div class="mo_discount_pic">2</div></strong>
  </li>
    <li>
      <aside>
        <b class="mo_discount_transport">蜂鸟</b>
        <span>配送费</span>
      </aside>
      <strong>￥<div class="mo_discount_pic">6.5</div> </strong>
  </li>
    <li>
      <aside>
        <b class="mo_discount_addguest">新客</b>
        <span>本店新客立减</span>
      </aside>
      <strong class="mo_discount_pic_cut">-￥1</strong>
  </li>
</ul>
</template>
<script>
export default {
  name: 'Discount'
}
</script>
<style lang="scss" scoped>
.mo_discount{
    width: 100%;
    height: auto;
    li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:.2rem 0;
        aside{
            .mo_discount_packing,.mo_discount_transport,.mo_discount_addguest{
                padding: 0 .1rem;
            }
            .mo_discount_packing{
                background:#F2F9FF;
                color: #B3BDC7;
            }
            .mo_discount_transport{
                background: #57A3EE;
                color: #FFF;
            }
            .mo_discount_addguest{
                background: #0CB162;
                color: #FFF;
            }
            span{
                font-weight: 800;
                color:#666666;
                font-size: .3rem;
                margin-left: .2rem;
            }
        }
        .mo_discount_pic{
            font-weight: 800;
            color:#666666;
            font-size: .3rem;
            display: inline-block;
        }
        .mo_discount_pic_cut{
            font-weight: 800;
            color: red;
            font-size: .3rem;
        }
    }
}
</style>

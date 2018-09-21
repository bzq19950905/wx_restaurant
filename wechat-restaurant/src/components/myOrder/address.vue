<template>
  <div class="mo_address">
    <div class="mo_address_time">
      <aside>
        <h1>送达时间</h1>
        <p>蜂鸟专送</p>
      </aside>
      <b>
        尽快送达(15:20送达)<v-icon name="angle-right" scale="1" />
      </b>
    </div>
    <div class="mo_address_choice mo_address_time">
      <aside>
          <h1>支付方式</h1>
      </aside>
      <b>
        在线支付
      </b>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addressA'
}
</script>
<style lang="scss" scoped>
.mo_address{
    background: #FFF;
    padding: 0 .3rem;
    margin: 0 .2rem;
}
.mo_address_time{
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid #ccc;
    aside{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            color: #000;
            font-weight: 800;
            font-size: .3rem;
        }
        p{
            color: #fff;
            background: linear-gradient(left,#40CBFF,#0482FA);
            padding: 0 .1rem;
        }
    }
    b{
        font-size: .3rem;
        color: #3986B4;
        display: flex;
        align-items: center;
        .fa-icon{
            margin-left: .1rem;
        }
    }
}
.mo_address_choice{
    border-bottom: 0;
}
</style>

<template>
  <div class="child">
    <div class="child_name">
      <b>{{ChildDataV.name}}</b>
      <span>{{ChildDataV.sex}} {{ChildDataV.phone}}</span>
    </div>
    <div class="child_personality">
      <b>送餐地址</b>
      <span>{{ChildDataV.mapData}}</span>
    </div>
     <div class="child_address">
      <b>详细送餐地址</b>
      <span>{{ChildDataV.addressDetail}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'handle',
  props: {
   ChildDataV: {
    type: Object,
    default: {}
    },
  ChildDataK: {
    type: String,
    default: ''
  }
  }
}
</script>
<style lang="scss" scoped>
.child{
  padding: .2rem 0;
  border-bottom: 1px solid #ccc;
}
.child_name{
  line-height: 2;
  b{
    font-weight: 800;
    color:#2B2D2C;
    font-size: .34rem; 
  }
  span{
    margin-left: .2rem;
    font-weight: 600;
    color:#2B2D2C;
    font-size: .26rem; 
  }
}
.child_personality,.child_address{
  line-height: 2;
  b{
    font-weight: 800;
    background: #F73A00;
    font-size: .26rem;
    padding: 0 .15rem;
    color: #FFF;
    border-radius: .2rem;
  }
  span{
     font-size: .26rem;
     margin-left: .2rem;
     color: #78797B;
  }
}
</style>


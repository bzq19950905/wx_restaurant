<template>
<div class="box">
   <yd-cell-group>
    <yd-cell-item>
      <span slot="left" class="title">你的名字</span>
      <input slot="right" type="text" placeholder="你的名字" v-model="form.user" @input="Input">
    </yd-cell-item>
    <yd-cell-item>
      <span slot="left" class="title">手机号</span>
      <input slot="right" type="number" placeholder="请输入手机号" v-model="form.phone" @input="Input">
    </yd-cell-item>
    <yd-cell-item arrow type="label">
      <span slot="left" class="title_sex">性别</span>
      <select slot="right" v-model="form.sex" @change="Input">
        <option value="">请选择性别</option>
        <option value="1">男</option>
        <option value="2">女</option>
      </select>
    </yd-cell-item>
    <div @click="storAge" class="map">
      <b>送餐地址</b>
      <input type="text" disabled placeholder="请选择送餐地址" v-model="form.address" @change="Input">
    </div>
     <!-- <yd-cell-item>
      <span slot="left" class="title">送餐地址</span>
      <input slot="right" type="text" placeholder="请填写详细送餐地址" v-model="form.address" @input="Input">
    </yd-cell-item> -->
     <yd-cell-item>
      <span slot="left" class="title">详细送餐地址</span>
      <input slot="right" type="text" placeholder="详细送餐地址(如门牌号等)" v-model="form.detailedAddress" @input="Input">
    </yd-cell-item>
  </yd-cell-group>
  <div class="submit">
    <yd-button @click.native="openNotify" size="large" type="hollow">确定</yd-button>
  </div>
</div>
</template>
<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        user: '',
        phone: '',
        sex: '',
        address: '',
        detailedAddress: ''
      },
      // eslint-disable-next-line
      geolocation : new qq.maps.Geolocation("PLABZ-34WWI-TRYGM-5TDEM-YOOKH-JJBAH", "myapp")
    }
  },
  mounted () {
    this.init()
    this.Coordinate()
    this.Input()
  },
  methods: {
    init () {
      let local = window.sessionStorage
      if (local.getItem('addaddressObj')) {
        let obj = JSON.parse(local.getItem('addaddressObj'))
        this.form = obj
      }
    },
    openNotify () {
      if (this.form.user !== '' && this.form.phone !== '' && this.form.sex !== '' && this.form.address !== '' && this.form.detailedAddress !== '') {
        if (!(/^1[34578]\d{9}$/.test(this.form.phone))) {
          this.$dialog.notify({
            mes: '手机号格式不正确',
            timeout: 3000,
            callback: () => {
              console.log('我走咯')
            }
          })
        } else {
          console.log(this.form)
          this.$router.replace('/myaddress')
        }
      } else {
        this.$dialog.notify({
          mes: '看看哦内容不能为空',
          timeout: 3000,
          callback: () => {
            console.log('我走咯')
          }
        })
      }
    },
    storAge () {
      this.geolocation.getLocation(pos => {
        console.log(pos.lat, pos.lng)
        this.$router.replace('/nearbymap')
      })
    },
    Input () {
      let obj = this.form
      let local = window.sessionStorage
      local.setItem('addaddressObj', JSON.stringify(obj))
    },
    Coordinate () {
      this.form.address = this.$store.state.myAddress.CoordinateText
    }
  }
}
</script>
<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
}
.title{
  width: 2rem;
  font-size: .26rem;
  font-weight: 800;
}
.title_sex{
  width: 2.1rem;
  font-size: .26rem;
  font-weight: 800;
}
.yd-cell-item{
  div{
    background: red !important;
  }
}
.submit{
  width: 90%;
  padding-left: 10%;
  height: .8rem;
  margin-top: .6rem;
  button{
    width: 100%;
    height: 100%;
    border: 0;
    background: #00E567;
    border-radius: .6rem;
    font-size: .3rem;
    color: #fff;
    font-weight: 800;
  }
}
.map{
  width: 100%;
  height: 1rem;
  padding: 0 .2rem;
  display: flex;
  align-items: center;
  b{
  width: 2.1rem;
  font-size: .26rem;
  font-weight: 800;
  }
  input{
    width: 100%;
    height: 100%;
    border: 0;
    padding-left: .48rem;
  }
}
</style>

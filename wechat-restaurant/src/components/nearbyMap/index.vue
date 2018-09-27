<template>
  <div id="container">
  </div>
</template>
<script>
import { TMap } from '@/common/TMap'
export default {
  data () {
    return {
      loc: {
        lat: null,
        loc: null
      }
    }
  },
  mounted () {
    TMap('申请的key').then(qq => {
      let map = new qq.maps.Map(document.getElementById('container'), {
        // 地图的中心地理坐标。
        center: new qq.maps.LatLng(39.91488908,  116.40387397),
        zoom: 8
      })
    })
    this.Tmap()
  },
  methods: {
    Tmap () {
      window.addEventListener('message', function(event) {
        if (event.data) {
          this.loc = event.data // 接收位置信息
          if (this.loc) {
            console.log(this.loc.lat)
            console.log(this.loc.lng)
          }
        }}, false)
        setTimeout(function() {
          if (!this.loc) {
            console.log('定位超时')
          }
        }, 6000)
    }
  },
  created: function () {
  }
}
</script>
<style>
#container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>

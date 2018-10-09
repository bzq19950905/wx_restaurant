<template>
 <iframe id="mapPage" width="100%" height="100%" frameborder=0
    src="https://apis.map.qq.com/tools/poimarker?
    type=0&marker=coord:39.96554,、
    116.26719;title:成都;
    addr:北京市海淀区复兴路32号院|coord:39.87803,116.19025;
    title:成都园;addr:北京市丰台区射击场路15号北京园博园|coord:39.88129,116.27062;
    title:老成都;
    addr:北京市丰台区岳各庄梅市口路西府景园六号楼底商|coord:39.9982,116.19015;
    title:北京园博园成都园;
    addr:北京市丰台区园博园内&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp">
</iframe>
</template>
<script>

import { mapActions } from 'vuex'
export default {
  name: 'Nearby',
  mounted () {
    this.init()
  },
  methods: {
    ...mapActions({
      Coo: 'myAddress/Coordinate'
    }),
    init () {
      window.addEventListener('message', (event) => {
      // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
        var loc = event.data;
        if (loc && loc.module === 'locationPicker') { // 防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          this.Coo(loc)
          this.$router.replace('/myaddress/addaddress')
        }
      }, false);
    }
  }
}
</script>

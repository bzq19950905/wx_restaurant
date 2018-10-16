<template>
   <iframe id="markPage" width="100%" height="100%" frameborder=0
   :src="Src">
   </iframe>
</template>
<script>

import { mapActions } from 'vuex'
export default {
  name: 'Nearby',
  data () {
    return {
      loc: null,
      Src: ''
    }
  },
  mounted () {
    this.init()
    let lat = this.$route.params.lat
    let lng = this.$route.params.lng
    this.Src = `https://apis.map.qq.com/tools/locpicker?search=1&type=1&coord=${lat},${lng}&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp`
    console.log(lat, lng)
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

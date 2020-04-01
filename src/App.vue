<template>
  <div id="app">
      <heart-beat></heart-beat>
  </div>
</template>

<script>
import heartBeat from '../src/myPlugin/heartBeat/heartBeat.vue'
export default {
  name: 'app',
  data () {  

  },
  components:{
    heartBeat
  }
}
</script>

<style>
  #app{
    width: 400px;
    height: 400px;
    margin: 0 auto;
  }
</style>

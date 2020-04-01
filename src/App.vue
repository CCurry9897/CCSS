<template>
  <div id="app">
    <div class="s">
    <heart-beat></heart-beat>
    </div>
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
  .s{
    width: 400px;
    height: 400px;
    margin: 0 auto;
  }
</style>

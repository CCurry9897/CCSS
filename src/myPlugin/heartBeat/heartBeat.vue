<template>
  <div class = "heart" :style="{width: width,height: height}">
    <!-- 必须设置宽高一致 -->
    <div class="heart__div--top1"></div>
    <div class="heart__div--top2"></div>
    <div class="heart__div--center"></div>
  </div>
</template>

<script>
export default {
  name:'heartBeat',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  }
}
</script>

<style>
  body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .heart{
    width: 100px; 
    height: 100px;
  } 
  .heart__div--top1{
    width: 50%;
    height: 50%; 
    position: relative;
    border-radius: 50%;
    z-index: 5;
    background: linear-gradient(-90deg,#f50843 0%, #f50843 40%);
    animation: heartBeat 0.7s ease 0s infinite normal;
  }
  .heart__div--top2{
    width: 50%;
    height: 50%;
    position: relative;
    left: 31%;
    top: -50%;
    z-index: 2;
    border-radius: 50%;
    background: linear-gradient(-90deg,#f50843 0%, #f50843 40%);
    animation: heartBeat 0.7s ease 0s infinite normal;
  }
  .heart__div--center{
    width: 50%;
    height: 50%;
    position: relative;
    transform: rotate(45deg);
    top: -85%;
    left: 15.55%;
    background:linear-gradient(-45deg,#f50843  0%, #f50843 40%);
    background: linear-gradient(-90deg,#f50843 0%, #f50843 40%);
    animation: heartBeat 0.7s ease 0s infinite normal;
  }
  @keyframes heartBeat{
    0%{
      transform: scale(1) rotate(45deg);
      box-shadow: 0 0 20px rgb(247, 18, 68);
    }
    50%{
      transform: scale(1.1) rotate(45deg);
      box-shadow: 0 0 30px rgb(247, 18, 68);
    }
    100%{
      transform: scale(1) rotate(45deg);
      box-shadow: 0 0 20px rgb(247, 18, 68);
    }
  }
</style>
import heartBeat from './heartBeat.vue'
//把这个动画搞成插件
heartBeat.install = Vue => Vue.component(heartBeat.name,heartBeat)//注册组件

export default heartBeat
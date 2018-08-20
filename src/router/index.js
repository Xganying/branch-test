// import Vue from 'vue'
// import Router from 'vue-router'
// // import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


import Vue from 'vue'
import mavonEditor from 'mavon-editor' // vue markdown编辑器
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor);

new Vue({
    el:'#app',
    data(){
        return{
            value:''
        }
    }
})

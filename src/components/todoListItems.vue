<template>
   <li>
       {{todo.text}}
       <button @click="$emit('remove', todo.id)">delete</button>
   </li>
</template>

<script>
// 导出一个默认模块
export default{
    // 组件数据传递
    props:{
        todo:{
            type:Object,
            require:true
        }
    }
}
</script>

<style>
li{
    margin-top: 10px;
    text-align: left;    
    list-style-type: decimal-leading-zero;
}
button{
    border-radius: 5px;
    margin-left: 5px;
}
</style>




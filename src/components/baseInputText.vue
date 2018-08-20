<template>
    <input type="text" class="input1" :value="value" v-on="listeners">
</template>

<script>
import todoListItem from './todoListItems.vue' // 引入外部组件

export default{
    // 父子组件数据通信
    props:{
        value:{
            type:String,
            default:''
        }
    },

    // 计算属性
    computed:{ 
        listeners(){
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
</script>

<style scoped>

.input1{
    width: 50%;
    padding: 8px 10px;
}

</style>


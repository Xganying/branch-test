<template>
  <div id="app">
    <h1>What will you do ?</h1>
	<todo-list></todo-list> <!-- 调用自定义组件 -->
	<mavon-editor class="mdEditor" v-model="value"></mavon-editor> <!-- 调用外部组件-->
  </div>
</template>

<script>
import todoList from './components/toDoList.vue' // 引入外部定义的组件

export default {
	// 声明用到的组件
	components:{ 
		todoList
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 50px;
}
.mdEditor{
	margin-top: 50px;
}
</style>

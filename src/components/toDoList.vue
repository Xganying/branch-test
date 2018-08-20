<template>
  <div>
    <!-- 调用组件 -->
    <baseInputText 
		v-model="newTodoText"
    	placeholder="please input add a todo here" 
		@keydown.enter="addTodo"
    /> 
	<ul v-if="todos.length">
		<todoListItems 
			v-for="todo in todos"
			:key="todo.id"
			:todo="todo"
			@remove="removeTodo"
		/>
	</ul>
	<p v-else>
		there is nothing in the list now , please add a new todo in the input above .
	</p>
  </div>
</template>

<script>

import baseInputText from './baseInputText.vue' // 引入外部的组件
import todoListItems from './todoListItems.vue'

let nextTodoId = 1;

// 导出一个默认模块，组件中的逻辑代码
export default{  

	// 声明用到的组件
	components:{ 
		baseInputText, todoListItems
	},

  	// 在.vue 组件, data必须是一个函数，它return（返回一个对象），这个返回的对象的数据，供组件实现
	data() {
		return{
			newTodoText:'',
			todos:[
				{
					id: nextTodoId++,
					text:'learn Vue'
				}
			]
		}
	},

	// 组件调用的方法
	methods:{ 
		addTodo(){  // 添加todo
			const trimeText = this.newTodoText.trim();
			if(trimeText){
				this.todos.push({
					id: nextTodoId++,
					text: trimeText
				})
			}
			this.newTodoText = '';
		},
		removeTodo(idToRemove){  // 删除todo
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove;
			})
		}
  	}
}

</script>

<!-- scoped属性限制CSS样式只在这个组件中有效 -->
<style scoped>
	ul{
		width: 50%;
		margin: 0 auto;
	}
</style>

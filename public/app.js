var $i = 1;

$app = new Vue({
	el : '#app',
	data : {
		data_todo  : [],
		todo       : null
	},
	methods : {
		addTodo : function(){
			if (this.todo==null)
	        {
	          this.$refs.todo_input.focus();
	          return;
	        }

	        this.data_todo.push({
	        	todo : this.todo,
	        	i : $i
	        })
	        $i++;

	        this.$refs.todo_input.focus();
	        this.todo=null;
		},
		removeTodo : function(id){
			this.data_todo.shift(id)
		}
	},
	mounted: function(){
		this.$refs.todo_input.focus();
	}
})
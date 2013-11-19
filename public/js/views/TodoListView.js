var TodoListView = Backbone.View.extend({

	initialize: function(options) {
		_.bindAll(this, 'render', 'addTodoItem');

		this.listItems = options.listItems;
		this.vent = options.vent;
		this.vent.on('todo:add', this.addTodoItem);
	},

	render: function() {
		this.$el.html('');
		if(this.listItems.length === 0) {
		}
		else {
			for(var i=0; i<this.listItems.length; i++) {
				this.$el.append(this.listItems[i].render().$el.html());
			}
		}

		return this;
	},

	addTodoItem: function(args) {
		args.value.id = this.listItems.length;
		this.listItems.push(new TodoListItemView({ vent: this.vent, model: args.value }));
		this.render();
	}
});
var TodoViewerView = Backbone.View.extend({
	initialize: function(options) {
		_.bindAll(this, 'render', 'showTodo');

		this.listItems = options.listItems;
		
		this.vent = options.vent;
		this.vent.on('route:viewtodo', this.showTodo);
	},

	template: _.template('<h2><%= title %></h2><p><%= todoText %></p>'),

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},

	showTodo: function(id) {
		this.model = this.listItems[id.todoId].model;
		console.log(this.listItems, id);
		this.render();
	}
});
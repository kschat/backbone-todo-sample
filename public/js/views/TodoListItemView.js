var TodoListItemView = Backbone.View.extend({
	initialize: function(options) {
		_.bindAll(this, 'render');

		this.vent = options.vent;
	},

	template: _.template('<li><a href="/todo/<%= id %>" data-bypass="true"><%= attributes.title %></a></li>'),

	events: {
		'click a': 'todoClicked'
	},

	render: function() {
		this.$el.html(this.template(this.model));
		return this;
	},

	todoClicked: function(e) {
		this.vent.trigger('route:viewtodo', { todoId: this.model.id });
	}
});
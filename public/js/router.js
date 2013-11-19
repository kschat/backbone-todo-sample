var AppRouter = Backbone.Router.extend({
	constructor: function(options) {
		Backbone.Router.call(this, options);
		this.vent = options.vent;
	},

	routes: {
		'': 'defaultRoute',
		'todo/:id': 'viewTodo'
	},

	defaultRoute: function() {
		this.vent.trigger('route:default');
	},

	viewTodo: function(id) {
		this.vent.trigger('route:viewtodo', { todoId: id });
	}
});
var TodoView = Backbone.View.extend({
	initialize: function(options) {
		_.bindAll(this, 'render', 'buttonClickHandler');

		this.todoTextTextbox = this.$el.find('#title-textbox');
		this.titleTextbox = this.$el.find('#todo-textbox');
		this.submitBtn = this.$el.find('#add-button');

		this.vent = options.vent;
		this.vent.on('route:default', this.render);
	},

	events: {
		'click #add-button': 'buttonClickHandler'
	},

	render: function() {
		return this;
	},

	buttonClickHandler: function(e) {
		e.preventDefault();

		this.vent.trigger('todo:add', { 
			value: new TodoModel({ title: this.titleTextbox.val(), todoText: this.todoTextTextbox.val() }) 
		});
	}
});
;(function($, _, Backbone) {
	'use strict';

	var App = {};

	App.vent = _.extend({}, Backbone.Events);
	App.views = {};
	App.models = {};
	App.collections = {};

	App.router = new AppRouter({ vent: App.vent });
	Backbone.history.start({ pushState: true });

	App.models.todoModel = new TodoModel();
	App.collections.listItems = [];

	$(function() {
		App.views.todoView = new TodoView({ vent: App.vent, el: '.todo-container', model: App.models.todoModel });
		App.views.todoListView = new TodoListView({ vent: App.vent, el: '.todo-list', listItems: App.collections.listItems });
		App.views.todoViewerView = new TodoViewerView({ el: '.todo-viewer', vent: App.vent, listItems: App.collections.listItems, model: new TodoModel() });
	});

	//If an anchor tag has the data-bypass attribute, then use the router to navigate
	$(document).on('click', 'a[data-bypass]', function(e) {
		var href = $(this).attr('href'),
			protocol = this.protocol + '//';

		if(href.slice(protocol.length) !== protocol) {
			e.preventDefault();
			App.router.navigate(href, true);
		}
	});
})(jQuery, _, Backbone);
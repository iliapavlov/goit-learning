requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require(
	[
	  'model',
	  'view',
	  'controller',
	  'jquery'

	],
	function(Model, View, Controller, $) {
		var defaultToDoList = ['Just click to edit tasks', 'task2', 'task3'];
		var model = new Model(defaultToDoList);
		var view = new View(model);
		var controller = new Controller(model, view);
	}
);
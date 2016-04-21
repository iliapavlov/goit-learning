define(
	'view',
	['tmpl', 'jquery'],
	function() {
		return function View(model) {
			
			var self = this;

			function init() {
				var wrapper = tmpl($('#wrapper-template').html());
				
				$('body').prepend(wrapper);
				self.elements = {
					input: $('#input'),
					addBtn: $('#item-add'),
					listContainer: $('#item-list')
				};
				self.elements.input.focus();
				self.renderList(model.data);
			};

			self.renderList = function(data){
				var list = tmpl($('#list-template').html(), {data: data});
				self.elements.listContainer.html(list);
			};

			self.showEdit = function(edit, item) {
				edit.addClass('active');
				self.elements.inputTemp = edit;
				self.elements.inputTemp.focus();
				edit.val(item);
			};

			self.hideEdit = function(){
				self.elements.inputTemp.removeClass('active');
			};

			init();
		};
});
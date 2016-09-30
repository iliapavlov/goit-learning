define(
	'controller',
	['jquery'],
	function() {
		return function Controller(model, view) {
			
			var self = this;

			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.item', editItem);


			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			function removeItem() {
				var item = $(this).attr('data-value');
				console.log(this);
				model.removeItem(item);
				view.renderList(model.data);
			}

			function editItem() {

				var item = $(this).find('.item-delete').attr('data-value');
				var edit = $(this).find('.item-change');

				view.showEdit(edit, item);
				view.elements.inputTemp.on("focusout", function(){
					view.hideEdit;
					var editedItem = view.elements.inputTemp.val();
					model.editItem(item, editedItem);
					view.renderList(model.data);
				});
			}
		};
});
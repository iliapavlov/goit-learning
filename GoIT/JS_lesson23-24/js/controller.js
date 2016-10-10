define(
	'controller',
	['jquery'],
	function() {
		return function Controller(model, view) {
			
			var self = this;

			view.elements.addBtn.on('click', addItem);
			view.elements.input.on('keypress', function(event) {
				if (event.keyCode == 13) {
					addItem();
				}
			});
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
				model.removeItem(item);
				view.renderList(model.data);
			}

			function editItem() {
				var itemToEdit = $(this).find('.item-change');
				var toDoText = $(this).find('.item-delete').attr('data-value');
				function endEdit() {
					view.hideEdit;
					var editedItem = view.elements.inputTemp.val();
					model.editItem(toDoText, editedItem);
					view.renderList(model.data);
				}
				view.showEdit(itemToEdit, toDoText);
				view.elements.inputTemp.on("focusout", endEdit)
					.on('keypress', function(event) {
						if (event.keyCode == 13) {
							endEdit();
						}
					});
			}
		};
});
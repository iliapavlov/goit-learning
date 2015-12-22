var app = {
	createElement: function(markupParams) {
		var element = document.createElement(markupParams.tagName);

		if (markupParams.typeAttr) {
			element.setAttribute('type', markupParams.typeAttr);
		}

		if (markupParams.className) {
			element.className = markupParams.className;
		}

		//element.classList.add(className);
		if (markupParams.content) {
			element.innerHTML = markupParams.content;
		}

		if (markupParams.parentElement) {
			markupParams.parentElement.appendChild(element);
		};
		
		return element;
	},

	generateQuestions: function(questionsAmount, answersAmount) {

		for (var i = 0; i < questionsAmount; i++) {

			this.createElement({
				tagName: 'h3',
				content: 'Вопрос №' + (i + 1),
				parentElement: form
			});

			for (var j = 0; j < answersAmount; j++) {

				var checkboxWrap = this.createElement({
			    	tagName: 'div',
			    	className: 'checkbox',
			    	parentElement: form
			    });

				var label = this.createElement({
					tagName: 'label',
					content: 'Вариант ответа №' + (j + 1),
					parentElement: checkboxWrap
				});

				var checkbox = this.createElement({
					tagName: 'input',
					typeAttr: 'checkbox'
				});

				label.insertAdjacentElement('afterBegin', checkbox);
			}
		}
	}
}


var body = document.querySelector('body');

var containerBT3 = app.createElement({
	tagName: 'div',
	className: 'container',
	parentElement: body
});

app.createElement({
	tagName: 'h1',
	content: 'Тест по программировнию',
	parentElement: containerBT3
});

var form = app.createElement({
	tagName: 'form',
	parentElement: containerBT3
});

app.generateQuestions(3, 3);

app.createElement({
	tagName: 'button',
	typeAttr: 'submit',
	className: 'btn btn-default btn-lg',
	content: 'Проверить мои результаты',
	parentElement: form
});

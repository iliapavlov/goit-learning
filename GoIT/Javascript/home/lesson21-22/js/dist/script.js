'use strict';

$(function () {

	var questions = [{
		text: 'Как правильно "целовать" даме ручку?',
		answers: [{
			text: 'Пожать за руку, потом притянуть ее к своим губам',
			correct: false
			// id: 1
		}, {
			text: 'Начать с кисти и обслюнявить до плеча',
			correct: false
			// id: 2
		}, {
			text: 'Наклониться до уровня руки и "поцеловать" воздух над кистью',
			correct: true
		}]
	}, {
		text: 'Рукопожатие между мужчиной и женщиной: корректно ли это?',
		answers: [{
			text: 'Конечно, нет',
			correct: false
			// id: 1
		}, {
			text: 'Да, но первой подать руку может лишь женщина',
			correct: true
			// id: 2
		}, {
			text: 'Конечно, да, она же свой пацан!',
			correct: false
		}]
	}, {
		text: 'Что такое этикет?',
		answers: [{
			text: '"Подобающие" правила поведения в обществе',
			correct: true
			// id: 1
		}, {
			text: 'Друг этикетки',
			correct: false
			// id: 2
		}, {
			text: 'То же, что и второй вариант, но реально правда',
			correct: false
		}]
	}];

	localStorage.setItem('quest', JSON.stringify(questions));

	var testVar = localStorage.getItem('quest');
	testVar = JSON.parse(testVar);

	var templateTest = $('#test-lesson').html(); // Templating ----------
	var content = tmpl(templateTest, { testdata: testVar });
	var $container = $('.container');
	$container.append(content);

	var calculateResults = function calculateResults() {
		var $groupQuestions = $('.group-questions'); // Collection of areas ---
		var result = 0;
		var resultObj = {
			total: $groupQuestions.length
		};

		for (var i = 0; i <= $groupQuestions.length; i++) {
			var $varAnswers = $($groupQuestions[i]).find('input[type="radio"]');

			for (var j = 0; j <= $varAnswers.length - 1; j++) {
				if (testVar[i].answers[j].correct) {
					if ($varAnswers[j].checked) {
						result++;
					}
				}
			};
		};

		resultObj.myRes = result;
		return resultObj;
	};

	var showResult = function showResult(e) {
		e.preventDefault();
		var resultVar = calculateResults();
		var templateModal = $('#test-result').html();
		var modal = tmpl(templateModal, { resultData: resultVar });

		$container.append(modal);

		$('#myModal').modal();
		$('#myModal').on('hidden.bs.modal', function () {
			$('input[type="radio"]').prop("checked", false); // clear marks ---
			resultVar.myRes = 0;
			resultVar.total = 0;
			$('#myModal').remove();
		});
	};

	$('#submit').on('click', showResult);
});

$(function(){
	'use strict';

	var questions = [
	    {
	    	text: 'Как правильно "целовать" даме ручку?',
	    	answers: [
	    	    {
	    	    	text: 'Пожать за руку, потом притянуть ее к своим губам',
	    	    	correct: false
	    	    	// id: 1
	    	    },
	    	    {
	    	    	text: 'Начать с кисти и обслюнявить до плеча',
	    	    	correct: false
	    	    	// id: 2
	    	    },
	    	    {
	    	    	text: 'Наклониться до уровня руки и "поцеловать" воздух над кистью',
	    	    	correct: true
	    	    }
	    	]
	    },
	    {
	    	text: 'Рукопожатие между мужчиной и женщиной: корректно ли это?',
	    	answers: [
	    	    {
	    	    	text: 'Конечно, нет',
	    	    	correct: false
	    	    	// id: 1
	    	    },
	    	    {
	    	    	text: 'Да, но первой подать руку может лишь женщина',
	    	    	correct: true
	    	    	// id: 2
	    	    },
	    	    {
	    	    	text: 'Конечно, да, она же свой пацан!',
	    	    	correct: false
	    	    }
	    	]
	    },
	    {
	    	text: 'Что такое этикет?',
	    	answers: [
	    	    {
	    	    	text: '"Подобающие" правила поведения в обществе',
	    	    	correct: true
	    	    	// id: 1
	    	    },
	    	    {
	    	    	text: 'Друг этикетки',
	    	    	correct: false
	    	    	// id: 2
	    	    },
	    	    {
	    	    	text: 'То же, что и второй вариант, но реально правда',
	    	    	correct: false
	    	    }
	    	]
	    }
	];

	localStorage.setItem('quest', JSON.stringify(questions));

	var testVar = localStorage.getItem('quest');
	testVar = JSON.parse(testVar);


	var templateTest = $('#test-lesson').html(); // Templating ----------
	var content = tmpl(templateTest, { testdata: testVar });
	var $container = $('.container');
	$container.append(content);


	function calculateResults() {		
    	var $queBoxes = $('.group-questions'); // Collection of areas ---
    	var result = 0;
    	var resultObj = {
    		total: $queBoxes.length
    	};

    	for (var i = 0; i <= $queBoxes.length; i++) {
    		var $checkBoxes = $($queBoxes[i]).find('input[type="checkbox"]');

    		for (var j = 0; j <= $checkBoxes.length - 1; j++) {
    			if (testVar[i].answers[j].correct) {
    				if ($checkBoxes[j].checked) {

    					result++;
    				}
    			}

    		};
    	};

    	resultObj.myRes = result;
    	return resultObj;
	}

	function showResult(e) {
		var resultVar = calculateResults();
    	var templateModal = $('#test-result').html();
    	var modal = tmpl(templateModal, { resultData: resultVar });
    	e.preventDefault();

    	$container.append(modal);
    	
    	$('#myModal').modal();
    	$('#myModal').on('hidden.bs.modal', function (e) { 
	    	$('input[type="checkbox"]').prop( "checked", false ); // clear marks ---
	    	resultVar.myRes = 0;
	    	resultVar.total = 0;
	    	$('#myModal').remove();
	    });
	}

    $('#submit').on('click', showResult);
    
});

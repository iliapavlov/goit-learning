function GoogleCallback (func, data) {
    window[func](data);
}

$(function(){
	$('#search').on('submit', function(e) {
		var text = $('#request').val();
		var key = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';
		e.preventDefault();
		if (text.length) {	
			$('#serp').remove();

			$.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=" + key + "&q=" + text + "&callback=GoogleCallback&context=?",
	        function(data) {
				var results = data.results;

			    var templateResults = $('#result').html();
			    var content = tmpl(templateResults, {data: results});
				$('.container').append(content);
	        });
	    }
	});

	function Human(name, age, height, weight){
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
	}

	function Worker(){
		Human.apply(this, arguments);
		this.job = 'jobless';
		this.salary = 0;
	}

	function Student(){
		Human.apply(this, arguments);
		this.institution = 'entrant';
		this.scholarship = 0;
	}

	Worker.prototype = Object.create(Human.prototype);
	Worker.prototype.constructor = Worker;
	Student.prototype = Object.create(Human.prototype);
	Student.prototype.constructor = Student;
	
	Worker.prototype.work = function(job, salary) {
		this.salary = salary;
		this.job = job
	}

	Student.prototype.watchShows = function(place, amount) {
		this.scholarship = amount;
		this.institution = place;
	}

	var worker1 = new Worker('Santa', 500, 175, 90);
	var worker2 = new Worker('Uncle Tom', 300, 165, 70);
	var worker3 = new Worker('Neo', 31, 180, 80);
	var student1 = new Student('Sunny', 17, 172, 58);
	var student2 = new Student('Bunny', 18, 159, 45);

	worker1.work('baker', 1000);
	worker3.work('biulder', 1000);
	student1.watchShows('KNTEU', 250);
	student2.watchShows('KPI', 300);
	console.log("worker1 =", worker1, "worker2 =", worker2, "worker3 =", worker3);
	console.log("student1 =", student1 ,"student2 =", student2);

})
// ===== PART 1 =====

var x = +prompt('Введите основание степени');
var n = +prompt('Введите степень');

function pow(a, b) {
  var result = 1;

  for (var i = 0; i < b; i++) {
  	result = result * a;
  }

  return result;
}

var powResult = pow(x, n);

console.log(powResult);

// ===== PART 2 =====

var arr = [];

for (var i = 0; i < 5; i++) {
	arr[i] = prompt('Введите имя пользователя');
}

console.log(arr);

var userName = prompt('Введите свое имя');
var flag = false;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === userName) {
		flag = true;
	}
}

if (flag) {
	alert(userName + ', Вы успешно вошли!');
} else {
	alert('Нет пользователя!');
}
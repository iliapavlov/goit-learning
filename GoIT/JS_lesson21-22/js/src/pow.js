var app = {



	pow: function (a, b) {
		var result = 1;

		for (var i = 0; i < b; i++) {
		  	result = result * a;
		}

	    return result;
	}


}

try	{
	module.exports = app;
} catch(e) {};




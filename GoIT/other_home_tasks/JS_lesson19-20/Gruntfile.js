module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    style: {
	      src: ['styles/src/index.scss'],
	      dest: 'styles/src/main.scss',
	    },
	    js: {
	      src: ['js/src/jquery.jcarousel.js', 'js/src/woco.accordion.js', 'js/src/plug-ini.js', 'js/src/script.js'],
	      dest: 'js/main.js',
	    },
	  },
	  sass: {
	    dist: {
	      files: [{
	        expand: true,
	        cwd: 'styles/src',
	        src: ['main.scss'],
	        dest: 'styles',
	        ext: '.css'
	      }]
	    }
	  },
	  watch: {
	  	sass: {
	  		files: ['styles/src/*.scss'],
	  		tasks: ['concat:style', 'sass']
	  	},
	  	myjs: {
	  		files: ['js/src/*.js'],
	  		tasks: ['concat:js']
	  	}
	  }
	});
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'sass', 'watch']);
};
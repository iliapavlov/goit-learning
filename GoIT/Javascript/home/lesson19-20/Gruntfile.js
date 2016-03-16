module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {
	    style: {
	      src: ['styles/src/*.scss'],
	      dest: 'styles/main.scss',
	    },
	    js: {
	      src: ['js/src/jquery.jcarousel.js', 'js/src/script.js'],
	      dest: 'js/main.js',
	    },
	  },
	  sass: {
	    dist: {
	      files: [{
	        expand: true,
	        cwd: 'styles',
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
	  	}
	  }
	});
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'sass', 'watch']);
};
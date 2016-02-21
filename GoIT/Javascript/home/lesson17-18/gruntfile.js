module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: 'js/src/*.js',
        dest: 'js/dist/main.min.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/main.min.js'],
        dest: 'js/dist/main.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
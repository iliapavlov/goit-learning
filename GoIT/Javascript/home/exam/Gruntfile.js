module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            style_base: {
              src: ['css/src/base/src/reset.scss', 'css/src/base/src/*.scss'],
              dest: 'css/src/base/index.scss',
            },
            style_layout: {
              src: ['css/src/layout/src/*.scss'],
              dest: 'css/src/layout/index.scss',
            },
            style_modules: {
              src: ['css/src/modules/src/*.scss'],
              dest: 'css/src/modules/index.scss',
            },
            style_utilities: {
              src: ['css/src/utilities/src/*.scss'],
              dest: 'css/src/utilities/index.scss',
            },
            js: {
              src: ['js/src/jquery.jcarousel.js', 'js/src/masonry.pkgd.js', 'js/src/tmpl.js', 'js/src/script.js'],
              dest: 'js/build/main.js',
            },
        },
        uglify: {
            build: {
                src: 'js/build/main.js',
                dest: 'js/main.min.js'
            }
        },
        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'css/src',
                src: ['main.scss'],
                dest: 'css',
                ext: '.css'
              }]
            }
        },
        watch: {
            sass: {
                files: ['css/src/**/*.scss'],
                tasks: ['concat:style_base', 'concat:style_layout', 'concat:style_modules', 'concat:style_utilities', 'sass']
            },
            myjs: {
                files: ['js/src/*.js'],
                tasks: ['concat:js', 'uglify']
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'sass', 'uglify']);

};
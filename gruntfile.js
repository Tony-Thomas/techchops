module.exports = function(grunt) {

    //Project and task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
         * Grunt Sass
         * Compile Sass to CSS using node-sass
         * https://www.npmjs.com/package/grunt-sass
         **/
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/css/styles.css': 'src/sass/index.scss'
                }
            }
        },
        /**
         * Grunt Contrib watch
         * Monitor files and executes tasks
         * https://www.npmjs.com/package/grunt-contrib-watch
         **/
        watch: {
            sass: {
                files: [
                    'src/sass/index.scss'
                ],
                tasks: [
                    'sass'
                ]
            },
            scripts: {
                files: [
                    'src/js/*.js'
                ],
                tasks: [
                    'uglify'
                ]
            }
        },
        /**
         * Grunt Contrib Uglify
         * Minify Javascript files
         * https://www.npmjs.com/package/grunt-contrib-uglify
         **/
        uglify: {
            my_target: {
                files: {
                    'dist/js/scripts.js': ['src/js/scripts.js', 'node_modules/jquery/dist/jquery.js']
                }
            }
        }
    });
    //Loading Grunt plugins and tasks
    require('load-grunt-tasks')(grunt);

    //Custom tasks
    //grunt.registerTask('default', ['sass']);
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
};

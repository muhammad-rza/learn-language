module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true // <script src="//localhost:35729/livereload.js"></script>
            },
            css: {
                files: ['sass/**/*.scss'],
                // tasks: ['sass','autoprefixer']
                tasks: ['sass']
            },
            assemble: {
                files: ['templates/**/*.hbs'],
                tasks: ['assemble']

            }
        },

        sass: {                              // Task
            mobile: {                         // Dictionary of files
               files:{
                '../public/mobile/assets/css/build.min.css': 'sass/mobile/index.scss',
               }
            }
        },
        express: {
            all: {
                options: {
                    port: 9999,
                    hostname: 'localhost',
                    bases: ['../public'],
                    //  bases: path.resolve(__dirname, 'dev'),

                    livereload: true
                }
            }
        },

        // Assemble template html
        assemble: {

            mobile: {
                options: {
                    flatten: true,
                    layoutdir: 'templates/layouts',
                    layout: 'mobile.hbs',
                    partials: ['templates/mobile/includes/**/*.hbs', 'templates/mobile/parts/**/*.hbs', 'templates/common/**/*.hbs'],
                },
                files: { '../public/mobile': ['templates/mobile/pages/*.hbs'] }
            }

        },




        // grunticon: {
        //     myIcons: {
        //         files: [{
        //             expand: true,
        //             cwd: '../public/assets/img/icons/svgs/',
        //             src: ['*.svg'],
        //             dest: "./common/sass"
        //         }],
        //         options: {
        //             // loadersnippet: "grunticon.loader.js",
        //             enhanceSVG: true,
        //             datasvgcss: 'svg.scss'
        //         }
        //     }
        // },

    })
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //
    grunt.loadNpmTasks('grunt-assemble');
    // grunt.loadNpmTasks('grunt-add-comment');
    //


    grunt.loadNpmTasks('grunt-grunticon');




    grunt.registerTask('build', ['autoprefixer', 'cssmin', 'uglify']);

    grunt.registerTask('server', ['express', 'watch', 'assemble']);


}
'use strict';
module.exports = function(grunt) {
        //load plugins
        grunt.loadNpmTasks('grunt-spritesmith');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('grunt-wiredep');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-concat-css');
        //compress JS files
        grunt.initConfig({
                connect: {
                    sever: {
                        options: {
                            hostname: 'localhost',
                            port: 8000,
                            livereload: true
                        }
                    }
                },
                concat: {
                    options: {
                        separator: ';',
                    },
                    dist: {
                        src: [
                        'bower_components/jquery/dist/jquery.js', //jquery',
                        'bower_components/slick-carousel/slick/slick.min.js', //jquery
                        ],
                        dest: '_/components/js/_bower.js',
                    },
                },
                concat_css: {
                    options: {
                        // Task-specific options go here.
                    },
                    all: {
                        src: [
                        'bower_components/slick-carousel/slick/slick.css'

                        ],
                        dest: "_/components/sass/_bower.scss"
                    },
                }, //concat CSS
                sprite: {
                    all: {
                        src: '_/components/images/sprites/*.png',
                        dest: '_/components/images/sprites/sprites.png',
                        destCss: '_/components/sass/sprites.css',
                        padding: 5
                    }
                },
                wiredep: {
                    task: {
                        src: '*.html' // point to your HTML file.
                    }
                }, // install bower dependecies
                uglify: {
                    my_target: {
                        files: {
                            '_/js/scripts.js': ['_/components/js/*.js']
                        } // files
                    } //my_target
                }, // uglify
                compass: {
                    dev: {
                        options: {
                            config: 'config.rb'
                        }
                    }
                }, // compass
                watch: {
                    options: {
                        spawn: true
                    },
                    /*scripts: {
                      files: ['_/components/js/*.js'],
                      tasks:['uglify']
                    },*/ //scripts
                    sass: {
                        files: ['_/components/sass/*.scss'],
                        tasks: ['compass:dev']
                    },
                    html: {
                        files: ['*.html']
                    }
                } // watch     

            }) //initConfig
        grunt.registerTask('default', ['connect', 'concat','concat_css','uglify', 'watch']);
    } //exports

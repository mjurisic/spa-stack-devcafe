module.exports = function (grunt) {

    grunt.initConfig({
        typescript: {
            base: {
                src: ['ts/app/**/*.ts'],
                dest: 'build/'
            }
        },
        build: {
            files: [],
            tasks: ['typescript']
        },
        concat: {
            options: {
                separator: ';'
            },
            vendor: {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js'
                ],
                dest: 'dist/vendor.js'
            },
            dist: {
                src: ['build/ts/**/*.js'],
                dest: 'dist/app.js'
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['dist/*.js'], dest: 'public/'},
                    {expand: true, cwd: 'ts/app/components/', src: ['**/*.html'], dest: 'public/components'},
                ]

            }
        },
        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },
        watch: {
            express: {
                files: ['ts/**/*'],
                tasks: ['typescript', 'concat', 'copy', 'server'],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            }
        }

    });

    grunt.registerTask('default', ['typescript', 'concat', 'copy', 'server']);
    grunt.registerTask('server', ['express:dev', 'watch']);
    grunt.registerTask('hello', function() {
        console.log('hello');
    })

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
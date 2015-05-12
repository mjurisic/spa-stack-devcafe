module.exports = function (grunt) {

    grunt.initConfig({
        typescript: {
            base: {
                src: ['ts/app/**/*.ts'],
                dest: 'build/',
                options:{
                    removeComments:true
                }
            },
            test: {
                src: ['ts/test/karma/**/*.karma.ts'],
                dest: 'build/karma_tests/',
                options:{
                    removeComments:true
                }
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
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-ui-grid/ui-grid.js'
                ],
                dest: 'dist/vendor.js'
            },
            vendor_test: {
                src: ['bower_components/angular-mocks/angular-mocks.js'],
                dest: 'build/vendor_test.js'
            },
            css: {
                src: [
                    'bower_components/angular-ui-grid/ui-grid.css'
                ],
                dest: 'dist/vendor.css'
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
                    {expand: true, flatten: true, src: ['dist/*.css'], dest: 'public/'},
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
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        watch: {
            express: {
                files: ['ts/**/*'],
                tasks: ['typescript.base', 'concat', 'copy', 'server'],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            }
        }

    });

    grunt.registerTask('default', ['typescript', 'concat', 'copy', 'server']);
    grunt.registerTask('build', ['typescript', 'concat', 'copy']);
    grunt.registerTask('test', ['build', 'karma']);
    grunt.registerTask('server', ['express:dev', 'watch']);
    grunt.registerTask('hello', function () {
        console.log('hello');
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

};
// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'dist/vendor.js',
            'build/vendor_test.js',
            'dist/app.js',
            'public/**/*.html',
            'build/karma_tests/**/*.karma.js'
        ],

        preprocessors: {
            'dist/**/*.html': ['ng-html2js'],
            'dist/**/*.json': ['ng-html2js'],
            'dist/app.js': ['coverage']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'public/',
            moduleName: 'templates'
        },

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        reporters: ['progress','junit', 'coverage'],

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage',
            subdir: 'lcov'
        },

        junitReporter: {
            outputFile: 'coverage/junit/TESTS-xunit.xml'
        },

        colors: true,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};

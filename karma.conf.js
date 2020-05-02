module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.js',
            'spec/**/*_spec.js'
        ],
        preprocessors: {
            'src/**/*.js': ['webpack'],
            'spec/**/*.js': ['webpack']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        webpack: {
            mode: 'development',
            module: {
                rules: [
                    {
                        test: /\.js$/i,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env']
                        }
                    }
                ]
            }
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};

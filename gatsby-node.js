const cssnext = require('postcss-cssnext');

exports.modifyWebpackConfig = config => {
    config.merge({
        postcss: [
            cssnext({
                browsers: ['>1%', 'last 2 versions']
            })
        ]
    });

    config.loader('svg', {
        test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    });

    return config;
};

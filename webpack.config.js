/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

module.exports = [
    {
        name: 'client',
        entry: './client/src/main.tsx',
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist/'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/](react|react-dom|@mui|@emotion)[\\/]/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            }
        },
    }
]
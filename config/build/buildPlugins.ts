import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack = require('webpack');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');
import HtmlWebpackPlugin = require('html-webpack-plugin');
import {BuildOptions} from './types/config';

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            'template': paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            'filename': 'css/[name].[contenthash:8].css',
            'chunkFilename': 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            '__IS_DEV__': JSON.stringify(isDev),
        }),

    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }
    return plugins;
}

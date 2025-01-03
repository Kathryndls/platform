import webpack = require('webpack');
import {BuildOptions} from './types/config';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode,
        'entry': paths.entry,
        'output': {
            'filename': '[name].[contenthash].js',
            'path': paths.build,
            'clean': true,
        },
        'performance': {
            'maxAssetSize': 300000000, // Лимит на размер отдельного файла
            'maxEntrypointSize': 3000000000, // Лимит на общий размер точки входа
        },
        'plugins': buildPlugins(options),
        'module': {
            'rules': buildLoaders(options),
        },
        'resolve': buildResolvers(options),
        'devtool': isDev ? 'inline-source-map' : undefined,
        'devServer': isDev ? buildDevServer(options) : undefined,
    };
}

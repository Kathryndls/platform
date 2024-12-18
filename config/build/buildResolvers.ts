import {ResolveOptions} from 'webpack';
import * as path from 'path';
import {BuildOptions} from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        'extensions': ['.tsx', '.ts', '.js'],
        'preferAbsolute': true,
        'modules': [options.paths.src, 'node_modules'],
        'mainFiles': ['index'],
        'alias': {
            entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
        },
    };
}

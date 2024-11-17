import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getLoginUserName} from './getLoginUserName';

describe('getLoginUserName.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'name',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('name');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
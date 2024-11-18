import {FC, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {ReduxStoreWithManager} from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicLoaderModelProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicLoaderModel: FC<DynamicLoaderModelProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        };
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

    return <div>{children}</div>;
};

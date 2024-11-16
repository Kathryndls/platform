import {FC, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager} from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

interface DynamicLoaderModelProps {
    className?: string;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

export const DynamicLoaderModel: FC<DynamicLoaderModelProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({type: `@DESTROY ${name} reducer`});
                })
            }
        }
    }, []);

    return (
        <>{children}</>
    );
};

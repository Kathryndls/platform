import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Input} from 'shared/ui/Input/Input';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {memo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {DynamicLoaderModel, ReducersList} from 'shared/lib/components/DynamicLoaderModel/DynamicLoaderModel';
import {useAppDispatch} from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import cls from './LoginForm.module.scss';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {getLoginUserName} from '../../model/selectors/getLoginUserName/getLoginUserName';
import {getLoginError} from '../../model/selectors/getLoginError/getLoginError';
import {getLoginPassword} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {getLoginIsLoading} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUserName);
    const error = useSelector(getLoginError);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginCLick = useCallback(async () => {
        const result = await dispatch(loginByUsername({username, password}));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicLoaderModel removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {error && (<Text text={t('Wrong password')} theme={TextTheme.ERROR} />)}
                <Input
                    autoFocus
                    type="text"
                    className={cls.input}
                    onChange={onChangeUsername}
                    placeholder="enter username"
                    value={username}
                />
                <Input
                    type="password"
                    className={cls.input}
                    onChange={onChangePassword}
                    placeholder="enter password"
                    value={password}
                />

                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onLoginCLick}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('enter')}
                </Button>
            </div>
        </DynamicLoaderModel>
    );
});

export default LoginForm;
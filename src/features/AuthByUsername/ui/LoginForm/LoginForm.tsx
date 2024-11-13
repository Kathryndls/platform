import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Input} from 'shared/ui/Input/Input';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';
import {memo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginCLick = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    },[dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization form')}/>
            {error && (<Text text={t('Wrong password')} theme={TextTheme.ERROR}/>)}
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
    );
});

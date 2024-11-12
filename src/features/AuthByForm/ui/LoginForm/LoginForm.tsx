import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";
import { Button } from 'shared/ui/Button/Button';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={'enter username'}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={'enter password'}
            />

            <Button className={cls.loginBtn}>
                {t('enter')}
            </Button>
        </div>
    );
};
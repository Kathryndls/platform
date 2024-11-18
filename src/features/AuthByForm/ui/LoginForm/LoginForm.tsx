import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Input} from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

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
                placeholder={t('enter username')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('enter password')}
            />

            <Button className={cls.loginBtn}>
                {t('enter')}
            </Button>
        </div>
    );
};

import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import React, {useCallback, useState} from 'react';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {LoginModal} from 'features/AuthByUsername';
import cls from './Navbar.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();


    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, []);

    if (authData) {
        return(
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Exit')}
                </Button>
            </div>
        )
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Enter')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};

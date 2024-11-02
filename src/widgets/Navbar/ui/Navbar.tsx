import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import React, {useCallback, useState} from 'react';
import {Modal} from 'shared/ui/Modal/Modal';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation('navbar');

    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Enter')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, veniam.
            </Modal>
        </div>
    );
};

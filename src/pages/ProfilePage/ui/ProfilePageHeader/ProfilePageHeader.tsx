import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import {useTranslation} from "react-i18next";
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import {Text} from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {readonly
                ? (
                    <Button
                        className={cls.editBtn}
                        theme={ThemeButton.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </Button>
                ) : (
                    <Button
                        onClick={onCancelEdit}
                        className={cls.editBtn}
                        theme={ThemeButton.OUTLINE}
                     >
                        {t('Cancel')}
                </Button>
                )}
        </div>
    );
};

import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';
import Loader from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading? :boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastname: (value?: string) => void;
    onChangeFirstname: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {className, data, isLoading, error, readonly, onChangeLastname, onChangeFirstname} = props;
    const {t} = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader/>
            </div>
         )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('There was an error loading profile')}
                    text={t('Try the reloading the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    };

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Your name ')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your second name ')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

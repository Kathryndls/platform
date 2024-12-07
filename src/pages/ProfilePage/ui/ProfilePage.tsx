import {classNames} from 'shared/lib/classNames/classNames';
import {memo, useEffect, useCallback} from 'react';
import { DynamicLoaderModel, ReducersList } from 'shared/lib/components/DynamicLoaderModel/DynamicLoaderModel';
import {fetchProfileData, getProfileData, getProfileForm, getProfileError, getProfileIsLoading,
    getProfileReadonly, profileActions, ProfileCard, profileReducer} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';
const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        const validateValue = value?.replace(/\D+/gm, '');
        dispatch(profileActions.updateProfile({age: Number( validateValue || 0)}));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        if (currency) {
            dispatch(profileActions.updateProfile({currency}));
        }
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        if (country) {
            dispatch(profileActions.updateProfile({country}));
        }
    }, [dispatch]);


    return (
        <DynamicLoaderModel reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={formData}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicLoaderModel>
    );
});

export default ProfilePage;
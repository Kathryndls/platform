import {classNames} from 'shared/lib/classNames/classNames';
import {memo, useEffect, useCallback} from 'react';
import { DynamicLoaderModel, ReducersList } from 'shared/lib/components/DynamicLoaderModel/DynamicLoaderModel';
import {fetchProfileData, getProfileData, getProfileError, getProfileIsLoading,
    getProfileReadonly, profileActions, ProfileCard, profileReducer} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileData);
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

    return (
        <DynamicLoaderModel reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={data}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    isLoading={isLoading}
                    error={error}
                />
            </div>
        </DynamicLoaderModel>
    );
});

export default ProfilePage;
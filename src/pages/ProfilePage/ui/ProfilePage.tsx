import {classNames} from 'shared/lib/classNames/classNames';
import {memo, useEffect} from 'react';
import { DynamicLoaderModel, ReducersList } from 'shared/lib/components/DynamicLoaderModel/DynamicLoaderModel';
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hook/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicLoaderModel reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicLoaderModel>
    );
});

export default ProfilePage;
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import { memo } from 'react';
import { DynamicLoaderModel, ReducersList } from 'shared/lib/components/DynamicLoaderModel/DynamicLoaderModel';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({className}: ProfilePageProps) => {
    const {t} = useTranslation();

    return (
        <DynamicLoaderModel reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('PROFILE PAGE')}
            </div>
        </DynamicLoaderModel>
    );
});

export default ProfilePage;
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = memo(() => {
    const {t} = useTranslation('main');

    return (
        <div>
            {t('Main Page')}
        </div>
    );
});

export default MainPage;

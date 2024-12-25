import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';

interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = memo(() => {
    const {t} = useTranslation('about');

    return (
        <div>
            {t('About ')}
        </div>
    );
});

export default AboutPage;

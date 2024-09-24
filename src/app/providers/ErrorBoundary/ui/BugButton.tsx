import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

// Компонент для тестирования ErrorBoundary
const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    const {t} = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <button onClick={onThrow}>{t('Throw Error')}</button>;
};

export default BugButton;
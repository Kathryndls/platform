import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('An error has occurred')}</p>
            <button onClick={reloadPage}>
                {t('Update the page')}
            </button>
        </div>
    );
};

export default PageError;
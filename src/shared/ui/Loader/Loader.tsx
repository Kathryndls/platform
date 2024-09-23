import {classNames} from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

const Loader = ({className}: LoaderProps) => (
    <div className={classNames('page__loader', {}, [className])}>
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default Loader;
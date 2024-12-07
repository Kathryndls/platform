import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import {useTranslation} from "react-i18next";
import {useMemo} from 'react';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({className, src, size, alt}: AvatarProps) => {
    const {t} = useTranslation();

    const mods: Mods = {};

    const styles = useMemo(() => ({
        with: size || 100 ,
        height: size || 100 ,
    }), [size]);

    return (
        <img
            alt={alt}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
        />
    );
};

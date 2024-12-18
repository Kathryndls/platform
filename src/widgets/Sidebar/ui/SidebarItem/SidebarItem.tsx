import {useTranslation} from 'react-i18next';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {classNames} from 'shared/lib/classNames/classNames';
import {SidebarItemType} from '../../model/items';
import cls from './SidebarItem.module.scss';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = ({item, collapsed}: SidebarItemProps) => {
    const {t} = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item?.authOnly && !isAuth) {
        return null;
    }

    if (!item) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, {[cls.collapsed]: collapsed})}
            to={item.path}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
};

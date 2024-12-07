import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import {useTranslation} from "react-i18next";
import { memo, useMemo } from 'react';
import {
    ChangeEvent
} from "../../../../../../../../../Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {t} = useTranslation();
    const {className, label, options, value, readonly, onChange} = props;
    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    } 

    const listOptions = useMemo(() => options?.map(opt => (
        <option
            className={cls.option}
            value={(opt.value)}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), []);

    return (
        <div className={classNames(cls.Select, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {listOptions}
            </select>
        </div>
    );
});

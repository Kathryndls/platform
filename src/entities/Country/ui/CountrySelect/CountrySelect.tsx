import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from "react-i18next";
import { Select } from 'shared/ui/Select/Select';
import {memo, useCallback} from "react";
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Ukraine, content: Country.Ukraine},
    {value: Country.Spanish, content: Country.Spanish},
    {value: Country.Polish, content: Country.Polish},
    {value: Country.Italy, content: Country.Italy},
    {value: Country.Canada, content: Country.Canada},
];

export const CountrySelect =  memo(({className, value, onChange, readonly}: CountrySelectProps) => {
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country );
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t("Enter country")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

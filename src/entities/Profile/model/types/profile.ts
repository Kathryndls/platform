import {Country, Currency} from 'shared/const/common';

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: Country;
    city: Currency;
    username: string;
    avatar:string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
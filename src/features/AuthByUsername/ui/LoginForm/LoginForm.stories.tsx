import {ComponentMeta, ComponentStory} from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'shared/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    className: 'example-class',
    onSuccess: () => console.log('Success!'),
};

Primary.decorators = [StoreDecorator({
    loginForm: {username: '123', password: 'asd'},
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: {username: '123', password: 'asd', error: 'ERROR'},
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: {isLoading: true},
})];
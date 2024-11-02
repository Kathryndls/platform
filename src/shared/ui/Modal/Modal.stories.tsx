import React from 'react';
import { Modal } from './Modal';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
// import {Modal} from "shared/ui/Modal/Modal";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. A, veniam',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'lorem ipsum dolor sit amet, consectetur adipisicing elit. A, veniam',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
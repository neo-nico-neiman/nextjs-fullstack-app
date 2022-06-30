import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AuthButton from './AuthButton';
import { mockAuthButtonProps } from './AuthButton.mocks';


export default {
  title: 'Components/AuthButton',
  component: AuthButton,
} as ComponentMeta<typeof AuthButton>;

const Template: ComponentStory<typeof AuthButton> = (args) => <AuthButton {...args} />;

export const Example = Template.bind({});
Example.args = {...mockAuthButtonProps.base};

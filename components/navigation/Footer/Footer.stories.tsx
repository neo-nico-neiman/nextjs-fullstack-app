import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Navigation/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;
Template.args = {};

export const Example = Template.bind({});
Example.args = {};

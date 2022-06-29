import { ComponentMeta, ComponentStory } from '@storybook/react';

import Search from './Search';

export default {
  title: 'Utility/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;
Template.args = {};

export const Example = Template.bind({});
Example.args = {};

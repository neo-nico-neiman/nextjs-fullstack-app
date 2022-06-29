import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchResult from './SearchResult';
import { mockSearchResultProps } from './SearchResult.mocks';

export default {
  title: 'Utility/SearchResult',
  component: SearchResult,
} as ComponentMeta<typeof SearchResult>;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Example = Template.bind({});
Example.args = { ...mockSearchResultProps.base };

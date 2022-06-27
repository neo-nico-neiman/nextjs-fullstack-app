import { ISidebarLayout } from './SidebarLayout';

const base: ISidebarLayout = {
  sampleTextProp: 'Hello world!',
};

const alt: ISidebarLayout = {
  sampleTextProp: 'alternative Hello world!',
};

export const mockSidebarLayoutProps = {
  base,
  alt,
};

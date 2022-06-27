import { IBaseTemplate } from './BaseTemplate';

const base: IBaseTemplate = {
  sampleTextProp: 'Hello world!',
};

const alt: IBaseTemplate = {
  sampleTextProp: 'alternative Hello world!',
};

export const mockBaseTemplateProps = {
  base,
  alt,
};

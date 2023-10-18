import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TChannelName =
  | 'Direct link'
  | 'Text link'
  | 'Button'
  | 'Calculator'
  | 'Bubble'
  | 'Shop'
  | 'Marketing'
  | 'Point of Sale';

export type TSettings = {
  name: string;
  icon?: StaticImport;
  component: string;
  checked?: boolean;
  id?: string;
};

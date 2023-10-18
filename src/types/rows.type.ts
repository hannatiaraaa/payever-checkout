import { TThemeType } from './theme.type';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type TCommonItem = {
  name: string;
  icon?: StaticImport;
  iconKey?: string;
  theme?: TThemeType;
  checked?: boolean;
  hasToggle?: boolean;
  rightText?: string;
};

export type TForwardItem = {
  name: string;
  icon?: StaticImport;
};

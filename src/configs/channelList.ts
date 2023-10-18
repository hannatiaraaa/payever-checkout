import type { TChannelName } from '@/types/features.type';

export const channelIcons = {
  'Direct link': require('@/assets/channels/direct_link.svg'),
  'Text link': require('@/assets/channels/text_link.svg'),
  Button: require('@/assets/channels/button.svg'),
  Calculator: require('@/assets/channels/calculator.svg'),
  Bubble: require('@/assets/channels/bubble.svg'),
  Shop: require('@/assets/channels/shop.svg'),
  Marketing: require('@/assets/channels/marketing.svg'),
  'Point of Sale': require('@/assets/channels/point_of_sale.svg'),
};

export const channels: TChannelName[] = [
  'Direct link',
  'Text link',
  'Button',
  'Calculator',
  'Bubble',
  'Shop',
  'Marketing',
  'Point of Sale',
];

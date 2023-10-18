export const connectIcons = {
  'Direct link': require('@/assets/connect/link.svg'),
  'Text link': require('@/assets/connect/link.svg'),
  Button: require('@/assets/connect/button.svg'),
  Calculator: require('@/assets/connect/calculator.svg'),
  Bubble: require('@/assets/connect/bubble.svg'),
  Shop: require('@/assets/connect/shop.svg'),
  Marketing: require('@/assets/connect/marketing.svg'),
  'Point of Sale': require('@/assets/connect/bubble.svg'),
  'Twilio SMS': require('@/assets/connect/Twilio_SMS.svg'),
  UPS: require('@/assets/connect/UPS.svg'),
  FedEx: require('@/assets/connect/FedEx.svg'),
  DHL: require('@/assets/connect/DHL.svg'),
  none_connected: require('@/assets/connect/none_connected.svg'),
};

export const shippingList = [
  {
    name: 'Twilio SMS',
    icon: connectIcons['Twilio SMS'],
    checked: true,
  },
  {
    name: 'UPS',
    icon: connectIcons.UPS,
    checked: true,
  },
  {
    name: 'FedEx',
    icon: connectIcons.FedEx,
    checked: true,
  },
  {
    name: 'DHL',
    icon: connectIcons.DHL,
    checked: true,
  },
];

export const insuranceList = [
  {
    name: 'None Connected',
    icon: connectIcons.none_connected,
  },
];

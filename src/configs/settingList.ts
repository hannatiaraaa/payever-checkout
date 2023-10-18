import type { TSettings } from '@/types/features.type';

const icons = {
  testing_mode: require('@/assets/settings/testing_mode.svg'),
  CSP_allowed_hosts: require('@/assets/settings/CSP_allowed_hosts.svg'),
  policies: require('@/assets/settings/policies.svg'),
  color_and_style: require('@/assets/settings/color_and_style.svg'),
  language: require('@/assets/settings/language.svg'),
  channel_set_ID: require('@/assets/settings/channel_set_ID.svg'),
  notifications: require('@/assets/settings/notifications.svg'),
};

export const settings: TSettings[] = [
  {
    name: 'Testing mode',
    icon: icons.testing_mode,
    component: 'Common',
    checked: true,
  },
  {
    name: 'CSP allowed hosts',
    icon: icons.CSP_allowed_hosts,
    component: 'Forward',
  },
  {
    name: 'Policies',
    icon: icons.policies,
    component: 'Forward',
  },
  {
    name: 'Color & style',
    icon: icons.color_and_style,
    component: 'Forward',
  },
  {
    name: 'Language',
    icon: icons.language,
    component: 'Forward',
  },
  {
    name: 'Channel set ID',
    icon: icons.channel_set_ID,
    component: 'Channel set ID',
    id: '7e5462ed-6d55-446b-977',
  },
  {
    name: 'Notifications',
    icon: icons.notifications,
    component: 'Forward',
  },
];

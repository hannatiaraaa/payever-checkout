export type TPageName = 'Bikezilla' | 'Edit' | 'Payment Options' | 'Channels' | 'Connect' | 'Settings';

export type TDockSidebar = {
  name: TPageName;
  route?: string;
  isActive?: boolean;
};

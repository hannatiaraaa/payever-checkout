import React from 'react';
import PageTitle from '@/components/texts/PageTitle';
import RowContainer from '@/components/containers/RowContainer';
import { settings } from '@/configs/settingList';
import SettingsItem from './components/Item';

const Settings = () => {
  return (
    <div className='gap-3 flex flex-col w-full lg:w-2/3'>
      <PageTitle title='Settings' />
      <RowContainer>
        {settings.map((item) => (
          <SettingsItem
            key={item.name}
            item={item}
          />
        ))}
      </RowContainer>
    </div>
  );
};

export default Settings;

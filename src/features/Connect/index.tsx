import React from 'react';
import PageTitle from '@/components/texts/PageTitle';
import RowContainer from '@/components/containers/RowContainer';
import { channels } from '@/configs/channelList';
import ForwardItem from '@/components/rows/ForwardItem';
import { connectIcons, insuranceList, shippingList } from '@/configs/connectList';
import SectionList from './components/SectionList';
import Button from '@/components/buttons/Button';

const Connect = () => {
  return (
    <div className='gap-3 flex flex-col w-full lg:w-2/3'>
      <PageTitle title='Channels' />
      <RowContainer>
        {channels.map((name) => (
          <ForwardItem
            key={name}
            name={name}
            icon={connectIcons[name]}
          />
        ))}
      </RowContainer>
      <SectionList
        title='Shipping'
        data={shippingList}
        hasToggle
        rightText='Install'
      />
      <Button
        title='Connect Now'
        textClassName='text-blue-highlight'
        className='theme-extra-bg-2'
      />

      <SectionList
        title='Insurance'
        data={insuranceList}
        rightText='Install'
      />
    </div>
  );
};

export default Connect;

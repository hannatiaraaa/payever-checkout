import React from 'react';
import PageTitle from '@/components/texts/PageTitle';
import RowContainer from '@/components/containers/RowContainer';
import { channelIcons, channels } from '@/configs/channelList';
import ForwardItem from '@/components/rows/ForwardItem';
import Button from '@/components/buttons/Button';

const Channels = () => {
  return (
    <div className='gap-3 flex flex-col w-full lg:w-2/3'>
      <PageTitle title='Channels' />
      <RowContainer>
        {channels.map((name) => (
          <ForwardItem
            key={name}
            name={name}
            icon={channelIcons[name]}
          />
        ))}
      </RowContainer>

      <Button
        title='Add'
        textClassName='text-blue-highlight'
        className='theme-extra-bg-2'
      />
    </div>
  );
};

export default Channels;

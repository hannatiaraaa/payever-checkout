import React from 'react';
import type { TCommonItem } from '@/types/rows.type';
import { useTheme } from 'next-themes';
import SectionTitle from '@/components/texts/SectionTitle';
import RowContainer from '@/components/containers/RowContainer';
import CommonItem from '@/components/rows/CommonItem';

type Props = {
  title: string;
  data: Partial<TCommonItem>[] | [];
  hasToggle?: boolean;
  rightText?: string;
  iconKeyForAll?: string;
};

const PaymentList = ({ title, data, iconKeyForAll, hasToggle, rightText }: Props) => {
  const { systemTheme } = useTheme();
  return (
    <div>
      <SectionTitle title={title} />
      <RowContainer>
        {data.map(({ name, iconKey, checked }) => (
          <CommonItem
            key={name}
            name={name as string}
            hasToggle={hasToggle}
            theme={systemTheme}
            iconKey={iconKeyForAll ?? iconKey}
            checked={checked}
            rightText={rightText}
          />
        ))}
      </RowContainer>
    </div>
  );
};

export default PaymentList;

import React from 'react';
import type { TCommonItem } from '@/types/rows.type';
import { useTheme } from 'next-themes';
import SectionTitle from '@/components/texts/SectionTitle';
import RowContainer from '@/components/containers/RowContainer';
import CommonItem from '@/components/rows/CommonItem';

type Props = {
  title: string;
  data: TCommonItem[] | [];
  hasToggle?: boolean;
  rightText?: string;
};

const SectionList = ({ title, data, hasToggle, rightText }: Props) => {
  const { systemTheme } = useTheme();
  return (
    <div>
      <SectionTitle title={title} />
      <RowContainer>
        {data.map(({ name, icon, checked }) => (
          <CommonItem
            key={name}
            hasToggle={hasToggle}
            name={name}
            icon={icon}
            theme={systemTheme}
            checked={checked}
            rightText={rightText}
          />
        ))}
      </RowContainer>
    </div>
  );
};

export default SectionList;

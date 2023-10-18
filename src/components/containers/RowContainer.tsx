import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const RowContainer = ({ children, className }: Props) => {
  return <div className={`rounded-xl theme-extra-bg-2 ${className}`}>{children}</div>;
};

export default RowContainer;

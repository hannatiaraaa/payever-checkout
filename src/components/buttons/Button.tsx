import React from 'react';

type Props = {
  title?: string;
  className?: string;
  textClassName?: string;
};

const Button = ({ title, className, textClassName }: Props) => {
  return (
    <button className={`w-full p-1 rounded-xl ${className}`}>
      <p className={`text-base text-center ${textClassName}`}>{title}</p>
    </button>
  );
};

export default Button;

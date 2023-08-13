'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;

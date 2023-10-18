import React from 'react';
import { EColor } from '@/configs/color.enum';
import type { TDockSidebar } from '@/types/nav.type';

type Props = Partial<TDockSidebar>;

const DockSidebarIcons = ({ name, isActive }: Props) => {
  const color = isActive ? EColor.white : EColor['icon-inactive'];
  const icon = {
    Bikezilla: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <path
          d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z'
          fill='url(#paint0_linear_594_2159)'
        />
        <path
          d='M3.63704 11L4.12904 9.58699H6.48104L6.97704 11H8.07704L5.78004 4.92999H4.83404L2.54004 11H3.63604H3.63704ZM6.18504 8.73599H4.42504L5.30504 6.21799L6.18504 8.73599ZM10.979 11C11.659 11 12.183 10.847 12.549 10.541C12.914 10.236 13.096 9.79799 13.096 9.22799C13.096 8.88399 13.006 8.58799 12.827 8.34199C12.648 8.09599 12.395 7.92899 12.067 7.83999C12.356 7.71799 12.575 7.54599 12.725 7.32299C12.875 7.10099 12.95 6.85099 12.95 6.57299C12.95 6.02799 12.771 5.61799 12.413 5.34299C12.054 5.06799 11.532 4.92999 10.845 4.92999H8.76504V11H10.979ZM10.853 7.48599H9.82004V5.77999H10.845C11.206 5.77999 11.473 5.84599 11.643 5.97999C11.814 6.11299 11.9 6.32999 11.9 6.62999C11.9 6.90299 11.807 7.11299 11.623 7.26199C11.438 7.40999 11.181 7.48499 10.853 7.48499V7.48599ZM10.991 10.158H9.82004V8.25999H11.079C11.723 8.27399 12.046 8.59599 12.046 9.22699C12.046 9.51899 11.953 9.74699 11.766 9.91099C11.58 10.075 11.322 10.157 10.991 10.157V10.158Z'
          fill='white'
        />
        <defs>
          <linearGradient
            id='paint0_linear_594_2159'
            x1='8'
            y1='0'
            x2='8'
            y2='16'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#A3A9B8' />
            <stop
              offset='1'
              stop-color='#868A95'
            />
          </linearGradient>
        </defs>
      </svg>
    ),
    Edit: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <g clip-path='url(#clip0_594_2169)'>
          <path
            d='M13.0996 0.5L15.4996 2.9'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M6.8 11.6L13.7 4.69999L11.3 2.29999L4.4 9.19999L3.5 12.5L6.8 11.6Z'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M0.5 15.5H15.5'
            stroke={color}
            stroke-linecap='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_594_2169'>
            <rect
              width='16'
              height='16'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    'Payment Options': (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <path
          d='M12.517 4.76138V3.85227C12.517 2.63636 11.8693 2 10.642 2H2.36932C1.13636 2 0.5 2.63068 0.5 3.85227V9.59659C0.5 10.8125 1.13636 11.4489 2.36932 11.4489H3.48297M12.517 4.76138H13.625C14.8523 4.76138 15.5 5.39775 15.5 6.61366V12.358C15.5 13.5739 14.8523 14.2102 13.625 14.2102H5.35229C4.11933 14.2102 3.48297 13.5739 3.48297 12.358V11.4489M12.517 4.76138H5.35229C4.11933 4.76138 3.48297 5.39206 3.48297 6.61366V11.4489'
          stroke={color}
        />
        <rect
          x='5'
          y='11'
          width='2'
          height='1.5'
          rx='0.5'
          fill={color}
        />
        <path
          d='M3 8.09717L15 8.09717'
          stroke={color}
          stroke-width='1.5'
        />
      </svg>
    ),
    Channels: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <path
          d='M8.0001 10C9.10467 10 10.0001 9.10457 10.0001 8C10.0001 6.89543 9.10467 6 8.0001 6M8.0001 10C6.89553 10 6.0001 9.10457 6.0001 8C6.0001 6.89543 6.89553 6 8.0001 6M8.0001 10V12.5M8.0001 6V3.5M8.0001 3.5C8.82853 3.5 9.5001 2.82843 9.5001 2C9.5001 1.17157 8.82853 0.5 8.0001 0.5C7.17167 0.5 6.5001 1.17157 6.5001 2C6.5001 2.82843 7.17167 3.5 8.0001 3.5ZM4.103 5.75003C4.51721 5.0326 4.2714 4.11521 3.55396 3.701C2.83652 3.28678 1.91914 3.5326 1.50492 4.25003C1.09071 4.96747 1.33652 5.88486 2.05396 6.29907C2.7714 6.71329 3.68879 6.46747 4.103 5.75003ZM4.103 5.75003L6.26806 7.00003M4.103 10.25C3.68879 9.5326 2.7714 9.28678 2.05396 9.701C1.33652 10.1152 1.09071 11.0326 1.50492 11.75C1.91914 12.4675 2.83652 12.7133 3.55396 12.2991C4.2714 11.8849 4.51721 10.9675 4.103 10.25ZM4.103 10.25L6.26806 9.00003M8.0001 12.5C7.17167 12.5 6.5001 13.1716 6.5001 14C6.5001 14.8284 7.17167 15.5 8.0001 15.5C8.82853 15.5 9.5001 14.8284 9.5001 14C9.5001 13.1716 8.82853 12.5 8.0001 12.5ZM11.8972 10.25C11.483 10.9674 11.7288 11.8848 12.4462 12.299C13.1637 12.7132 14.0811 12.4674 14.4953 11.75C14.9095 11.0325 14.6637 10.1151 13.9462 9.70093C13.2288 9.28671 12.3114 9.53253 11.8972 10.25ZM11.8972 10.25L9.73214 8.99997M11.8972 5.74997C12.3114 6.4674 13.2288 6.71322 13.9462 6.299C14.6637 5.88479 14.9095 4.9674 14.4953 4.24997C14.0811 3.53253 13.1637 3.28671 12.4462 3.70093C11.7288 4.11514 11.483 5.03253 11.8972 5.74997ZM11.8972 5.74997L9.73214 6.99997'
          stroke={color}
          stroke-linecap='round'
        />
      </svg>
    ),
    Connect: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <g clip-path='url(#clip0_584_11776)'>
          <path
            d='M8 1V15'
            stroke={color}
            stroke-linecap='round'
          />
          <path
            d='M15 8L1 8'
            stroke={color}
            stroke-linecap='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_584_11776'>
            <rect
              width='16'
              height='16'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    Settings: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
      >
        <g clip-path='url(#clip0_584_11783)'>
          <path
            d='M8 13.9999C9.5913 13.9999 11.1174 13.3677 12.2426 12.2425C13.3679 11.1173 14 9.59118 14 7.99988C14 6.40858 13.3679 4.88246 12.2426 3.75724C11.1174 2.63202 9.5913 1.99988 8 1.99988C6.4087 1.99988 4.88258 2.63202 3.75736 3.75724C2.63214 4.88246 2 6.40858 2 7.99988C2 9.59118 2.63214 11.1173 3.75736 12.2425C4.88258 13.3677 6.4087 13.9999 8 13.9999Z'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M8 9.49988C8.39782 9.49988 8.77936 9.34184 9.06066 9.06054C9.34196 8.77923 9.5 8.3977 9.5 7.99988C9.5 7.60205 9.34196 7.22052 9.06066 6.93922C8.77936 6.65791 8.39782 6.49988 8 6.49988C7.60218 6.49988 7.22064 6.65791 6.93934 6.93922C6.65804 7.22052 6.5 7.60205 6.5 7.99988C6.5 8.3977 6.65804 8.77923 6.93934 9.06054C7.22064 9.34184 7.60218 9.49988 8 9.49988Z'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M8 0.5V2'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M8 15.5V14'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M11.75 14.495L11 13.1975'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M7.25 6.70251L4.25 1.505'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M14.4948 11.7499L13.1973 10.9999'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M1.50488 4.24988L2.80238 4.99988'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M9.5 8H15.5'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M0.5 8H2'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M14.4948 4.24988L13.1973 4.99988'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M1.50488 11.7499L2.80238 10.9999'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M11.75 1.505L11 2.80251'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M7.25 9.29749L4.25 14.495'
            stroke={color}
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_584_11783'>
            <rect
              width='16'
              height='16'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  return icon[name as keyof typeof icon];
};

export default DockSidebarIcons;

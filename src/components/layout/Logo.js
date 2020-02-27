import * as React from 'react';

function logo(props) {
  return (
    <svg
      viewBox='0 0 851 704'
      fillRule='evenodd'
      clipRule='evenodd'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={1.5}
      className='logo'
    >
      <path
        d='M425.336 231.858c0 106.782-86.694 193.476-193.478 193.476-106.785 0-193.479-86.694-193.479-193.476 0-106.784 86.694-193.478 193.479-193.478 30.45 0 59.266 7.05 84.904 19.604m108.574 173.874H231.858M812.292 231.858c0 106.782-86.694 193.476-193.478 193.476-106.785 0-193.478-86.694-193.478-193.476 0-106.784 86.693-193.478 193.478-193.478 30.45 0 59.266 7.05 84.904 19.604m108.574 173.874H618.814M178.848 576.044s76.93 88.964 246.488 88.964c169.557 0 246.49-88.964 246.49-88.964'
        fill='none'
        stroke={props.fill}
        strokeWidth={76.7696614}
      />
    </svg>
  );
}

export default logo;

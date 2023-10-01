import React from 'react';
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = ({title, isMoney, link, icon}) => {
  let data;

  const amount = 100;
  const diff = 20;


  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{title}</span>
        <span className='counter'>{isMoney && "$"} {amount}</span>
        <span className='link'>{link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
          20%
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
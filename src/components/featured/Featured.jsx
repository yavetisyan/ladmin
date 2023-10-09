import React from 'react';
import './featured.scss'
import {KeyboardArrowDown, MoreVert} from "@mui/icons-material";
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desk">Previous transactions processing.Last payments may not be included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize='small'/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Lat Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize='small'/>
              <div className="resultAmount">$9.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Mount</div>
            <div className="itemResult positive">
              <KeyboardArrowDown fontSize='small'/>
              <div className="resultAmount">$25.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
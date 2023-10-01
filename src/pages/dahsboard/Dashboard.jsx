import React from 'react';
import './dashboard.scss'
import Widget from "../../components/widget/Widget";
import data from "../../utils/widgetData";

const Dashboard = () => {
  return (
    <div className='dashboard'>

      {data.map((item) => (
        <Widget title={item.title} isMoney={item.isMoney} link={item.link} icon={item.icon}/>
      ))}
      
    </div>
  );
};

export default Dashboard;
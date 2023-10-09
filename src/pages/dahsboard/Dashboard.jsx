import React from 'react';
import './dashboard.scss'
import Widget from "../../components/widget/Widget";
import data from "../../utils/widgetData";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Dashboard = () => {
  return (
    <div className='dashboard'>

      <div className="widgets">
        {data.map((item) => (
          <Widget title={item.title} isMoney={item.isMoney} link={item.link} icon={item.icon}/>
        ))}
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>

    </div>
  );
};

export default Dashboard;
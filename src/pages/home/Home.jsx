import React from 'react';
import './home.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {Outlet} from "react-router-dom";

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          {/*<Widget/>*/}
          {/*<Widget/>*/}
          {/*<Widget/>*/}
          {/*<Widget/>*/}
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Home;
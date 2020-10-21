import React from 'react';

import { page01 } from './pages/page01.jsx';
import { page02 } from './pages/page02.jsx';
import { Home } from './pages/Home.jsx';
import { Admin } from './pages/Admin.jsx';

import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { NavBar } from "./cmps/NavBar.jsx";
import { SideBar } from './cmps/SideBar.jsx';

// import Admin from './pages/Admin.jsx';

function _App() {
  return (
    <div className="App">
      <NavBar />
      <div className="outter-container">
        <div className="inner-container">
          <div className="ra">
            <div className="w200">
              <SideBar />
            </div>
            <div className="bg-01 center-part">
              <Switch>
                <Route exact component={Home} path={'/'} />
                <Route exact component={page01} path={'/page-01'} />
                <Route exact component={page02} path={'/page-02'} />
                <Route exact component={Admin} path={'/admin'} />
              </Switch>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default withRouter(_App);

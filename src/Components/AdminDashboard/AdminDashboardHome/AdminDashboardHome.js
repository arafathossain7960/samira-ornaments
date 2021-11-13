import React from 'react';
import './AdminDashboardHome.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import AddCollection from '../AddCollection/AddCollection';
import Admin from '../Admin/Admin';
import AllOrders from '../AllOrders/AllOrders';
import MakeAddmin from '../MakeAddamin/MakeAddmin';
import useAuth from '../../../hooks/useAuth';

const AdminDashboardHome = () => {
  const {logoutUser, user}=useAuth();
    let { path, url } = useRouteMatch();
    return (
    <div>
    <div className="py-2 text-center admin-head-bg">
    <h1> Admin dashboard</h1>
    </div>
    <div className="row">
        <div className="col-2 admin-menu-bg">
        <h4>Menubar</h4>
      <p><Link to={`${url}/`}>Admin</Link></p>     
      <p><Link to={`${url}/addCollection`}>Add New Collection</Link></p> 
      <p><Link to={`${url}/makeAddmin`}>Make admin</Link></p> 
      
      <p><Link to={`${url}/allOrders`}>AllOrders</Link></p> 
      <p><Link onClick={logoutUser}>Log out</Link></p> 

        
        </div>
      {/* start display area  */}
        <div className="col-10 text-center py-2">
       
        <Switch>
        <Route exact path={`${path}/`}>
            <Admin></Admin>
        </Route>
        <Route path={`${path}/addCollection`}>
         <AddCollection></AddCollection>
        </Route>
        <Route path={`${path}/makeAddmin`}>
         <MakeAddmin></MakeAddmin>
        </Route>
        <Route path={`${path}/allOrders`}>
         <AllOrders></AllOrders>
        </Route>

      </Switch>
      
        </div>

    </div>
    </div>
    );
};

export default AdminDashboardHome;
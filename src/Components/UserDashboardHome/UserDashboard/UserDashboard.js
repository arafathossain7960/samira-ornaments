import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import UserInfo from '../UserInfo/UserInfo';


const UserDashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
    <div className="py-2 text-center admin-head-bg">
        <h1> User Dashboard </h1>
    </div>
    <div className="row">
        <div className="col-2 admin-menu-bg">
            <h4>Menubar</h4>
          
            <p><Link to={`${url}/userInfo`}>UserInfo</Link></p>
            <p><Link to={`${url}/myOrders`}>My Orders</Link></p>
            <p><Link to={`${url}/payment`}>Payment History</Link></p>
            <p><Link to={`${url}/review`}>Add Review</Link></p>

        </div>
        <div className="col-10">
         <Switch>
             <Route  path={`${path}/myOrders`}>
             <MyOrders></MyOrders>
             </Route>
             <Route  path={`${path}/payment`}>
             <Payment></Payment>
             </Route>
             <Route  path={`${path}/review`}>
             <Review></Review>
             </Route>
             <Route  path={`${path}/userInfo`}>
             <UserInfo></UserInfo>
             </Route>
             
       
      </Switch>
            </div>



        </div>




        </div>
        
    );
};

export default UserDashboard;
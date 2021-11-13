import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

import Home from "./Components/HomePage/Home/Home";
import Header from "./Components/HomePage/Header/Header";
import Footer from "./Components/HomePage/Footer/Footer";
import PlaceOrder from "./Components/OrderPages/PlaceOrder/PlaceOrder";
import Collections from "./Components/MoreCollection/Collections/Collections";
import AdminDashboardHome from "./Components/AdminDashboard/AdminDashboardHome/AdminDashboardHome";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivetRoute from "./Components/Authentication/PrivetRoute/PrivetRoute";
import UserDashboard from "./Components/UserDashboardHome/UserDashboard/UserDashboard";

function App() {
  return (
   <AuthProvider>
    <Router>
   <Header></Header>
     <Switch>
    <Route exact path='/'>
    <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <PrivetRoute path="/placeOrder/:id">
    <PlaceOrder></PlaceOrder>
    </PrivetRoute>
    <Route path="/moreCollection">
      <Collections></Collections>
    </Route>
    <PrivetRoute path='/userDashboard'>
      <UserDashboard></UserDashboard>
    </PrivetRoute>
    <PrivetRoute path='/admin'>
      <AdminDashboardHome></AdminDashboardHome>
    </PrivetRoute>
    
    <Route path='/login'>
      <Login></Login>
    </Route>
    <Route path='/register'>
      <Register></Register>
    </Route>
   
     </Switch>
     <Footer></Footer>
    </Router> 
    </AuthProvider>
  );
}

export default App;

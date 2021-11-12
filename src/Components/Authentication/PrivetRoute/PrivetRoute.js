import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user, isLoading}=useAuth();
    if(isLoading){
        return <div className="text-center mx-5 px-3"><Spinner animation="border" variant="warning" /></div>
    }
    return (
         <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivetRoute;
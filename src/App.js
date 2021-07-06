import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Orders from './Orders';
import Home from "./Home";
import Checkout from "./Checkout"; 
import Login from "./Login.js"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payement from "./Payement"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStrpe('pk_test_51IQa1jHEMjPKITT4c5Uj753n3XyrfpUFfxgCThsIy2xfhXtYd0NAfa07gEmXWCQrbv1dSnqZ4ANPyJQV5q4DL8bL00unzTrzSu');


function App() {
  const[{ user }, dispatch] = useStateValue();
  //useEffect <<<<<< Powerful
  //Peice of code which runs on a given condition
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //user is logged in

          dispatch({
            type: "SET_USER",
            user: authUser,
          });
      } else{
        // ..user is logged out..

          dispatch({
            type: "SET_USER",
            user: null
          });
      }
    });
    console.log(user);

    return () =>{
      //Any cleanup operations go in here.
        unsubscribe();
    }
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header />
            {/* <h1>Checkout</h1> */}
            <Checkout />
          </Route>
          
          <Route path="/orders">
             <Header />
             <Orders />
          </Route>

          <Route path="/login">
             <Login />
            {/* <h1>Login page</h1> */}
          </Route>
          <Route path="/payement">
            <Header />
            <Elements stripe={promise}>
              <Payement />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
              <Home />
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;

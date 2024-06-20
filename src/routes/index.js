import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <SignIn />;
}


const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
        <Routes>
         <Route exact path="/home" element= {<Private Item={Home}></Private>}></Route>
          <Route path="/" element={<SignIn/>} />
          <Route exact path="/SignUp" element={<SignUp></SignUp>}></Route>
           <Route path="*" element={<SignIn></SignIn>}></Route> 
        </Routes>
        </Fragment>
        
        
        
        </BrowserRouter>
    );
}

export default RoutesApp;
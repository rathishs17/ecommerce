import ReactDOM from "react-dom/client";
import React from "react";

import NavScrollExample from './appBar';
import style from './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import CardContainer from "./CardContainer";
import FormProductData from "./formproductdata";
import Loginform from "./loginform";
import Signupform from "./signupform";
// tag / root
const root = ReactDOM.createRoot(document.getElementById('root'));



// React fragments sugar form
root.render(
        <>
        <Signupform/>
        <Loginform/>
                <NavScrollExample />
                <h1 className="text-center mt-3">Welcome to Shoe mart  </h1>
                <hr />
                <CardContainer/>
                <FormProductData/>
                {/* <App/>                 */}
        </>

)
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./containers/Home"
import RequestOrders from "./containers/RequestOrder";
function Routers(){

return(

    <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/requests" element={<RequestOrders/>}/>
        </Routes>
    </Router>
)

}

export default Routers
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/home'
import Header from './Header'
const Routing =()=>{
    return(
        <BrowserRouter>
        <div>
            <Header/>
            <Route exact path ="/" component ={Home}></Route>
        </div>
        </BrowserRouter>
    )
}


export default PerformanceResourceTiming;
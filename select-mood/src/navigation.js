import React from "react";
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function MoodsDef(){
    return (
<Router>
<div>
      <ul>
              <li>
                   {/* <Link to ="/">App</Link> */}
                 </li>
         <li>
             <Link to ="./journal">`Journal`</Link>
                  </li>
              <li>
                  <Link to ="./mymoods">Moods</Link>
                  </li>
                  </ul>
             <Routes>
                {/* <Route exact path = "/"><App/></Route> */}
                <Route path = "./myjournal">Journal</Route>
                <Route path = "./mymoods">Moods</Route>
          </Routes>
 </div>
     </Router>
    );
    }
    function MyJournal(){
        return (
            <div>
                <h2>My Journal</h2>
            </div>
        );
    }
    function MyMoods (){
        return (
            <div>
                <h2>My Moods</h2>
            </div>
        );
    }
export default MoodsDef;
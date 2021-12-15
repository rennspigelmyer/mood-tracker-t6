import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MoodRange from './moodrange';
import MyMood from './myMood';
import LogInPage from './loginPage'
import { useState, useEffect } from 'react';

// function MoodsDef(){
//     return (
// <Router>
// <div>
//       <ul>
//               <li>
//                    {/* <Link to ="/">App</Link> */}
//                  </li>
//          <li>
//              <Link to ="/myjournal" className="linknav">`Journal`</Link>
//                   </li>
//               <li>
//                   <Link to ="/myMoods.js" className="linknav">Moods</Link>
//                   </li>
//                   </ul>
//              <Routes>
//                 {/* <Route exact path = "/"><App/></Route> */}
//                 <Route path = "/myjournal">Journal</Route>
//                 <Route path = "/mymoods">Moods</Route>
//           </Routes>
//  </div>
//      </Router>
//     );
//     }
//     function MyJournal(){
//         return (
//             <div>
//                 <h2>My Journal</h2>
//             </div>
//         );
//     }
//     function MyMoods (){
//         return (
//             <div>
//                 <h2>My Moods</h2>
//             </div>
//         );
//     }

class App extends React.Component{
    constructor(props) {
        super(props);
        this.MoodPicked = this.MoodPicked.bind(this);
        this.DetectLogin = this.DetectLogin.bind(this);
        this.isLoggedIn = false;
        this.moodPicked = false;
        this.moodValue = -1;
        this.name = '';

        this.moods = [
            'Depression',
            'Anxiety or Panic Attacks',
            'Flashbacks',
            'Mania',
            'Hypomania',
            'Obsessive Compulsions',
            'Dissociation',
            'Executive Dysfunction',
            'Social Isolation',
            'Overstimulation',
            'Disordered Eating',
            'Hyper-Activity',
            'Intrusive Thoughts',
            'Impulsivity',
            'Emotional Dysregulation',
            'Nightmares/Night Terrors',
            'Physical Manifestations (e.g. Headache)',
            'Baseline Symptoms (or None)'
            ];
    }

    // This gets called when you press the 'log in' button from loginPage.js
    setLoginState = ( loggedIn, name ) => {
        //console.log(loginData);
        this.isLoggedIn = loggedIn;
        this.name = name;
        this.forceUpdate()
    }

    // This is called when the 'MoodPicked' function is executed on the moodrange.js page.
    setPickedMood = (moodValue) => 
    {
        if( moodValue > 0 ) 
        {
            this.moodPicked = true;
            this.moodValue = moodValue;
        }

        this.forceUpdate()
    }

    MoodPicked()
    {
        if( this.moodPicked )
        return <MyMood moods ={this.moods} moodValue = {this.moodValue} name = {this.name} />
            else
        return <MoodRange setPickedMood = {this.setPickedMood} />
    }

    DetectLogin()
    {
        if( this.isLoggedIn )
            return <this.MoodPicked isPicked={true} />
        else
            return <LogInPage setLoginState = {this.setLoginState} />
    }

    

    
    render()
    {
        return (
            <div className="App">
            <this.DetectLogin isLoggedIn={this.isLoggedIn} />
            </div>
        );
    }
  
}


// Function from Kathy

// const userEntry = [
//   'anxious',
//   'frustrated',
//   'discouraged',
//   'content',
//   'optimistic',
//   'energized'
// ];


// function App() {
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     alert("Your mood has displayed");
//   }, [num]);
//   function newNum() {
//     if (num < userEntry.length - 1) {
//       setNum(num + 1);
//     } else {
//       setNum(0);
//     }
//   }

//   return (
//     <div>
//       <h1>Mood Tracker</h1>
//       <MyMood userEntry={newNum} />
//       <h1>Your answer indicates that you feel {userEntry[num]}.</h1>
//     </div>
//   );
// }



export default App;

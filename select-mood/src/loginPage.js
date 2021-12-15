import React from 'react';
import Style from './loginPage.css'


class LogInPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.setLoginState(true, 'Shannon');
    }

      render()
      {
            return ( 
                <div className="disclaimerbutton"> 
                    <button onClick={this.handleClick} className="disclaimercontinue">
                    <h1> DISCLAIMER: </h1>
                    
                    <p> If you are in crisis or you think you may have an emergency, call your doctor or 911 immediately. If you're having suicidal thoughts, call 911 or the National Suicide Prevention Lifeline. </p>
                    <p>1-800-273-TALK (8255)</p>
                    <p>Or text the 24/7 Crisis Text Line (crisistextline.org):</p>
                    <p>HOME to 741741</p>
                    <p>If you are located outside the United States, call your local emergency line immediately. Reliance on this service is at your own risk and is not meant to substitute professional assistance. </p>

                    <h2>CLICK HERE TO CONTINUE</h2>
                    </button>
                </div> 
            );
      }
  } 
export default LogInPage; 


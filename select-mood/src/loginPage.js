import React from 'react';


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
                <div> 
                    <button onClick={this.handleClick}>DISCLAIMER: 
                    
                    If you are in crisis or you think you may have an emergency, call your doctor or 911 immediately. If you're having suicidal thoughts, call 1-800-273-TALK (8255) to talk to a skilled, trained counselor at a crisis center in your area at any time (National Suicide Prevention Lifeline). If you are located outside the United States, call your local emergency line immediately. Reliance on any information provided by us, or other visitors to the website is solely at your own risk.
                    </button>
                </div> 
            );
      }
  } 
export default LogInPage; 


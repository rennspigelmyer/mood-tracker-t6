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
                    <button onClick={this.handleClick}>log in</button>
                </div> 
            );
      }
  } 
export default LogInPage; 


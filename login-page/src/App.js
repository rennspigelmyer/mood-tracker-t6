// import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/login';
import './App.css';



// import './App.css';

const projectID = 'fc209578-2cbb-4567-914f-bd7aa73bb4ca';



const App = () => {

  
  if (!localStorage.getItem('username')) return <LoginForm />;

 
  return (
      <login
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
  );

  
};

// infinite scroll, logout, more customizations...



export default App;
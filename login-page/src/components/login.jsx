import { useState } from 'react';

// import axios from 'axios';


const projectID = 'fc209578-2cbb-4567-914f-bd7aa73bb4ca';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const authObject = { 'Project-ID': 'fc209578-2cbb-4567-914f-bd7aa73bb4ca', 'User-Name': username, 'User-Secret': password };

    try {
      // await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, please try again.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Sign In</h1>
        <p className="disclaimer">Disclaimer:</p>
        {/* <p className="disclaimertext">If you are in crisis or you think you may have an emergency, call your doctor or 911 immediately. If you're having suicidal thoughts, call 1-800-273-TALK (8255) to talk to a skilled, trained counselor at a crisis center in your area at any time (National Suicide Prevention Lifeline). If you are located outside the United States, call your local emergency line immediately. We do not recommend or endorse any clinicians, counselors, psychiatrists, social workers, physicians, products, procedures, opinions, or other information that may be mentioned. Reliance on any information provided by us, or other visitors to the website is solely at your own risk.</p> */ }
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input1" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input2" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;
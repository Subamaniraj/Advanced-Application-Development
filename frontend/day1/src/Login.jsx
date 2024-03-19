import React, { useState } from 'react';
import Confetti from 'react-confetti';
import '../../assets/css/log.css';
import img from '../../assets/images/dj.jpg';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [registerFormData, setRegisterFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [signInFormData, setSignInFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    sessionStorage.setItem('users', JSON.stringify(users));
    console.log('Registering...', registerFormData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!signInFormData.username || !signInFormData.password) {
      setError('Please enter both username and password');
      return;
    } else {
      sessionStorage.setItem('isAuthenticated', 'true');
      sessionStorage.setItem('isAdmin', signInFormData.username === 'admin');
      if (sessionStorage.getItem('isAuthenticated') && sessionStorage.getItem('isAdmin')) {
        navigate('/dashboard'); // Use the navigate function to navigate
      }
    }
    console.log('Logging in...', signInFormData);
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setSignInFormData({
      ...signInFormData,
      [name]: value,
    });
  };

  return (
    <div className='login-body'>
      <div className={`container ${isSignIn ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" name="name" value={registerFormData.name} onChange={handleRegisterChange} />
            <input type="email" placeholder="Email" name="email" value={registerFormData.email} onChange={handleRegisterChange} />
            <input type="password" placeholder="Password" name="password" value={registerFormData.password} onChange={handleRegisterChange} />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Username" name="username" value={signInFormData.username} onChange={handleLoginChange} />
            <input type="password" placeholder="Password" name="password" value={signInFormData.password} onChange={handleLoginChange} />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left" style={{ color: 'black' }}>
              <img src={img} alt="Sign Up Image" className="signup-image" />
              <button className="ghost" onClick={toggleForm}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <img src={img} alt="Sign Up Image" className="signup-image" />
              <button className="ghost" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black' }} onClick={toggleForm}>Sign Up</button>
            </div>
          </div>
          {(isSignIn || !isSignIn) && <Confetti />}
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

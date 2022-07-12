import React, { useState , useEffect} from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import classes from "./Signin.module.css";
import Buttons from "./UI/Buttons";
import Cards from "./UI/Cards";

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  useEffect(() => {
    const identifier =  setTimeout(() => {
      setFormIsValid(
        email.includes("@") && password.trim().length > 6
      );
    }, 500);
    return ()=> {
      clearTimeout(identifier);
    };
   
  }, [email, password]);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(email.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(password.trim().length > 6);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      const firebaseResponse = await signIn(email, password)
      console.log(firebaseResponse);
      localStorage.setItem('user_token', firebaseResponse._tokenResponse.idToken);
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <Cards className={classes.signin}>
      <div>
        <h1>Sign in to your account</h1>
        <p >
          Don't have an account yet?{' '}
          <Link to='/signup' >
            Sign up.
          </Link>
        </p>
      </div>
      {error && <Alert variant='danger'> {error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div  className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}>
          <label  htmlFor="email">Email Address </label>
          <input 
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
           />
        </div>
        <div className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}>
          <label htmlFor="password" >Password</label>
          <input
           type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler} />
        </div>
        <div className={classes.actions}> 
        <Buttons type="submit" className={classes.btn} disabled={!formIsValid} >
          Sign In
        </Buttons>
        </div>
      </form>
    </Cards>
  );
};

export default Signin;
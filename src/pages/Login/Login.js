import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const Login = ({
  setIsLoggedIn,
  setUserName,
  setIsAdmin
}) => {

  const history = useHistory()

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault();

    if (login === 'admin') {
      if (password === '123456') setIsAdmin(true);
      else {
        alert('Enter the correct username or password!');
        return false
      }
    }

    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userName', login);

    setUserName(login);
    setIsLoggedIn(true);
    history.push('/');

  }

  return (
    <h1>
      <form className="loginForm" onSubmit={handleLogIn}>
        <h2>Authorization</h2>
        <div>
          <input
            className="loginFormInput"
            type="text"
            placeholder="Login"
            onChange={handleLoginChange}
            value={login}
            required
          />
        </div>
        <div>
          <input
            className="loginFormInput"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </div>
        <div>
          <button className="blackBtn" type="submit">
            Login
          </button>
        </div>
      </form>
    </h1>
  );
};

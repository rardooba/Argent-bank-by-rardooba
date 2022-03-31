import React, { useState } from "react";
import styled from "styled-components";

//Axios
import axios from "axios";

//Redux
import { login } from "../../redux/actions/user.actions";
import { useDispatch } from "react-redux";

//Router
import { Navigate } from "react-router-dom";

const Login = () => {
  //STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isError, setIsError] = useState(false);

  //HOOKS init
  const dispatch = useDispatch();

  /**
   * Get user credentials > email, password, token
   * @param {Object} e event
   */
  const handleLogin = (e) => {
    e.preventDefault();

    //post content > OBJ send with post method
    const userLOGinfos = {
      email: email,
      password: password,
      token: "",
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/user/login`, userLOGinfos)
      .then((res) => {
        //console.log(res);
        //dispatch data to user reducer + get token from API
        dispatch(login(email, password, res.data.body.token));
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  };

  return (
    <>
      {isAuth ? (
        <Navigate to="/profile" />
      ) : (
        <MAIN className="bg-dark">
          <SIGNin>
            <span className="fa fa-user-circle icon"></span>
            <h1>Sign In</h1>
            <form onSubmit={handleLogin} id="sign-up-form">
              <div className="wrapper">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="emailInput"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="passwordInput"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className={isError ? "msg error" : "msg"}>
                Incorrect username or password.
              </div>
              <div className="remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <BUTTON type="submit" value="Sign in" />
            </form>
          </SIGNin>
        </MAIN>
      )}
    </>
  );
};

/*-----------------------*\
            CSS
\*-----------------------*/

const MAIN = styled.main`
  flex: 1;

  &.bg-dark {
    background-color: #12002b;
  }
`;

const SIGNin = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 3rem auto;
  padding: 2rem;

  .icon {
    font-size: 1rem;
  }

  .msg {
    margin-bottom: 1rem;
    color: #cd2f39;
    display: none;
  }

  .error {
    display: block;
  }

  .remember {
    display: flex;

    label {
      margin-left: 0.25rem;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

    label {
      font-weight: bold;
    }

    input {
      padding: 5px;
      font-size: 1.2rem;
    }
  }
`;

const BUTTON = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export default Login;

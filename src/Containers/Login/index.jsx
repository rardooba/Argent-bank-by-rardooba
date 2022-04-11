import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

//Redux
import { login } from "../../redux/redux";
import { useDispatch, useSelector } from "react-redux";

//------------------------------------------------------------//

const Login = () => {
  //* STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //HOOKS init
  const dispatch = useDispatch();
  const checkboxRef = useRef(null);

  //const isAuth= useSelector((state) => state.user.isConnected);
  const isError = useSelector((state) => state.user?.status?.status === 400);
  const errorMsg = useSelector((state) => state.user?.status?.message);

  /**
   * f(x) Who storage user credentials in localStorage
   */
  const rememberMe = () => {
    if (checkboxRef.current.checked) {
      localStorage.setItem("email", JSON.stringify(`${email}`));
      localStorage.setItem("password", JSON.stringify(`${password}`));
    }
  };

  //USEEFFECT => Timer to clear user credentials from localStorage
  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem("email")));
    setPassword(JSON.parse(localStorage.getItem("password")));

    const timeOutId = setTimeout(() => {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }, 10000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <MAIN className="bg-dark">
      <SIGNin>
        <span className="fa fa-user-circle icon"></span>
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(login({ email, password })).then(res => console.log(res));
          }}
          id="sign-up-form"
        >
          <div className="wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="emailInput"
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
            />
          </div>
          <div className="wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="passwordInput"
              onChange={(e) => setPassword(e.target.value)}
              value={password || ""}
            />
          </div>
          {isError && (
            <div className={isError ? "msg error" : "msg"}>{errorMsg}</div>
          )}
          <div className="remember">
            <input type="checkbox" id="remember-me" ref={checkboxRef} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <BUTTON type="submit" value="Sign in" onClick={rememberMe} />
        </form>
      </SIGNin>
    </MAIN>
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

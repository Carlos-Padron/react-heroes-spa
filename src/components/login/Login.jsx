import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const Login = ({ history }) => {
  const { dispatch } = useContext(AuthContext);


  const handleClick = () => {
    // history.push('/')

    dispatch({
      type: types.login,
      payload: {
        name: "Carlos",
      },
    });


    history.replace("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => handleClick()}>
        Login
      </button>
    </div>
  );
};

export default Login;

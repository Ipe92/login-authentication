import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Login.css";

const Login = ({ setToken }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={(event) => setUserName(event.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

Login.PropTypes = {
    setToken: PropTypes.func.isRequired,
};

export default Login;

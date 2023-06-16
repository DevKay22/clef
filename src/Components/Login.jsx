import React from "react";

const Login =() => {
    return (
        <div>
            <div className="form-box login">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <span className = "icon"></span>
                        {/* <input type="email" required> */}
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <span className = "icon"></span>
                        {/* <input type="password" required> */}
                        <label>Password</label>
                    </div>

                </form>
            </div>

        </div>
    );
};


export default Login;
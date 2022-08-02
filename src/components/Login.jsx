import React from "react";

function Login(){
    return(
        <div className="sign">
            <form className="register" action="/login" method="post">
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
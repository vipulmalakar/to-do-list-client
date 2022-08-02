import React from "react";

function Register(){
    return(
        <div className="sign">
            <form className="register" action="/register" method="post">
                <h2>Register</h2>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
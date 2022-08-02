import React from "react";
import Logo from "./Logo";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import NewItem from "./NewItem";
import Error from "./Error"
import {Routes, Route} from "react-router-dom";

function App(){
    return (
        <div className="main-container">
            <Logo />
            <Routes>
                <Route path="/">
                    <Route exact index element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/newItem" element={<NewItem />} />
                    <Route element={<Error />} />
                </Route>
            </Routes>
                
            
        </div>
    );
}

export default App;
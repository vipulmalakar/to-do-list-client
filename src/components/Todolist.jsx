import React from "react";
import Input  from "./Input";
import Tasks from "../tasks";
import GetDay from "../date";

function Todolist(){
    return(
        <div className="to-do-items">
            <GetDay />
            <Input />
            <Tasks />
            <a href="/newItem" className="add-task">
                    <p>Add Task <span>+</span></p>
            </a>
        </div>
    );
}


export default Todolist;
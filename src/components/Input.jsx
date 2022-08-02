import React from "react";

const customStyle = {
    color :""
}
function handleCheck(event){
    const name = event.target;
    if(name.className === "fa-solid fa-square-check"){
        if(name.style.color === ""){
            name.style.color ="limegreen";
        }else{
            name.style.color =""
        }
    }else if(name.className === "fa-solid fa-trash"){
        if(name.style.color === ""){
            name.style.color ="red";
        }else{
            name.style.color =""
        }
    }
}

function Input(props){
    return(
        <div className="item" >

            <p>{props.title}</p>
            <div>
                <i className="fa-solid fa-square-check" style={customStyle} onClick={handleCheck}></i>
                <i className="fa-solid fa-trash" style={customStyle} onClick={handleCheck}></i>
            </div>
        </div>
    );
}

export default Input;
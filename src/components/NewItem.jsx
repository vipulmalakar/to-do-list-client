import React from "react";

function NewItem(){
    return(
        <div className="container">
            <div className="newItemContainer">
                <h2>Add New Task</h2>
                <form action="/newItem" method="post">
                    <div className="title">
                        <h3 className="head">Title <span id="star">*</span></h3>
                        <input type="text" name="title" required />
                    </div>
                    <div className="title">
                        <h3 className="head">Description <span id="star">*</span></h3>
                        <textarea name="description" id="" cols="10" rows="5"></textarea>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}

export default NewItem;
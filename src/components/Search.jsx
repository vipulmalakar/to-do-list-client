import React from "react";

function Search(){
    return(
        <div class="input-box">
              <input type="text" className="form-control" placeholder="Enter to Search" />
              <button class="button" onclick="addItem()">Search</button>
        </div>
    );
}

export default Search;
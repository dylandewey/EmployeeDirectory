import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Click on "Name" heading to filter by last name or use the search box to narrow your results</p>
        </div>
    )
}

export default Header;
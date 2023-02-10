import React from "react";
import classes from "./SearchBar.module.css";

function SearchBar() {

    return <>
        <div className={classes.searchBar}>
            <input type="text" placeholder="Search City" />
        </div>
    </>
}

export default SearchBar;
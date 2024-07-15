import React from "react";
import "./header.css";
import NavBar from "./NavBar";
import ChildComponent from "./child";
// import { Parent } from "./Provider";




function Header(){
    return(//menna wenasak
        <div className="header">
            <h1>Welcome To Our web Page</h1>
            <NavBar/>
            <ChildComponent/>
            
            

        </div>
    )
}
export default Header;

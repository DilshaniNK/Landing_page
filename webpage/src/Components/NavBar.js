import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import InfoIcon from '@mui/icons-material/Info';
import Clock from "./clock"; 
import ChildComponent from "./child";



function NavBar(){
    
    return(
        <nav className="NavBar">
                        <h2>Saloon</h2>
                        <Link className="NavBar-link" to="/"><OtherHousesIcon style={{marginRight: '8px'}}/>Home</Link>
                        <Link className="NavBar-link" to="/About"><InfoIcon style={{marginRight: '8px'}}/> About</Link>
                        <Link className="NavBar-link" to="/Contact"><AddIcCallOutlinedIcon style={{ marginRight: '8px' }} />Contact-Us</Link>
                        <ChildComponent/>
                        <Clock/>
                        

                                         
        </nav>
    );

}

export default NavBar;
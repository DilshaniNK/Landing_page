import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import InfoIcon from '@mui/icons-material/Info';



function NavBar(){
    
    return(
        <nav className="NavBar">
            
                        <Link className="NavBar-link" to="/"><OtherHousesIcon style={{marginRight: '8px'}}/>Home</Link>
                        <Link className="NavBar-link" to="/About"><InfoIcon style={{marginRight: '8px'}}/> About</Link>
                        <Link className="NavBar-link" to="/Contact"><AddIcCallOutlinedIcon style={{ marginRight: '8px' }} />Contact-Us</Link>
                                         
        </nav>
    );

}

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {



    return (
        <>
        <div>

            <NavLink to='/home'>
                     <div>home</div>
            </NavLink>
            <NavLink to='/aboutus'>
                     <div>about</div>
            </NavLink>
        </div>
        </>
    )

}

export default Navbar;
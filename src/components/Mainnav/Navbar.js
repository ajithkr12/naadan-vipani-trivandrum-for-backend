import React from 'react'
import "./Navbarstyle.css"
import { BsFillHandbagFill } from 'react-icons/bs';
const Navbar = () => {




    return (
        <div className="nav-container">
            <div className="logo-container">
                <h2 className="">horticorpOnline</h2>
            </div>
            <div className="menu-container">
                <div className="element">
                {/* <button className="btn-success ">Logout</button> */}
                <BsFillHandbagFill color="white" fontSize="1.5em"/>
                </div>
                <div className="element">
                <button className="btn-success ">Logout</button>
                </div>
            </div>


        </div>
    )
}

export default Navbar;
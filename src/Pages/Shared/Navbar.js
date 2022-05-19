import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../asserts/logo.png"

const Navbar = ({children}) => {
    const menuItems = <>
        <li><NavLink className='rounded-lg' to="/">Home</NavLink></li>
        <li><NavLink className='rounded-lg' to="/ourPortfolio">Our Portfolio</NavLink></li>
        <li><NavLink className='rounded-lg' to="/ourTeam">Our Team</NavLink></li>
        <li><NavLink className='rounded-lg' to="/contactUs">Contact Us</NavLink></li>
        <li><NavLink className='rounded-lg' to="/Login">Login</NavLink></li>
    </>    
    
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                <div className="max-w-7xl mx-auto px-12 navbar">
                <div className="w-full flex-1 px-2 mx-2">
                    <img style={{width: "127.45px", height: "48px"}} src={logo} alt="" />
                </div>
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                
                <div className="flex-none hidden lg:block">
                    <ul className="menu menu-horizontal gap-x-2">
                    {menuItems}
                    </ul>
                </div>
                </div>
                {children}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto gap-y-2 w-80 bg-base-100">
                {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
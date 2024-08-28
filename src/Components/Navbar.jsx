import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { FcMindMap } from "react-icons/fc";
function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider  value={{ color: '#fff' }} >
            

                <div className='navbar'> 
              
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                       
                    </Link>
               
                <div className='ico'>
               <span> <FaIcons.FaSearch/> </span> 
               <span><FaIcons.FaPuzzlePiece/></span> 
                </div>
                 
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {/* <p className='text-primary p-3' ><span><FcMindMap /></span> Creative team</p> */}
                        {SidebarData.map((item, index) => {
                            return (

                               
                                <li key={index} className={item.cName}>
                                    
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                       
                    </ul>
                </nav>
            </IconContext.Provider>
                <div className='back'> 
                    Wellcome to our application
                    <div className='main'>
                    </div>
               
                
            </div>
        </>
    );
}

export default Navbar;
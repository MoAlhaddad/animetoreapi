import React from 'react';
import "../App.css";

import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {

    return (
//     <div className="Navbar">
//             <div className="logo">
//                     Anime
//                 </div>

//                 <nav className='item'>
//                         <ul className='ul'>
//                             <li className= 'nav-item'>
//                                 <Link to='/'>Home </Link>
//                                 </li>
//                                 <li>
//                                         <Link to='/animes'>Animes </Link>
//                                     </li>

//                                     <li>
//                                             <Link to ='/hits'>New Hits </Link>
//                                         </li>
//                                 </ul>
//                     </nav>
//         </div>
<>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
                Home
          </NavLink>
          <NavLink to='/animes' activeStyle>
            Animes
          </NavLink>
          <NavLink to='/hits' activeStyle>
            New Hits
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
        )
}

export default Navbar;
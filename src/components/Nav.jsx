import React, { useState } from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';



function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
             <div>
      <Navbar color="light" light expand="md">
       <Link to="/"> <NavbarBrand> Bellevue City Schools Chromebook checkout</NavbarBrand></Link>
       
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          
          
          
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
        </div>
    )
}

export default NavBar

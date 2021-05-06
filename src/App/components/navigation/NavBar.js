import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { signInUser, signOutUser } from '../../../helpers/data/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/weather">Weather</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/jokes">Jokes</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/lyrics">Lyrics</Link>
            </NavItem>
          </Nav>
          {
            user !== null
            && <div>
                { user
                  ? <a color='danger' onClick={signOutUser} className='auth-btn'>Signout</a> : <a color='info' onClick={signInUser} className='auth-btn'>Signin</a>
                }
               </div>
          }
        </Collapse>
      </Navbar>
    </div>
  );
};
NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-black'>
      <h1>
        <Link to='/' className='no-underline flex items-center'>
          <Logo fill='#E9E035' /> {title}
        </Link>
      </h1>
      {/* <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul> */}
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Glendon Grapperhaus'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;

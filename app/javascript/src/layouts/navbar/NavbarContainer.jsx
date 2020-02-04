import React from 'react';
import PropsTypes from 'prop-types';
import NavbarItem from './NavbarItem';

const NavbarContainer = ({ items }) => (
  <div className="navbar-container">
    {items.map(item => (<NavbarItem item={item} />))}
  </div>
);

NavbarContainer.props = {
  items: PropsTypes.array.isRequired,
};

export default NavbarContainer;
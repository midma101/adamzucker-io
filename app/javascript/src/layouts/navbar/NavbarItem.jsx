import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({ item }) => (
  <div className={`navbar-item navbar-item--item ${item.active && 'active'} `}>
    <a href={item.path}>{item.name}</a>
  </div>
);

NavbarItem.props = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })
};

export default NavbarItem;
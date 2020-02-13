import React from 'react';
import PropsTypes from 'prop-types';
import useModal from 'src/shared/components/useModal';
import NavbarItem from './NavbarItem';
import NavbarIcon from './NavbarIcon';
import NavbarMobileModal from './NavbarMobileModal';

const NavbarContainer = ({ icons, items }) => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="navbar-container">
      <div className="navbar-item navbar-item--name">
        <a href="/">Adam Zucker &#128080;</a>
      </div>
      {icons.map(icon => (<NavbarIcon key={icon.key} icon={icon} />))}
      {items.map(item => (<NavbarItem key={item.name} item={item} />))}
      <div className="navbar-hamburger-icon" onClick={toggle}>
        <i className={`fa ${isShowing ? 'fa-close' : 'fa-bars'}`} />
        <NavbarMobileModal show={isShowing} onHide={toggle} items={items} icons={icons} />
      </div>
    </div>
  );
};

NavbarContainer.props = {
  icons: PropsTypes.array.isRequired,
  items: PropsTypes.array.isRequired,
};

export default NavbarContainer;
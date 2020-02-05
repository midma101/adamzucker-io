import React from 'react';
import Modal from 'src/shared/components/Modal';
import NavbarItem from './NavbarItem';
import NavbarIcon from './NavbarIcon';

const NavbarMobileModal = ({ show, onHide, icons, items }) => {
  return (
    <Modal isShowing={show} hide={onHide}>
      <div className="mobile-menu-container">
        {items.map(item => (<div className="font-size-medium"><NavbarItem item={item} /></div>))}
        <div className="flex-row jc-space-around">
          {icons.map(icon => (<NavbarIcon icon={icon} />))}
        </div>
      </div>
    </Modal>
  );
};

export default NavbarMobileModal;
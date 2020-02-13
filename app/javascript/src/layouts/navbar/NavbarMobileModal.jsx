import React from 'react';
import Modal from 'src/shared/components/Modal';
import NavbarItem from './NavbarItem';
import NavbarIcon from './NavbarIcon';

const NavbarMobileModal = ({ show, onHide, icons, items }) => {
  return (
    <Modal isShowing={show} hide={onHide}>
      <div className="mobile-menu-container">
        <div className="font-size-medium flexbox fd-column ai-center">
          {items.map(item => (<NavbarItem key={item.name} item={item} />))}
        </div>
        <div className="mobile-icons flexbox fd-row jc-space-around">
          {icons.map(icon => (<NavbarIcon key={icon.key} icon={icon} />))}
        </div>
      </div>
    </Modal>
  );
};

export default NavbarMobileModal;
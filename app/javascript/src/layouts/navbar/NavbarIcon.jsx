import React from 'react';
import PropTypes from 'prop-types';
import { EmailIcon, GithubIcon, LinkedInIcon } from 'src/shared/svg';


const NavbarIcon = ({ icon }) => {
  const svg = (key) => {
    switch (key) {
      case 'email':
        return <EmailIcon/>;
      case 'github':
        return <GithubIcon/>;
      case 'linkedin':
        return <LinkedInIcon/>;
    }
  };

  return (
    <div className="navbar-item navbar-icons--item">
      <a href={icon.path} target="_blank">
        {svg(icon.key)}
      </a>
    </div>
  );
};

NavbarIcon.props = {
  icon: PropTypes.shape({
    key: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })
};

export default NavbarIcon;
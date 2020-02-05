import React, { useState } from 'react';
import PropTypes from 'prop-types';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    isShowing ? document.body.classList.remove('modal-open') : document.body.className += ' modal-open';
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;
import NavbarContainer from 'src/layouts/navbar/NavbarContainer';
import WebpackerReact from 'webpacker-react';
import {
  initializeGutterAnimation,
  animateLeft,
  animateRight
} from '../src/shared/animations';

document.addEventListener('DOMContentLoaded', () => {
  initializeGutterAnimation(); animateLeft(); animateRight();
});


WebpackerReact.setup({NavbarContainer});
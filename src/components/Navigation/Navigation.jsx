import React from "react";
import { openMenu } from "../../animations/menuAnim";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav className='nav'>
      <div className='nav__content'>
        <div className='nav__content__logo'>Webdesignisrael</div>
        <div className='nav__content__menu' id='menuOpen' onClick={openMenu}>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

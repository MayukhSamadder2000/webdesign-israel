import React from "react";
import { Link, useHistory } from "react-router-dom";
import { closeMenu } from "../../animations/menuAnim";
import "./Bigmenu.scss";

function Bigmenu() {
  let history = useHistory();

  const pushFunction = (e, param) => {
    console.log("Something");
    history.push(param);
    closeMenu(e);
  };
  return (
    <div className='bigmenu'>
      <div className='bigmenu__nav'>
        <div className='logo' id='menuLogo'>
          Webdesignisrael
        </div>
        <div className='cross' id='menuCross' onClick={closeMenu}>
          <div className='line line1'></div>
          <div className='line line2'></div>
        </div>
      </div>
      <div className='bigmenu__menu'>
        <ul>
          <li>
            <Link
              className='bigmenu__menu__item'
              to='/'
              onClick={(e) => pushFunction(e, "/")}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              className='bigmenu__menu__item'
              href='#brands'
              onClick={(e) => closeMenu(e)}
            >
              Brands
            </a>
          </li>
          <li>
            <a
              className='bigmenu__menu__item'
              href='#works'
              onClick={closeMenu}
            >
              Our Works
            </a>
          </li>
          <li>
            <a
              className='bigmenu__menu__item'
              href='#testimonies'
              onClick={closeMenu}
            >
              Testimonies
            </a>
          </li>
          <li>
            <a
              className='bigmenu__menu__item'
              href='#services'
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <Link className='bigmenu__menu__item' to='/'>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className='bigmenu__copyright'>TermsFeed © 2012 - 2021</div>
    </div>
  );
}

export default Bigmenu;

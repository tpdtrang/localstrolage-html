import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

class HeaderLayout extends Component {
  render() {
    return (
      <header className="header-container" id="header-container">
        <div className="container">
          <div className="row">
            <div className="p-logo">
              <h1 className="heading-1"><a className="link-logo" href="/">BOOKCLUBZ</a></h1>
            </div>
            <nav className="p-menu">
              <ul>
                <li className="item-menu"><a href="/" className="link-menu">BOOKs</a></li>
                <li className="item-menu"><a href="/" className="link-menu">ABOUTS</a></li>
                <li className="item-menu"><a href="/" className="link-menu">BLOG</a></li>
                <li className="item-menu"><a href="/" className="link-menu">FAQS</a></li>
                <li className="item-menu"><button className="waves-effect">SIGN IN</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderLayout;
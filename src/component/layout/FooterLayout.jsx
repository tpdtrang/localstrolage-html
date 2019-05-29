import React, { Component } from 'react';

class FooterLayout extends Component {
  render() {
    return (
      <section className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="p-logo">
                <a href="@">
                  <h2 className="heading-2">bookclubz</h2>
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <nav className="p-icon">
                <ul>
                  <li className="item-icon"><a href="/" className="link-icon"><i className="fab fa-facebook-square" /></a></li>
                  <li className="item-icon"><a href="/" className="link-icon"><i className="fab fa-twitter" /></a></li>
                  <li className="item-icon"><a href="/" className="link-icon"><i className="fab fa-youtube" /></a></li>
                  <li className="item-icon"><a href="/" className="link-icon"><i className="fab fa-facebook-square" /></a></li>
                  <li className="item-icon"><a href="/" className="link-icon"><i className="fab fa-linkedin-in" /></a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-5">
              <div className="copyrigth">
                <p className="text">Copyright © Xeos 2015. All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FooterLayout;
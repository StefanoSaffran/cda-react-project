import React, { Fragment, Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import LinkWrapper from "../../utils/LinkWrapper";

class Header extends Component {

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
  }

  render() {
    return (
      <Fragment>
        <nav>
          <div className="nav-wrapper indigo">
            <LinkWrapper to="/" className="brand-logo left" activeStyle={{}}>COMPANY</LinkWrapper>
            <LinkWrapper to="#" data-target="mobile-links" className="sidenav-trigger right"><i className="material-icons">menu</i></LinkWrapper>
            <ul className="right hide-on-med-and-down">
              <li><LinkWrapper to="/home">Home</LinkWrapper></li>
              <li><LinkWrapper to="/authors">Authors</LinkWrapper></li>
              <li><LinkWrapper to="/books">Books</LinkWrapper></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <li><LinkWrapper to="/">Home</LinkWrapper></li>
          <li><LinkWrapper to="/authors">Authors</LinkWrapper></li>
          <li><LinkWrapper to="/books">Books</LinkWrapper></li>
        </ul>
      </Fragment>
    )
  }
}

export default Header;
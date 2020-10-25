import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";


class NavbarPage extends Component {
  state = {
    collapseID: "",
    navbarBG: "bg-black"
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  listenToScroll = () => {
    if (window.pageYOffset >= 100) {
      this.setState({ navbarBG: "navbg-black" })
    } else {
      this.setState({ navbarBG: "navbar-tr" })
    }
  }



  render() {
    return (

      <MDBNavbar className="navbg-black" dark expand="md" fixed="top">
        <MDBNavbarBrand>
          <strong className="white-text astera">Ques Lyfe Media</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Socials</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="bg-black">
                  <MDBDropdownItem href="https://www.youtube.com/channel/UCrGHx3U69YZKBKWDmD4U3qQ" rel="noopener noreferrer" target="_blank" className="font-white" ><MDBIcon fab icon="youtube" /> YouTube</MDBDropdownItem>
                  <MDBDropdownItem href="https://www.instagram.com/queslyfe/" rel="noopener noreferrer" target="_blank" className="font-white"><MDBIcon fab icon="instagram" /> Instagram</MDBDropdownItem>
                  <MDBDropdownItem href="https://www.tiktok.com/@quenncyy" rel="noopener noreferrer" target="_blank" className="font-white"><MDBIcon fab icon="tiktok" /> TikTok</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
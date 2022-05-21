import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
        <Navbar
          fixed="top"
          color="dark"
          dark
          expand="md"
          full>
            <NavbarBrand>T-Town Apartment Finder</NavbarBrand>
        <Nav classname="nav-bar" >
          <NavItem >
            <NavLink to="/" className="nav-link" style={{color: "white", textDecoration: "none"}}>Home</NavLink>
          </NavItem>
          {logged_in &&
            <NavItem >
              <a href={sign_out_route} className="nav-link" >Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
            <NavItem>
              <NavLink to="/apartmentindex" className="nav-link">Apartment Listing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew" className="nav-link">Add Apartment</NavLink>
            </NavItem>
        </Nav>
        </Navbar>
      </>
    )
  }
}
export default Header
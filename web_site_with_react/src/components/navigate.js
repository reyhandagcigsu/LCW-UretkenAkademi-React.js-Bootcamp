import React, { Component } from "react";
import {Navbar, NavbarBrand, NavbarText, NavbarItem, NavItem, Nav, Row, Col, Collapse, NavLink, NavbarToggler } from "reactstrap";
import SepetOzeti from "./SepetOzeti";
import {Link} from 'react-router-dom';


class Navigate extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Sepetim.com</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
				<NavLink>
				<Link to="form">Form Demo</Link>
				</NavLink>
              </NavItem>

			  <NavItem>
				<NavLink>
				<Link to="form2">Form Demo2</Link>
				</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
             <SepetOzeti
			 sepettenCikar={this.props.sepettenCikar}
			 sepet = {this.props.sepet}> 
			 
			 </SepetOzeti>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigate;

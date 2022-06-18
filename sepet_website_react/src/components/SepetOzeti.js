import React, { Component } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  Nav,
  Row,
  Col,
  Collapse,
  NavLink,
  NavbarToggler,
  UncontrolledDropdown,
  Badge,
} from "reactstrap";
import {Link} from 'react-router-dom';


class SepetOzeti extends Component {
  bosSepet() {
    return (
      <NavItem>
        <NavLink>Sepet Boş</NavLink>
      </NavItem>
    );
  }
  sepetOzeti() {
    return (
      <div>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            Sepetiniz
          </DropdownToggle>

          <DropdownMenu right>
            {this.props.sepet.map((sepetUyesi) => (
              <DropdownItem key={sepetUyesi.urun.id}>
                <Badge
                  Color="danger"
                  onClick={() => this.props.sepettenCikar(sepetUyesi.urun)}
                > X</Badge>
                {sepetUyesi.urun.productName}
                <Badge Color="Success"> {sepetUyesi.quantity}</Badge>
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem>
               <Link to="sepet">
                Sepete Git
               </Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }
  render() {
    return (
      <div>
        {" "}
        {this.props.sepet.length > 0 ? this.sepetOzeti() : this.bosSepet()}{" "}
      </div>
    );
  }
}

export default SepetOzeti;

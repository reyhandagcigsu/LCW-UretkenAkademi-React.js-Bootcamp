import React, { Component } from "react";
import { ListGroup, ListGroupItem, Alert } from "reactstrap";
import { Card, CardTitle, CardText, Button } from "reactstrap";
import { Table } from "reactstrap";

class UrunListesi extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3> {this.props.bilgiUrunListesi.baslik} </h3>
        <h6> {this.props.bilgiUrunListesi.ilaveBilgi} </h6>
        <div>
          <h4> {this.props.seciliKategori}</h4>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Price Per Unit</th>
              <th>Quantity Per Unit</th>
              <th>Stocks Quantity</th>
              <th>gssdhbshs</th>
            </tr>
          </thead>
          <tbody>
            {this.props.urunler.map((urun) => (
              <tr key={urun.id}>
                <th scope="row"> {urun.id}</th>

                <td> {urun.productName}</td>
                <td> {urun.unitPrice}</td>
                <td> {urun.quantityPerUnit}</td>
                <td> {urun.unitsInStock}</td>
                <td>
                  <div>
                    <Button 
                    onClick={() => this.props.sepeteEkle(urun)}
                    color="primary">Ekle</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UrunListesi;

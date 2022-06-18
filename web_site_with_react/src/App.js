// import React from "react";
import React, { Component } from "react";
import Navigate from "./components/navigate";
import Kategori from "./components/kategori";
import UrunListesi from "./components/urunListesi";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import SepetListesi from "./components/SepetListesi";
import FormDemo from "./components/FormDemo";
import FormDemo2 from "./components/FormDemo2";

class App extends Component {
  state = { seciliKategori: "", urunler: [], sepet: [] };
  kategoriDegistir = (kategoriSec) => {
    // arrow function
    this.setState({ seciliKategori: kategoriSec.categoryName }); // set state değişiklik yapar.
  };
  urunGetir() {
    fetch("http://localhost:3000/products")
      .then((rsponse) => rsponse.json())
      .then((data) => this.setState({ urunler: data }));
  }

  sepeteEkle = (urun) => {
    let yeniUrun = this.state.sepet;
    var urunEklendi = yeniUrun.find((s) => s.urun.id === urun.id);
    if (urunEklendi) {
      urunEklendi.quantity += 1;
    } else {
      yeniUrun.push({ urun: urun, quantity: 1 });
    }
    this.setState({ sepet: yeniUrun });
    alertify.success(urun.productName + "Sepete Eklendi", 3);
  };

  sepettenCikar = (urun) => {
    let kalanUrunler = this.state.sepet.filter((u) => u.urun.id !== urun.id);
    this.setState({ sepet: kalanUrunler });
    alertify.error(urun.productName + "Sepetten Çıkarıldı", 1);
  };

  componentDidMount() {
    this.urunGetir();
  }

  render() {
    let bilgiUrunListesi = {
      baslik: "Ürün Listemiz",
      ilaveBilgi: "Ürün İlave Bilgiler",
    };
    let bilgiKategori = {
      baslik: "Kategorilermiz",
      ilaveBilgi: " Kategori İlave Bilgiler",
    };
    return (
      <div>
        <Container>
          <Row>
            <Navigate
              sepettenCikar={this.sepettenCikar}
              sepet={this.state.sepet}
            />
          </Row>
          <Row>
            <Col xs="3">
              {" "}
              <Kategori
                seciliKategori={this.state.seciliKategori}
                kategoriDegistir={this.kategoriDegistir}
                bilgiKategori={bilgiKategori}
              />{" "}
            </Col>
            <Col xs="9">
              {" "}
              <Routes>
                <Route
                  path="/"
                  element={
                    <UrunListesi
                      sepeteEkle={this.sepeteEkle}
                      urunler={this.state.urunler}
                      seciliKategori={this.state.seciliKategori}
                      bilgiUrunListesi={bilgiUrunListesi}
                    />
                  }
                ></Route>
                <Route
                  path="/sepet"
                  element={
                    <SepetListesi
                      sepet={this.state.sepet}
                      sepettenCikar={this.sepettenCikar}
                    />
                  }
                ></Route>
                <Route path="/form" element={<FormDemo />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

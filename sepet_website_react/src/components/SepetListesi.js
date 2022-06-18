import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';

class SepetListesi extends Component {
    renderSepet () {
        return (
            <Table stripped> 
                <thead> 
                    <tr>
                        <th> Number </th>
                        <th>Kategori Id </th>
                        <th>Ürün İsmi </th>
                        <th>Birim Fiyat </th> 
                        <th>Units In Stocks  </th>
                        <th>Adet  </th>
                        <th>  </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.sepet.map(sepetUrun=>(
                            <tr key={sepetUrun.urun.id}> 
                                <td> { sepetUrun.urun.id}</td>
                                <td> { sepetUrun.urun.categoryId}</td>
                                <td> { sepetUrun.urun.productName}</td>
                                <td> { sepetUrun.urun.unitPrice}</td>
                                <td> { sepetUrun.urun.unitsInStock}</td>
                                <td> { sepetUrun.adet}</td>
                                <Button color="danger" onClick={() => this.props.sepettenCikar(sepetUrun.urun)}> Ürünü Sil </Button>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <div>
               {this.renderSepet()}
            </div>
        );
    }
}

export default SepetListesi;
import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
       
        const { sanPham,themGioHang,hanldeChangeSanPham } = this.props
        return (
            <div className="card text-white ">
                <img className="card-img-top" src={sanPham.image} alt={sanPham.image} with={100} height={300}/>
                <div className="card-body text-left">
                    <h4 className="card-title" style={{color:"black"}}>{sanPham.name}</h4>
                    <span style={{color:"black"}}>{sanPham.price}$</span> <br/>
                    <div className=' d-flex mt-2' >
                    <button onClick={()=> themGioHang(sanPham)} className= "btn btn-dark mr-2">Add to carts <i className="fa-solid fa-cart-shopping"></i></button>
                    <button onClick={() =>hanldeChangeSanPham(sanPham)} className='btn btn-success'  data-toggle='modal' data-target='#modelXem'>Xem Thông Tin</button>
                    </div>
                </div>
            </div>

        )
    }
}

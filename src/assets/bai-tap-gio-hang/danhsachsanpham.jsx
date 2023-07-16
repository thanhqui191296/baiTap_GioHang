import React, { Component } from 'react'
import SanPhamGioHang from './sanphamgiohang'

export default class DanhSachSanPham extends Component {
    render() {
        const { mangSanPham, themGioHang, hanldeChangeSanPham } = this.props
       
        
        return (
            <div className='container'>
                <div className='row'>
                    {mangSanPham.map((sanPham, index) => {
                        return (
                            <div className='col-4 mt-4' key={index}>
                                
                                <SanPhamGioHang hanldeChangeSanPham={hanldeChangeSanPham} themGioHang={themGioHang} sanPham={sanPham} />
                            </div>

                        )
                    })}
                </div>

            </div>
        )
    }
}

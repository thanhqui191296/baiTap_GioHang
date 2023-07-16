import React, { Component } from 'react'

export default class XemChiTiet extends Component {
    render() {
        const { sanPham } = this.props
        return (
            <div className="modal fade" id="modelXem" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ width: '500px' }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Thông Tin Chi Tiết</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                        <div className="modal-body" >
                            <div className='row' >
                                <div className='col-4'>
                                    <h2>{sanPham.name}</h2>
                                    <img src={sanPham.image} style={{ width: '100%' }} alt="" />

                                </div>
                                <div className='col-8'>
                                    <h2>Thông tin chi tiết</h2>
                                    <table className='table'>
                                        <tr>
                                            <td>Tên sản phẩm:</td>
                                            <td>{sanPham.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Thông tin:</td>
                                            <td>{sanPham.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Giá:</td>
                                            <td>{sanPham.price}$</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

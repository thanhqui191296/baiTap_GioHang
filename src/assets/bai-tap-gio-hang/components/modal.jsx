import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const {onDelete,closeModal,xoaGioHang} = this.props
        return (
            <div className="modal" tabIndex={-1} id='modalXoaSP'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Xóa giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Bạn có muốn xóa sản phẩm này không?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => onDelete(xoaGioHang)}>Ok</button>
                            <button type="button" className="btn btn-primary" onClick={() =>closeModal()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

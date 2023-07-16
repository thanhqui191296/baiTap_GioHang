import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const {modal,xoaGioHang} = this.props
        return (
            <div className="modal" tabIndex={-1} id='modalXoaSP'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{modal.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{modal.content}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => xoaGioHang(spGH,id)}>Ok</button>
                            <button type="button" className="btn btn-primary" onClick={modal.onCancle}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

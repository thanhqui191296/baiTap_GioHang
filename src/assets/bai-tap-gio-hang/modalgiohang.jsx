import React, { Component } from 'react'
import Modal from './components/modal'

export default class ModalGioHang extends Component {
    state ={
        showModal:false,
        xoaGioHang:null,
        
    }
    openModal= (id) =>{
        this.setState({
            showModal:true,
            xoaGioHang:id
        })
    }
    handleDelete = () =>{
        const { xoaGioHang }= this.state
        this.props.onDelete(xoaGioHang)
        this.closeModal()
    }
    closeModal =() =>{
        this.setState({
            showModal:false,
            xoaGioHang:null
        })
    }
    render() {

        const { gioHang,xoaGioHang,tangGiamSoLuong } = this.props
        return (
            <>
            <Modal/>

            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ maxWidth: '800px', width: '800px' }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className='table '>
                                <thead>
                                    <tr>
                                        <td>Mã SP</td>
                                        <td>Hình ảnh</td>
                                        <td>Tên Sp</td>
                                        <td>Số lượng</td>
                                        <td>Đơn giá</td>
                                        <td>Thành tiền</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gioHang.map((spGH,index)=>{
                                        return (<tr key={index}>
                                            <td>{spGH.id}</td>
                                            <td><img src={spGH.image} width={60} height={70} alt="" /></td>
                                            <td>{spGH.name}</td>
                                            <td>
                                                <button  onClick={()=>tangGiamSoLuong(spGH.id,true)}className='btn btn-success'>+</button>
                                                {spGH.soLuong}
                                                <button onClick={()=>tangGiamSoLuong(spGH.id,false)} className='btn btn-success'>-</button>
                                                </td>
                                            <td>{spGH.price}$</td>
                                            <td>{spGH.soLuong * spGH.price}$</td>
                                            <td><button 
                                            // onClick={()=> xoaGioHang(spGH.id)} 
                                            data-toggle='modal' data-target='#modalXoaSP' className='btn btn-danger'onClick={()=> xoaGioHang(spGH.id)}  >Xóa</button></td>
                                        </tr>
                                        )
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="5"></td>
                                        <td>Total</td>
                                        <td>
                                            {
                                                this.props.gioHang.reduce((tongTien,spGioHang,index) =>{
                                                    return tongTien += spGioHang.soLuong *spGioHang.price
                                                },0)
                                            }$
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            </>





        )
    }
}

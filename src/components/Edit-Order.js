import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { editOrder } from '../redux/slice/order';

const EditOrder = (props) => {
    const [data, setData] = useState();
    const dispatch = useDispatch()

    const changeValue = (e) => {
        if(parseInt(e.target.value) >=0 || e.target.value === ""){
        setData({ ...data, [e.target.name]: e.target.value })
    }
    }
    
    const applyReason = (reason) =>{
        setData({...data, reason: reason})
    }

    const sendData = ()=>{
        if(props?.orders?.order?.data?.find((val) => val?.id == props?.id).quantity !== data?.quantity 
        || props?.orders?.order?.data?.find((val) => val?.id == props?.id).price !== data?.price  ){
            dispatch(editOrder({id: props?.id, price : data?.price, quantity: data?.quantity , reason : data?.reason }))
        }
        props?.setEditDialog(false)

    }

    useEffect(() => {
        setData(props?.orders?.order?.data?.find((val) => val?.id == props?.id))
    }, [props?.orders])

    return (
        <div style={{ width: "600px", padding: "20px" }}>
            
            <div className='d-flex justify-content-end'>
                <div role="button" onClick={()=> props?.setEditDialog(false)}>
                <ClearIcon />
                </div>
            </div>
            <div className='edit-main-text'>{data?.product_name}</div>
            <div>{data?.brand}</div>
            <div className='d-flex gap-5 align-items-center mt-4'>
                <img width="90px" height="90px" src={data?.image} />
                <div className='row'>
                    <div className='row'>
                        <div className='col-6'>
                            Price($)
                        </div>
                        <div className='col-6 d-flex'>
                            <input className='input-tag' name="price" onChange={(e) => changeValue(e)} value={data?.price} /><span> /6 * 1LB</span>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            Quantity($)
                        </div>
                        <div className='col-6'>
                            <input className='input-tag' name="quantity" onChange={(e) => changeValue(e)} value={data?.quantity} /> <span> x6 * 1LB</span>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            Total
                        </div>
                        <div className='col-6 text-center'>
                            {data?.total}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3' style={{fontWeight: "700"}}>Choose reason<span style={{fontWeight: "400", color: "grey"}}> (optional)</span></div>
             <div className='d-flex gap-2 mt-3'>
                <div role='button' onClick={() => applyReason("Missing Product")} className='reason-text' style={{borderColor: `${
                    data?.reason === "Missing Product" ? "green" : ""
                }`}}>
                    Missing Product
                </div>
                <div role='button' className='reason-text' onClick={() => applyReason("Quality is not the same")} style={{borderColor: `${
                    data?.reason === "Quality is not the same" ? "green" : ""
                }`}}>
                    Quality is not the same
                </div>
                <div role='button' className='reason-text' style={{borderColor: `${
                    data?.reason === "Price is not the same" ? "green" : ""
                }`}} onClick={() => applyReason("Price is not the same")}>
                    Price is not the same
                </div>
                <div role='button' className='reason-text' style={{borderColor: `${
                    data?.reason === "Other" ? "green" : ""
                }`}}  onClick={() => applyReason("Other")}>
                    Other
                </div>
             </div>
             <div className='d-flex gap-4 justify-content-end mt-3 align-items-center'>
                <div role="button" onClick={()=> props?.setEditDialog(false)} className='cancel'>
                    Cancel
                </div>
                <div role="button" onClick={()=> sendData()} className='green-btn'>
                    Send
                </div>
             </div>
        </div>
    )
}

export default EditOrder
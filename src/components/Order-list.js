import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrder } from '../redux/slice/order'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { updateOrder } from '../redux/slice/order';
import { Dialog } from '@mui/material';
import EditOrder from './Edit-Order';

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state);
  const [id, setId] = useState();
  const [urgentDialog, setUrgentDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false)
  const changeStatus = (status, id) => {
    if (status) {
      dispatch(updateOrder({ id, status }));
    }
    else {
      setId(id);
      setUrgentDialog(true)
    }
  }

  useEffect(() => {
    dispatch(fetchOrder())
  }, [])


  return (
    <div >
      <div className='order-list-head '>
        <div className='col-4'>
          Product name
        </div >
        <div className='col-1'>
          Brand
        </div>
        <div className='col-1'>
          Price
        </div>
        <div className='col-1'>
          Quantity
        </div>
        <div className='col-1'>
          Total
        </div>
        <div className='col-4'>
          Status
        </div>
        {console.log(orders)}
      </div>
      {orders?.order?.data?.map((val) => {
        return (
          <div className='d-flex order-col '>
            <div className='col-4 d-flex justify-content-between'>
              <img height="50px" width="50px" src={val?.image} />
              <div>
                {val?.product_name}
              </div >
            </div>
            <div className='col-1'>
              {val?.brand}
            </div>
            <div className='col-1'>
              ${val?.price}/6*1LB
            </div>
            <div className='col-1'>
              {val?.quantity}
            </div>
            <div className='col-1'>
              {val?.total}
            </div>
            <div className='col-4 d-flex justify-content-between gap-2 align-items-center' style={{ backgroundColor: "#F9F9F9", minHeight: "80px", padding: "0px 20px" }}>
              <div className={`${val?.status && "green-btn"}`} style={{ backgroundColor: `${val?.status === "Missing-Urgent" ? "red" : val?.status === "Missing" ? "orange" : ""}` }}>{val?.status} </div>
              <div className='d-flex gap-2 align-items-center'>
                <div role="button" onClick={() => changeStatus(true, val?.id)}>
                  <CheckIcon style={{ color: `${val?.status === "Approved" ? "green" : ""}` }} />
                </div>
                <div role="button" onClick={() => changeStatus(false, val?.id)}>
                  <ClearIcon style={{ color: `${val?.status === "Missing-Urgent" ? "red" : val?.status === "Missing" ? "orange" : ""}` }} />
                </div>
                <div role="button" onClick={()=> {setEditDialog(true); setId(val?.id)}}>
                Edit
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <Dialog open={urgentDialog} maxWidth="sm">
        <div className='p-2' style={{ maxWidth: "400px" }}>
          <div className='d-flex justify-content-between'>
            <div style={{ fontWeight: "500" }}>Missing Product</div>
            <div role="button" onClick={() => setUrgentDialog(false)}>
              <ClearIcon />
            </div>
          </div>
          <div className='mt-3'>
            is {orders?.order?.data?.find((val) => val?.id == id)?.product_name} urgent?
          </div>
          <div className='d-flex justify-content-end gap-3 mt-3 mb-4'>
            <div role="button" onClick={() => {
              dispatch(updateOrder({ id, status: "not_urgent" }));
              setUrgentDialog(false);
            }} style={{ fontWeight: "600" }}>
              No
            </div>
            <div role="button" onClick={() => {
              dispatch(updateOrder({ id, status: "urgent" }));
              setUrgentDialog(false);
            }} style={{ fontWeight: "600" }}>
              Yes
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog open={editDialog} maxWidth="md">
          <EditOrder id={id} orders={orders} setEditDialog={setEditDialog} />
      </Dialog>
    </div>
  )
}

export default OrderList
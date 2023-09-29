import React, { useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrder } from '../redux/slice/order';

const Navbar = () => {
   const dispatch = useDispatch();
   const orders = useSelector((state) => state)
  useEffect(()=>{
   dispatch(fetchOrder())
  }, [])
  return (
    <div className='Navbar'>
        <div className='d-flex pt-1 gap-5 align-items-center'>
            <div className='logo-text'>
               Reeco
            </div>
            <div className='header-text'>
                Store
            </div>
            <div className='header-text'>
                Orders
            </div>
            <div className='header-text'>
                Analytics
            </div>
        </div>
        <div className='d-flex pt-1 gap-5 align-items-center'>
          <div>
          <Badge badgeContent={orders?.order?.data?.length} style={{color: "#03fc41"}}>
             <ShoppingCartIcon style={{color:  "white"}}/>
             </Badge>
          </div>
          <div className='header-text'>
            Hello, James
          </div>
        </div>
    </div>
  )
}

export default Navbar
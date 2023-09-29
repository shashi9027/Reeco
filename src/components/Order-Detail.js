import React from 'react'
import { TextField, InputAdornment } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print';

import SearchIcon from '@mui/icons-material/Search';
import OrderList from './Order-list';

const OrderDetail = () => {
    return (
        <div style={{ backgroundColor: "#FBFBFB", padding: "15px 60px" }}>
            <div className='order-primary-detail d-flex gap-2'>
                <div className='col-2' >
                    <div className='order-primary-main-text'>
                        Supplier
                    </div>
                    <div className='order-primary-sub-text'>
                        East Coast Fruits Vegetables
                    </div>

                </div>
                <div className='col-2' >
                    <div className='order-primary-main-text'>
                        Shipping date
                    </div>
                    <div className='order-primary-sub-text'>
                        Thu, Feb 10
                    </div>

                </div>
                <div className='col-2' >
                    <div className='order-primary-main-text'>
                        Total
                    </div>
                    <div className='order-primary-sub-text'>
                        $ 15,028.3
                    </div>

                </div>
                <div className='col-2' >
                    <div className='order-primary-main-text'>
                        Category
                    </div>
                    <div className='order-primary-sub-text'>
                        $ 15,028.3
                    </div>

                </div>
                <div className='col-2' >
                    <div className='order-primary-main-text'>
                        Department
                    </div>
                    <div className='order-primary-sub-text'>
                        300-444-678
                    </div>

                </div>
                <div className='col-2'>
                    <div className='order-primary-main-text'>
                        Status
                    </div>
                    <div className='order-primary-sub-text'>
                        Awaiting your approvel
                    </div>

                </div>
            </div>

            <div className='order-sec-detail  mt-3 '>
                <div className='d-flex align-items-center justify-content-between'>
                <div>
                    <TextField
                        id="search"
                        type="search"
                        label="Search"
                        value=""
                        sx={{ width: 600 }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                </div>
                <div className='d-flex gap-5'>
                   <div className='white-btn' style={{height:"fit-content"}}>
                       Add item
                   </div>
                   <div >
                    <PrintIcon style={{color: "#1E633F"}}/>
                   </div>
                </div>
                </div>
                <OrderList/>
            </div>
             

        </div>
    )
}

export default OrderDetail
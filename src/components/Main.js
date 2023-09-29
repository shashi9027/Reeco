import React from 'react'

const Main = () => {
  return (
    <div >
        <div className='upper-part'>
        <div className='d-flex gap-2 pt-2' style={{color: "#C3C4C7"}}>
            <div>Orders</div>
            <div>{'>'}</div>
            <div className='text-decoration-underline'>Order 32457ABC</div>
        </div>
        <div className='d-flex justify-content-between mt-3'>
           <div style={{fontWeight: "700", fontSize: "20px"}}>
              Order 32457ABC
           </div> 
           <div className='d-flex gap-4'>
           <div style={{ fontSize: "14px"}} className='white-btn'>
             Back
           </div>
           <div style={{ fontSize: "14px"}} className='green-btn'>
              Approve Order
           </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Main
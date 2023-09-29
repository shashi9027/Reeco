import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrder = createAsyncThunk("fetch", async () =>{
    const response = await  fetch("data.json");
    return response.json();

})

const orderSlice =  createSlice({
    name: "order",
    initialState: {
        isLoading: false,
        data:null
    },
    reducers: {
        updateOrder: (state, action) => {
            const { id, status } = action.payload;
            const orderToUpdate = state.data.find((order) => order.id === id);
            if (orderToUpdate && status === true ) {
              orderToUpdate.status = "Approved";
            }
            else if(orderToUpdate && status === "urgent"){
                orderToUpdate.status = "Missing-Urgent"
            } 
            else if(orderToUpdate && status === "not_urgent") {
                orderToUpdate.status = "Missing" 
            }         
            
        },

        editOrder: (state, action) => {
            const { id, price, quantity, reason } = action.payload;
            const orderToUpdate = state.data.find((order) => order.id === id);
            if(orderToUpdate.price !== price && orderToUpdate.quantity !== quantity){
                orderToUpdate.status = "price and quantity both updated"
            }
            else if(orderToUpdate.quantity !== quantity){
                orderToUpdate.status = "quantity is updated"
            }
            else if(orderToUpdate.price !== price){
                orderToUpdate.status = "price is updated"
            }
            orderToUpdate.reason = reason;
            orderToUpdate.price = price;
            orderToUpdate.quantity = quantity;
            console.log(orderToUpdate.price, price)
            
                  
            
        },
      },
    extraReducers: (builder)=>{
        builder.addCase(fetchOrder.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchOrder.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchOrder.rejected, (state, action) =>{
            state.isLoading = false;
        })
    }
})

export const { updateOrder, editOrder } = orderSlice.actions;
export default orderSlice.reducer
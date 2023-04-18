import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


const initialState = {
  cart:localStorage.getItem("cartData")?JSON.parse(localStorage.getItem("cartData")):[],
  cartItem:0
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    Add_cart(state,action){
        const itemIndex=state.cart.findIndex(item=>item.id===action.payload.id)
        if(itemIndex>=0){
            state.cart[itemIndex].quantity +=1;
            state.cartItem +=1;
            toast.info('Increase the quantity of product!!', {
              position:"bottom-center"
          });
        }
        else{
            const temProduct={...action.payload,quantity:1}
            state.cart.push(temProduct);
            state.cartItem +=1;
            toast.success('Added to Cart', {
              position:"bottom-center"
          });
        }
        localStorage.setItem("cartData",JSON.stringify(state.cart))
    },
    Remove_cart(state,action){
      // const item = state.cart.filter(i=> i.id=== action.payload);
         state.cart= state.cart.filter(item=>item.id!==action.payload.id);
          // console.log(item);
         state.cartItem -= action.payload.q;
         localStorage.setItem("cartData",JSON.stringify(state.cart))
         toast.error('Product Removed!', {
          position:"bottom-center"     
         });
    },
    Remove_all(state){
        state.cart=[];
        state.cartItem = 0;
        localStorage.setItem("cartData",JSON.stringify(state.cart))
        toast.warning('Cart Clear Successfull !', {
          position:"bottom-center"     
         });
   },
  },
})

// Action creators are generated for each case reducer function
export const {Add_cart,Remove_cart,Remove_all} = productSlice.actions

export default productSlice.reducer
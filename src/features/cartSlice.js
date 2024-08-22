import { createSlice } from '@reduxjs/toolkit'
 const initialState = {
  cart:[],
  totalPrice:0,
  totalQuantity:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   AddToCart : (state,actions)=>{
    const find = state.cart.findIndex((value)=>value._id===actions.payload._id)
    if(find !==-1){
        state.cart[find] = {...state.cart[find],quantity:state.cart[find].quantity+1}
    }else{
        state.cart.push({...actions.payload,quantity:1})
    }
   },

   DeleteCartItem:(state,actions)=>{
      state.cart = state.cart.filter((value)=> value._id !== actions.payload._id)
   },

   RemoveAllProduct:(state)=>{
      state.cart = []
   },


  
   cartTotal: (state)=>{
    const {totalQuantity , totalPrice} = state.cart.reduce((cartTotal,cartItem)=>{
        const {productPrice
            ,quantity} = cartItem
        const itemTotal = productPrice
        *quantity
        cartTotal.totalPrice += itemTotal
        cartTotal.totalQuantity += quantity
        return cartTotal
    },{
      totalPrice:0,
      totalQuantity:0
    });
    state.totalPrice = totalPrice.toFixed(2)
    state.totalQuantity = totalQuantity
  },

  increaseItemQuantity: (state, action) => {
    state.cart = state.cart.map((item) => {
      if (item._id === action.payload._id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  },
  decreaseItemQuantity: (state, action) => {
    state.cart = state.cart.map((item) => {
      if (item._id === action.payload._id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }, 

  },
})


export const { AddToCart , DeleteCartItem , RemoveAllProduct , cartTotal , increaseItemQuantity , decreaseItemQuantity } = cartSlice.actions

export default cartSlice.reducer

const reducer = ((state,action)=>{
    if(action.type === "INC_DEC"){
        const updateQty = state.cart.map((cartItems)=>{
            if(cartItems.id === action.payload.id){
                if(action.payload.type === "inc"){
                    return {...cartItems , quantity:cartItems.quantity+1}
                }
                if(action.payload.type === "dec"){
                    return {...cartItems, quantity:cartItems.quantity-1}
                }
            }
            return cartItems;
        }).filter((curItem)=> curItem.quantity !== 0);
        return {...state, cart:updateQty};
    }

    if(action.type === "TOTAL"){
        const {amount,total} = state.cart.reduce((getTotal,items)=>{
            const {price,quantity} = items;
            getTotal.amount += quantity * price;
            getTotal.total += quantity;
            return getTotal;
        },{amount:0,total:0})

        return{ ...state, amount,total };
    }

    if(action.type === "DELETE_ONE_BY_ONE"){
        return {
            ...state, cart:state.cart.filter((curItem)=>{
                return curItem.id !== action.payload;
            })
        }
    }

    if(action.type === "DELETE_ALL"){
        return{
            ...state, cart:[]
        }
    }

    return state;
});

export default reducer;
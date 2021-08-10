import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './Context';

function Cart() {
    const {cart, amount, deleteAll} = useGlobalContext(); 
    if(cart.length === 0){
        return(
            <h2>Your Cart Is Currently Empty</h2>
        )
    }
    return (
        <>
         <div className="cartMain">
             {
                 cart.map((items)=>{
                     return(
                        <CartItem key={items.id} {...items}/>
                     )
                 })     
             }
            
          </div>

            <div className="footer">
                <div className="cartTotal">
                    <h5>Total</h5>
                    <h4> Rs {amount} /-</h4>
                </div>
                <div className="clearCart">
                    <button className="btn" onClick={deleteAll}>Clear All</button>
                </div>
            </div>
        </>
    )
};

export default Cart;

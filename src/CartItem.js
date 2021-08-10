import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {useGlobalContext} from './Context';

const CartItem = ({id,image,itemName,price,quantity})=>{
const {incDec, deleteItem} = useGlobalContext();
    return(
        <div className="cart">
            <div className="imgDiv">
                <img src={image} alt="images" />
            </div>
            <div className="aboutItem">
                <h6>{itemName}</h6>
                <h6>{price}</h6>
                <h6 className="removeItem" onClick={()=>{
                    deleteItem(id);
                }}>remove</h6>
            </div>
            <div className="incDec">
              <ArrowDownwardIcon onClick={()=>{
                  incDec(id,"dec");
              }}/>
              <h6>{quantity}</h6>
              <ArrowUpwardIcon onClick={()=>{
                  incDec(id,"inc");
              }}/>
            </div>
        </div>
      
    )
};

export default CartItem;
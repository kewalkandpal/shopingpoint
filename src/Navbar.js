import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useGlobalContext } from './Context';
const Navbar = ()=>{
    const {total} = useGlobalContext();
    return(
        <nav>
            <div className="logo">
                Shoping Point
            </div>
            <div className="bucket">
                <ShoppingCartIcon className="shop"/>
                <p>{total}</p>
            </div>
        </nav>
    )
};

export default Navbar;
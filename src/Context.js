import React, {useContext, useEffect, useReducer} from 'react';
import data from './Data';
import reducer from './Reducer';

const ContextProvider = React.createContext();

const initialState = {
    cart:data,
    amount:0,
    total:0
};

const AppProvider = ({children})=>{
const [state,dispatch] = useReducer(reducer,initialState);

const incDec = (id,type)=>{
    dispatch({type:"INC_DEC", payload:{id,type}})
};
const deleteItem = (id)=>{
    dispatch({type:"DELETE_ONE_BY_ONE", payload:id})
};
const deleteAll = ()=>{
    dispatch({type:"DELETE_ALL"})
};

useEffect(()=>{
    dispatch({type:"TOTAL"})
},[state.cart]);

return(
  <ContextProvider.Provider value={{...state, incDec, deleteItem, deleteAll}}>
   {children}
  </ContextProvider.Provider>
)
    
};

export const useGlobalContext = ()=>{
    return useContext(ContextProvider);
};



export {AppProvider};
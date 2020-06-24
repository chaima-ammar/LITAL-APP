import  * as types from '../action/type'
import { act } from 'react-dom/test-utils'

const init = {
    product : [],
    idproduct :"",
    comment:[],
}

const prodactReducer = ( state = init , action) => {
    switch(action.type){
       case types.ADDPRODUCT: 
       console.log("product add " , action.paylod)
       return { ...state ,
          product: [...state.product,action.paylod]}
     case types.GETALLPRODUCT:

         return { ...state.product,
            product :action.payload
         } 
         case types.DELETEPRODUCTSTATE : 

         return { ...state ,
          product  : state.product.filter((el) => el.id !== action.paylod)}
         case types.ADDIDPRODUCTTOSTATE:
             console.log("id est" , action.paylod)
             return {
                 ...state,
                 idproduct : action.paylod }

        case types.FILTERPRODUCT:
            return {
                ...state,
                product: state.product.filter( el => el.name == action.paylod ||el.id == action.paylod || el.categorie ==  action.paylod ) 
            }
            case types.ADDIDPRODUCTTOSTATE:
                return {
                    ...state,
                    idproduct:action.paylod
                }
           case types.GETCOMENTAIR : 
           return {
            ...state,
            comment:action.payload
        }
   default:
    return state
             }
}




export default prodactReducer
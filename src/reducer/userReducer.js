import * as types from '../action/type'
const initistate =  {
 user : [] ,
  iduser : 1
}


export default function userReducer(state = initistate, action) {

    switch (action.type) {
       case   types.GETALLUSERFORMAPI :
     return  { ...state ,
      user :  action.payload
     }
      
      case types.DELATEUSERID : 
       let  user = Object(state.user)
      return {...state ,
         user : user.filter ( el => el.id !== action.payload)
      }
       case types.UPDATESTATE : 
       return {
         ...state ,
         iduser : action.payload
       }
       case types.UPDATEUSERID: 
       let  userdata = Object(state.user)
       let updat = {
        "first_name":action.payload[0],
        "last_name":action.payload[1],
        "email":action.payload[2],
        "password":action.payload[3],
        "image":action.payload[4],
        "id":action.payload[5],
       }
      let x =  userdata.filter ( el => el.id !== action.payload[5])
      console.log(action.payload)
       x= x.concat(updat)
       return { ...state,
       user : x
      
       }
      case types.FILTERUSER:
        
        return {
            ...state,
        user :   state.user.filter( el => el.first_name == action.paylod ||el.email== action.paylod || el.role ==  action.paylod  ||el.posteOcuper ==  action.paylod  ) 
        }
      default:
      return state
    }
 
}
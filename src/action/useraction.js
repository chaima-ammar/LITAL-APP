import * as types from './type'
import Axios from 'axios';
import {URL} from './baseurl'
import moment from 'moment';


// get alll users
export  function getusersFromApi(){
    return (dispatch) => Axios.get(URL+"users")
    .then ((res) => dispatch(getAllUsers(res.data)) )
   
    .catch((error) => alert(error))
   }
   export const getAllUsers = (payload) => ({
    type: types.GETALLUSERFORMAPI,
    payload,
  });
   
   //user id modification
   export const  updatestate = (id) => ({
     type: types.UPDATESTATE ,
     payload : id
   })
   //delate user
   export function deleteUser(id){
    return (dispatch) => Axios.delete(URL+`users/${id}`)
    .then ((res) => dispatch(delatUserid(id)) )
    .catch((error) => alert(error))

   }

   export const delatUserid = (id) =>({ 
     type : types.DELATEUSERID,
     payload :id
   })
       // add user
   export function Adduser(x){return (dispatch) => 
    Axios.post(URL+`users`, ({
    
        "first_name": x[0],
        "last_name": x[1],
        "email": x[2],
        "password": x[3],
        "image": x[4],
        "posteOcuper": x[5],
        "role": x[6],
        "dateInscription": moment().format("DD/MM/YYYY") 
      
  }))
   .then( res => console.log(res),
          window.location.reload()     )
   .catch(err => console.log(err))
   }
   //update user
   export function updatedate(first_name,last_name,email,password,image,id){
    return (dispatch) => 
    Axios.put(URL+`users/${id}`, ({
      first_name:first_name,
      last_name : last_name,
      email:email,
      password :password,
      image:image

    }))
    .then ((res) => dispatch(updateUserid(first_name,last_name,email,password,image,id)) )
    .catch((error) => alert(error))
  
   }

   export const updateUserid = (first_name,last_name,email,password,image,id) =>({ 
  type : types.UPDATEUSERID,
  payload :[first_name,last_name,email,password,image,id]
})

/* filter user state */
export const changestateuser = (paylod) =>({

type : types.FILTERUSER,
paylod,

})

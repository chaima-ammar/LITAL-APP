import moment from 'moment';
import * as types from './type'
import {URL}  from './baseurl'
import Axios from 'axios';
// post new product
export  function postnewproduct(x,image){
  let  paylod = {
    "name": x[0],
    "type":x[1] ,
    "collection":x[2],
    "marque":x[3],
    "reference":x[4],
    "image": image !== null ? image :  x[5],
    "prix":x[6],
    "quantite":x[7],
    "color": x[8],
    "dateajoute":moment().format("DD/MM/YYYY"),
    
    "ok":[]
  
  
   }
    return (dispatch) => Axios.post(URL+"ListeProduit",
paylod
     )
    .then ((res) => dispatch(addproduct(paylod) , console.log("listedeprosuit",res.data)) )
   
    .catch((error) => console.log(error +"liste produit post"))
   }
export const addproduct = (paylod) => 
({

    type:types.ADDPRODUCT,
    paylod,

}
)
// get all product from api
export  function getallproductfromapi(){
  return (dispatch) => Axios.get(URL+"ListeProduit")
  .then (res => dispatch(allproductfromapi(res.data))) 
 
  .catch((error) => alert(error + "liste produit get"))
 }
 export const allproductfromapi = (payload) => ({
  type: types.GETALLPRODUCT,
  payload:payload,
});
 
// update product 
export function updatedateprodact (x) {
  console.log("prpos" ,x)
  return (dispatch) => Axios.patch(URL+"ListeProduit/"+x.id,({
   ...x,
   "datemodification":moment().format("DD/MM/YYYY")})
  )
  .then(res => dispatch(updateproductstate(x)))
  .catch( err => console.log(err + "liste produit patch"))
}
export const updateproductstate = paylod => ({

  type : types.UPDATEPRODUCTSTATE  ,
   paylod,
})

// delate prodact
export function delateproduct(id){
  return (dispatch) => Axios.delete(URL +`ListeProduit/${id}`)
  .then(res =>  console.log(res) ,dispatch(delateproductfromstate(id)))
  .catch( err => console.log(err + "liste produit delate"))
}
export const delateproductfromstate = (paylod) => ({
  type : types.DELETEPRODUCTSTATE,
  paylod,
})

// add id  product to state
export const addidproducttostate = (paylod) => ({
  type : types.ADDIDPRODUCTTOSTATE,
  paylod,
})
//filter state
export const changestateprodact= (paylod) => ({
  type: types.FILTERPRODUCT,
  paylod,
})

//get all commentaire
export  function getallcomment(){
  return (dispatch) => Axios.get(URL+"comentair")
  .then (res => dispatch(allcomment(res.data))) 
 
  .catch((error) => alert(error + "liste produit comentair"))
 }
 export const allcomment = (payload) => ({
  type: types.GETCOMENTAIR,
  payload:payload,
});
 
//sendcomentair
export  function postallcomment(id,z){
  return (dispatch) => Axios.patch(URL+"ListeProduit/"+id,({
 "ok": z }))
  .then (res => console.log(res),window.location.reload()) 
 
  .catch((error) => alert(error + "liste produit add comentair"))
 }
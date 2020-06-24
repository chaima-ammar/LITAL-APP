import * as types from './type'
import Axios from 'axios';
import {URL} from './baseurl'
import moment from 'moment';
// get all historique from api
export  function getallhistoriquefromapi(){
    return (dispatch) => Axios.get(URL+"historique")
    .then (res => dispatch(allhistoriquefromapi(res.data))) 
   
    .catch((error) => console.log(error))
   }
   export const allhistoriquefromapi = (paylod) => ({
    type: types.GETALLHISTORIQUE,
    paylod,
  });

  //// set new historique from api
  export  function setnewhistoriquefromapi(x,action){
      let paylod = x
    return (dispatch) => Axios.post(URL+"historique",({
      "name": x[0],
      "type":x[1] ,
      "collection":x[2],
      "marque":x[3],
      "reference":x[4],
      "image": x[5],
      "prix":x[6],
      "quantite":x[7],
      "color": x[8],
      "dateaction":moment().format("DD/MM/YYYY"),
      "action":action
    })
   
    )
    .then (res => dispatch(setnewhistorique(paylod))) 
   
    .catch((error) => alert(error))
   }
   export const setnewhistorique = (paylod) => ({
    type: types.ADDISTORIQUE,
    paylod,
  });

  //filter state
  export const changestatehistorique = (paylod) => ({

    type: types.FILTERHISTORIQUE,
    paylod,

  })
  export const filteraction=(paylod) => ({

    type: types.FILTEACTION,
    paylod,

  })
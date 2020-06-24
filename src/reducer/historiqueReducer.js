import * as types from '../action/type'


const init = ["bonjour","bonsoir"]

const historiqueReducer = ( state = init , action) => {
    switch(action.type){
     case types.GETALLHISTORIQUE:
         console.log("historiqu", action.paylod)
         return action.paylod
     case types.ADDISTORIQUE:
         return [action.paylod, ...state]
    case types.FILTERHISTORIQUE:
        let x = state;
        console.log(action.paylod)
        console.log(x)
        if (action.paylod !== '')
        return state.filter( el => el.username == action.paylod || el.dateaction== action.paylod || el.prix == action.paylod || el.color == action.paylod || el.reference ==  action.paylod )  
    default:
    return state
    case types.FILTEACTION: {
        console.log(action.paylod)
        if (action.paylod == 'Ajouter')
        return state.filter( el => el.action == "ajoute produit")
        else if (action.paylod== 'Modifier')
        return state.filter( el => el.action == "modification")
        else if(action.paylod== 'suprimer')
        return state.filter( el => el.action == "produit suprimer")
        else return state
    }
}

}

export default historiqueReducer
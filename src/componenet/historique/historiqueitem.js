import React ,{useEffect,useRef,useState} from 'react'
import Model from '../composant/modal'
import Modasl from '../composant/modal'

import { Modal,Button } from 'react-bootstrap';
export default function Historiqueitem(props) {
    const nameRef = useRef(null);
    const [state, setstate] = useState(false)
    useEffect(() => {
      if (nameRef.current) {
        console.log(nameRef)
      
        nameRef.current.style = 'visibility: hidden';
      }
    
    }, [])
function view (){
  console.log(nameRef)
  setstate(true)
   
}
function handleClose(){
    setstate(false)
}
    return (
        <>
    <tr > 
<td>{props.historique.id}</td>
<td>{props.historique.username}</td>
<td>{props.historique.name}</td>
<td>{props.historique.reference}</td>
<td>{props.historique.dateaction}</td>
<td>{props.historique.action}</td>

<td ><button onClick={view } className="bagroundcolortransparent vertcolor"><i class="eye icon"></i></button></td>
 </tr>
 <Modal show={state} onHide={handleClose} dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title" size="xl">
        <Modal.Header closeButton>
    <Modal.Title>Transaction numero {props.historique.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className="table">
     <thead>
    <tr><th>Id</th>
      <th>Nom user</th>
      <th>Nom Produit</th>
      <th>Type </th>
      <th>Collection</th>
      <th>Marque</th>
      <th>Reference</th>
      <th>Image</th>
      <th>Prix</th>
      <th>Quantitée</th>
      <th>Color</th>
      <th>Date action</th>
      <th>Action</th>
    </tr></thead><tbody>
        <tr>
    <td>{props.historique.id}</td>
<td>{props.historique.username}</td>
<td>{props.historique.name}</td>
<td>{props.historique.type}</td>
<td>{props.historique.collection}</td>
<td>{props.historique.marque}</td>
<td>{props.historique.reference}</td>
<td>< img src={props.historique.image} alt={props.historique.id} width="100px"></img></td>
<td>{props.historique.prix}</td>
<td>{props.historique.quantite}</td>
<td>{props.historique.color}</td>
<td>{props.historique.dateaction}</td>
<td>{props.historique.action}</td>
</tr>
   </tbody>
   </table>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

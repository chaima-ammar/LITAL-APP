import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Pagination } from "../composant";
import { URL } from '../../action/baseurl'
import { Modal, Button } from 'react-bootstrap';
let datas = []

function Lastprodact(props) {

  let [data, setdata] = useState([])
  let [valeur, show] = useState(false)
  const [state, setState] = useState({
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: "",
  })
  useEffect(() => {
    Axios.get(URL + "ListeProduit")
      .then(res => {
        if (res.data.length > 15)
          setdata([...res.data].reverse().slice(0, 14))
        else
          setdata([...res.data].reverse())
      })

      .catch((error) => console.log(error))
  }, [])
  const shows = () => {
    show(true)
  }
  const handleClose = () => {
    show(false)
  }
  const showprodact = (rowsPerPage) => {
    var result = null;
    if (rowsPerPage.length > 0) {
      return result = rowsPerPage.map((el, i) =>
        <><tr>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.reference}</td>
          <td>{el.color}</td>
          <td>{el.quantite}</td>
          <td>{el.dateajoute}</td>

          <td><button onClick={() => shows()} class="bagroundcolortransparent vertcolor"><i class="eye icon"></i></button></td>
        </tr>

          <Modal show={valeur} onHide={handleClose} dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title" size="xl">
            <Modal.Header closeButton>
              <Modal.Title> <p className='title'>Produit id:  {el.id}</p></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table class=" table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Type</th>
                    <th>Collection</th>
                    <th>Marque</th>
                    <th>Reference</th>
                    <th>Prix</th>
                    <th>Color</th>
                    <th>Date ajoute</th>
                  </tr></thead><tbody>
                  <tr>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.type}</td>
                    <td>{el.collection}</td>
                    <td>{el.marque}</td>
                    <td>{el.reference}</td>
                    <td>{el.prix}</td>
                    <td>{el.color}</td>
                    <td>{el.dateajoute}</td></tr>
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
    return result;
  };
  const onChangePage = data => {
    setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex
    });
  };
  let rowsPerPage = [];
  rowsPerPage = data.slice(state.startIndex, state.endIndex + 1);
  return (
    <>
    <div className="col-md-2 select">
    Select affichage
    <select
      className="form-control"
      value={state.pageLimit}
      onChange={e => setState({ pageLimit: parseInt(e.target.value) })
      }
   className='select' >
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
    </select>
  </div>
  <br/>
    <div>
      <table class=" table ">
        <thead>
          {
            console.log("data", state)}
          <tr><th>Id</th>
            <th>Nom</th>
            <th>Reference</th>
            <th>Couleur</th>
            <th>Quantiter</th>
            <th>Date ajout</th>
            <th>View Detail</th>
          </tr></thead><tbody>
          {/*[...data].reverse().map(el => <><tr>

                        <td>{el.name}</td>
                        <td>{el.color}</td>
                        <td>{el.categorie}</td>
                        <td>{el.image}</td>
                        <td>{el.id}</td>
                    </tr></>)*/
            showprodact(rowsPerPage)}
        </tbody>
      </table>
      <div className="col-xs-12 dispalyflexbettwen">
        <Pagination
          totalRecords={data.length}
          pageLimit={state.pageLimit || 5}
          initialPage={1}
          pagesToShow={5}
          onChangePage={onChangePage}
        />
      </div>
    </div>
    </>
  )
}


export default Lastprodact
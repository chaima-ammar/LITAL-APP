import React, { useEffect, useState } from 'react'
import { getallproductfromapi,changestateprodact,getallcomment} from '../../action/produit'
import { connect } from "react-redux";

/*component */
import Productitem from './Productitem'
import { Navbar } from "../composant";
import { Background } from "../composant";
import { Pagination } from "../composant";
import { Sidebar } from "../composant";
function Allproduct(props) {
  const [isOpened, setIsOpened] = useState(false);
  const [input, setinput] = useState("");
  const [state, setState] = useState({
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: "",
  })
  useEffect(() => {
    props.getallproductfromapi()
    props.getallcomment()
    console.log(props.stateprodact)
  }, []);
  function recherche(){
    if (input !== '')
    {
     props.changestateprodact(input)
    }
    else 
    props.getallproductfromapi()
     }
  const showprodact = (rowsPerPage) => {
    var result = null;
          if (rowsPerPage.length > 0)
      result = rowsPerPage.map((el, i) => {
        return <Productitem product={el} com={el.ok} key={i}  />;
      });
    
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
  rowsPerPage = props.prod.product.slice(state.startIndex, state.endIndex + 1);
  return (
    <div>
      <Navbar toggleMenu={setIsOpened} />
      <Background setIsOpened={setIsOpened} show={isOpened} />
      <Sidebar show={isOpened} setIsOpened={setIsOpened} />
      <div className="Content">
        <h3 className="title-gestion-produit">Gestion des Produit Lital</h3>
        <div className="row">
          <div className="col-xs-12 box_change_pagelimit select">
            Select affichage
                 <select
              className="form-control"
              value={state.pageLimit}
              onChange={e =>setState({ pageLimit: parseInt(e.target.value) })
              }
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>

          </div>
        </div>
        <span class="ui input">
        <input type="text" placeholder="recherche" onChange={(e) => setinput(e.target.value)}></input><button className="ui  brown button " onClick={recherche}>Recherche</button>
        </span>
        <table className="table">
          <thead>
            <tr><th>id</th>
              <th>Nom</th>
              <th>Reference</th>
              <th>Couleur</th>
              <th>Quantiter</th>
              <th>Image</th>
              <th>Comentaire</th>
              <th>Action</th>
            </tr></thead><tbody>
             {/* props.prod.map(el => <Productitem product={el}></Productitem>)*/}
                    {     showprodact(rowsPerPage)          }
          </tbody>
        </table>
        <div className="col-xs-12 box_pagination_info text-right">
          <p className='title'>
          Nombre de produit: {props.prod.product.length} page  {state.currentPage}/{state.totalPages}
          </p>
        </div>
        <div className="col-xs-12 dispalyflexbettwen">
          <Pagination
            totalRecords={props.prod.product.length}
            pageLimit={state.pageLimit || 5}
            initialPage={1}
            pagesToShow={5}
            onChangePage={onChangePage}
          />
        
        </div>
       
      </div>
      <p className="marginletf30"><a href="/Addprodact">  <button className="ui  brown button ">Ajouter Nouvaux produit</button></a></p>
    </div>
  )
}
const mapStateToProps = (state) => ({
  prod: state.prod
})

const mapDispatchToProps = (dispatch) => ({
  getallproductfromapi: () => dispatch(getallproductfromapi()),
  changestateprodact:(x) => dispatch(changestateprodact(x)),
  getallcomment:() =>dispatch(getallcomment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Allproduct)

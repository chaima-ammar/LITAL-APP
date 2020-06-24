import React,{useState,useEffect,useRef} from 'react'
import {  updatedateprodact } from '../../../action/produit'
import { NavLink } from 'react-router-dom';
import { Navbar } from "../../composant";
import {setnewhistoriquefromapi} from '../../../action/historiquaction'
import { Background } from "../../composant";
import { connect } from "react-redux";
import { Sidebar } from "../../composant";
import moment from 'moment';
 let x =""
 function Updateprodact(props) {
    const [old, setolde] = useState(props.prod.product.filter(el => el.id == props.prod.idproduct))
    const [isOpened, setIsOpened] = useState(false);
    const [newdata, setnew] = useState({})
    const [role, setrole] = useState("");
    const contenu = useRef()
    useEffect(() => {
    if (old !==undefined)
    {
        setnew(...old)
    x = old[0]
  
setolde(x)
    }
    return () => {
    
      };
    }, [])
    function unmount(){
      console.log("new date est " , newdata)
       props.updatedateprodact(old)
       props.setnewhistoriquefromapi(Object.values(old),"modification")
        contenu.current.innerHTML= "<div><h1> Votre Donner A eté modifier avec Succeé<h1></div>"

    }
    return (
        <>
    <Navbar toggleMenu={setIsOpened} />
   <Background setIsOpened={isOpened} show={isOpened} />
   <Sidebar show={isOpened} setIsOpened={setIsOpened} />
   <div className="Content" ref={contenu}>
    <h3 className="centre-item select"> Modifier de produit Numero  {newdata.id}</h3>
       <div className="contenaire bagroundgray">
           <br/><br/>
           <div className="ui inverted segment">
       <div  className="row">
           <div className="Name col-sm">
               <label className="col-sm-4">Name</label>
               <input  className="col-sm-8" defaultValue={x.name} type="text"  onChange={(e) => newdata.name = e.target.value}></input>
           </div>
           <div className="Name col-sm">
           <label className="col-sm-4" >Type</label>
           
               <input className="col-sm-8" type="text" defaultValue={x.type} onChange={(e) => newdata.type = e.target.value} ></input>
           </div>
           <div className="Name col-sm">
           <label  className="col-sm-4"> Collection</label>
               <input  cclassName="col-sm-8" type="text" defaultValue={x.collection} onChange={(e) => newdata.collection = e.target.value}  ></input>
           </div>
           </div>
           <br/>
           <div className="row">
           <div className="marque col-sm">
           <label className="col-sm-4">Marque</label>
               <input  className="col-sm-8" type="text"  defaultValue={x.marque}  onChange={(e) => newdata.marque= e.target.value} ></input>
           </div>
           <div className="Reference  col-sm">
           <label className="col-sm-4">Reference</label>
               <input className="col-sm-8"  type="text" defaultValue={x.reference}  onChange={(e) => newdata.reference = e.target.value}  ></input>
           </div>
           <div className="Image  col-sm">
  <label className="col-sm-4">Image</label>
      <input className="col-sm-8"  type="text" defaultValue={x.image}  onChange={(e) => newdata.image= e.target.value}  ></input>
  </div>
           </div><br/>
           <div className="row">
    <div className="col-sm-4">
      <label className="col-sm-4" >Prix</label>
        <input className="col-sm-8" defaultValue={x.prix}  type="text" onChange={(e) => newdata.prix= e.target.value} />
    </div>
    <div class="col-sm-4">
      <label className="col-sm-4">Quantiter</label>
       <input  className="col-sm-8" defaultValue={x.quantite}  type="text"  onChange={(e) => newdata.quantite= e.target.value}/>
    </div>
    <div class="col-sm-4">
      <label className="col-sm-4">Couleur</label>
       <input className="col-sm-8"  defaultValue={x.color}   type="text" onChange={(e) => newdata.couleur= e.target.value} />
    </div>
  </div>
          <button style={{ marginTop: '30px'}} onClick={unmount} className="ui brown button centre-item ">Update produit </button>
       
        </div>
        </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    prod: state.prod
})
export default connect(mapStateToProps,{updatedateprodact,setnewhistoriquefromapi})(Updateprodact);
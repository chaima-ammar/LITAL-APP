import React, { useState,useRef,useEffect} from 'react'
import { connect } from "react-redux";
import axios from 'axios';
import swal from 'sweetalert';
import {ProgressBar} from  'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
/* componenet */
import { postnewproduct } from '../../../action/produit'
import {setnewhistoriquefromapi} from '../../../action/historiquaction'
import { Navbar } from "../../composant";
import { Background } from "../../composant";
import { Sidebar } from "../../composant";
import { unmountComponentAtNode } from 'react-dom';
let x = ""
let image=""
function Addprodact(props) {
  const [staselectedFilete, setselectedFile] = useState(null)
  const contenu = useRef()
  const file=useRef("none")
  const [isOpened, setIsOpened] = useState(false);
  const [uncheked, setuncheked] = useState();
 const mychekbox = useRef()
  let refinput = {};
  useEffect(() => {

    chekedcondition()
    
    
  }, [])
function unmout()
{
  contenu.current.innerHTML= "<div><h1> Votre Donner A eté ajouter  avec Succeé vous pouvez consulter votre Liste de produit<h1></div>"
}

  function show() {
 
     if(staselectedFilete !==null)
     {
      onClickHandler()
    let name1 = Date.now().toString().substring(0,7)

    let name2 = staselectedFilete[0].name
    image = "http://localhost:3000/imageuplod/"+name1 + "-" +name2
    console.log(image)
     }
     else
     {
     image = null
    }
    setTimeout(() => {
      let x = Object.values(refinput).map(el => el.value)
props.postnewproduct(x,image)
props.setnewhistoriquefromapi(x,'ajoute produit')
swal({
  title: "ajouter un nouvaux Produit?",
  text: "voulez vous ajouter un nouveaux produit!",
  icon: "info",
  buttons: true,
  dangerMode: true,
})
.then((okpressed) => {
  if (okpressed) {
   window.location.reload()
    
  } 
  else {
    unmout()
  }
});
    }, 1000);

     
  }
  const  checkMimeType=(event)=>{
    //getting file object
    let files = event.target.files 
    //define message container
    let err = []
    // list allow mime type
   const types = ['image/png', 'image/jpeg', 'image/gif']
    // loop access array
    for(var x = 0; x<files.length; x++) {
     // compare file type find doesn't matach
         if (types.every(type => files[x].type !== type)) {
         // create error message and assign to container   
         err[x] = files[x].type+' is not a supported format\n';
       }
     };
     for(var z = 0; z<err.length; z++) {// if message not same old that mean has error 
         // discard selected file
        toast.error(err[z])
        event.target.value = null
    }
   return true;
  }
 const onChangeHandler=event=>{
   let files = event.target.files
    if(checkMimeType(event) ){ 
    // si true cherger le state
    setselectedFile(files)
  }
  }
 const onClickHandler = () => {
    const data = new FormData()

     
       for(var x = 0; x<staselectedFilete.length; x++) {
        data.append('file', staselectedFilete[x])
      }
      console.log(data , staselectedFilete)
    axios.post("http://localhost:8000/upload", data, {




    })
      .then(res => { // then print response status
        toast.success('upload success')
        console.log(res)
      })
      .catch(err => { // then print response status
        toast.error('upload fail')
        console.log(err)
      })
    }
 const chekedcondition = () => 
 { if( mychekbox.current.checked){

 //file.current.style="display: none"
 //console.log(refinput.image.style="display: block")
 setuncheked(true)
 }
 else
 //console.log(refinput.image.style="display: none")
 //file.current.style="display: block"

 setuncheked(false)

 

 }
  return (
    <div>
      <Navbar toggleMenu={setIsOpened} />
      <Background setIsOpened={setIsOpened} show={isOpened} />
      <Sidebar show={isOpened} setIsOpened={setIsOpened} />
      <div className="Content" ref={contenu}>

        <h1 className="title">Add new  prodact</h1>
        <div className="contenaire centret"><br />
          <div className="ui inverted segment">
            <div className="ui form inverted">
              <div className="three fields">
                <div class="field">
                  <label>Name</label>
                  <p><input ref={e => refinput.name = e} type="text" placeholder="Name" name="name" required /></p>
                </div>
                <div class="field">
                  <label>Type</label>
                  <p>  <input ref={e => refinput.type = e} type="text" placeholder="type" required /></p>
                </div>
                <div class="field">
                  <label> Collection</label>
                  <p> <input ref={e => refinput.collection = e} type="text" placeholder="Collection" required /></p>
                </div>
              </div>
              <div className="three fields">
                <div class="field">
                  <label>Marque</label>
                  <p>  <input ref={e => refinput.marque = e} type="text" placeholder="Marque" required /></p>
                </div>
                <div class="field">
                  <label>Reference</label>
                  <p>  <input ref={e => refinput.reference = e} type="text" placeholder="Reference" required /></p>
                </div>
                <div class="field">
                  <label>image</label>
                  {uncheked ? <input ref={e => refinput.image = e} type="text" placeholder="URL IMAGE" /> :  
              <input ref={file} type="file" class="form-control"  onChange={onChangeHandler}/> }
           <small> si tu veux telecharger la photo de l'internet clicker sur le box</small>       <input class="form-check-input"  ref={mychekbox} onClick={chekedcondition} type="checkbox" value="" id="defaultCheck1"/>
                 

                </div>
              </div>
              <div className="three fields">
                <div class="field">
                  <label>Prix</label>
                  <p>  <input ref={e => refinput.prix = e} type="text" placeholder="Prix" /></p>
                </div>
                <div class="field">
                  <label>Quantiter</label>
                  <p>  <input ref={e => refinput.quantiter = e} type="text" placeholder="Quantité" /></p>
                </div>
                <div class="field">
                  <label>Couleur</label>
                  <p>  <input ref={e => refinput.couleur = e} type="text" placeholder="Couleur" /></p>
                </div>
              </div>
              <div class="row">
      	  <div class="offset-md-3 col-md-6">
         
        
              
              </div>  
              <div class="form-group">
              <ToastContainer />
        
              </div> 
              </div>
              <div class="field">
                <br></br>
                <p> <button className="ui brown  button" onClick={() => show()}>Add produit</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
const stateup = (state) => {
  return {
    stateprodact: state.prodact
  }
}
export default connect(stateup, { postnewproduct , setnewhistoriquefromapi })(Addprodact);

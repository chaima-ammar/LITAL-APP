import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { connect } from 'react-redux'
import { Navbar } from "../composant";
import { Background } from "../composant";
import { Sidebar } from "../composant";
import { Footer } from "../composant";
import { getallproductfromapi,postallcomment } from '../../action/produit'

let urlid = window.location.search


function Comentaire(props) {

    const [filterdata, setfilterdata] = useState([]);
    const [produit, setproduit] = useState([]);
    const [isOpened, setIsOpened] = useState(false);
const [texeria, settexteria] = useState("")
    const [id, setid] = useState("");
    useEffect(() => {
        props.getallproductfromapi()
        setid(urlid.slice(1, urlid.length))


        return () => {

        }
    }, [])

    useEffect(() => {
        setproduit(props.prod.product.filter(el => el.id == id))
        setfilterdata(produit.filter(el => el.ok))


    }, [props.prod.product])
    useEffect(() => {

        return () => {

        }
    }, [])
    let x = produit.map(el =>el.ok)
    let length = produit.map(el =>el.ok.length)
   function handleChange(event) {   settexteria(event.target.value);  }
   function  sendcomentaire() 
    { let datee=  moment().format("DD/MM/YYYY, h:mm:ss a") //  Date(Date.now()).toString().substring(0, 15)
      let y = {text:texeria,date:datee}
       let  xx= produit.map(el =>el.ok)
       let z = [...xx[0].concat(y)]
      console.log("allvalue", length)
      props.postallcomment(id,z)
    }
    return (
        <>
            {
                console.log("prosuit", x)}
            <Navbar toggleMenu={setIsOpened} />
            <Background setIsOpened={setIsOpened} show={isOpened} />
            <Sidebar show={isOpened} setIsOpened={setIsOpened} />
            <div className="Content">
                {produit.map(el => <>
                    <h4 className='title'>Produit ID:  {el.id}</h4>
                    <div className="flex-warped title">
                        <p className='title'>produit name :{el.name}</p>
                        <p className='title'>produit cole :{el.color} </p>
                        <p className='title'>Image Produit  :<img src={el.image} alt ={el.id + el.name} width="100px" /> </p>
                    </div>
                    <div>{Object(el.ok).map(el => <div>
                        <div class="ui segment">


                        <p className='title'>Nom personne : {el.id}</p>
                        <p className='title'>position :{el.roleuser} </p>
                        <p className='title'>comentair :  {el.text}</p>
                        <p className='title'>date comentaire : {moment(el.date, "DD/MM/YYYY,h:mm:ss a").fromNow()}({el.date.substring(0, 10)})</p>
                        </div>

                    </div>
                    )} </div>

                </>)}
                <div></div>
                <span></span>
                <span></span>
                <div class="ui form">
                    <div class="field">
                     <strong> <p className='title'>  <label>Votre Comentaire</label></p></strong>
                        <textarea rows="2" value={texeria} onChange={handleChange}></textarea>
                    </div>
                    <button class="ui brown submit button" onClick={sendcomentaire}>Ajouter Comentaire</button>
                </div>
            </div>

        </>
    )
}
export default connect((state) => ({
    prod: state.prod,
    useres: state.users
})
    , { getallproductfromapi,postallcomment })(Comentaire)

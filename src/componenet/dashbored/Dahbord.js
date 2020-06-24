import React, { useState } from "react";
import ReactDOM from "react-dom";
import Lastprodact from '../prodact/Lastprodact'
import {Navbar} from "../composant";
import {Background} from "../composant";
import {Sidebar} from "../composant";

export default function Dashbord() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>

      <Navbar toggleMenu={setIsOpened} />
      <Background setIsOpened={setIsOpened} show={isOpened} />
      <Sidebar show={isOpened} setIsOpened={setIsOpened} />
      <div className="Content">
        <h3 className='title'>Derneire Produit</h3>
 <Lastprodact/>
         
      </div>
    </>
  );
}
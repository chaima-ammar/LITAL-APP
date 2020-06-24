import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
//componenet
import {Dashbord} from './componenet'
import {User} from './componenet'
import {Adduser} from './componenet'
import {Updateuser }from './componenet'
import Allproduct from './componenet/prodact/allproduct'
import {Addprodact} from './componenet'
import {Updateprodact} from './componenet'
import {Historiquecontainer} from './componenet'
import {Comentaire} from './componenet'
import { Footer } from    './componenet/composant'
export default function App() {
  return (
    <Provider store={store}>
    <div>
    <Router>
    <Switch>
      <Route exact path="/">  <Dashbord/></Route>
      <Route exact path="/Prodact"><Allproduct/></Route>
      <Route exact path="/update-produit"><Updateprodact/></Route>
      <Route exact path="/Addprodact"><Addprodact/></Route>
      <Route exact path="/comentaire"><Comentaire/></Route>
      <Route exact path="/user"><User/></Route>
      <Route exact path="/update-user"><Updateuser/></Route>
      <Route exact path="/Adduser"><Adduser/></Route>
      <Route exact path="/Historique"> <Historiquecontainer/></Route>
     
    </Switch>

      </Router>
<Footer/>

    </div>
    </Provider>
  )
}

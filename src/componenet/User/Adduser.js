import React, { useState } from 'react'
import { connect } from "react-redux";
/* componenet */
import { Adduser } from '../../action/useraction'
import { Navbar } from "../composant";
import { Background } from "../composant";
import { Sidebar } from "../composant";
import '../componenet.css'
function AddUsers(props) {

  const [isOpened, setIsOpened] = useState(false);
  let refinput = {};


  function show() {
    let x = Object.values(refinput).map(el => el.value)
    console.log(x)
    props.Adduser(x)
  }
  return (
    <div>
      <Navbar toggleMenu={setIsOpened} />
      <Background setIsOpened={setIsOpened} show={isOpened} />
      <Sidebar show={isOpened} setIsOpened={setIsOpened} />
      <div className="Content">

        <h1 className="title">Add user</h1>
        <div className="contenaire centret"><br />
          <div className="ui inverted segment ">
            <div className="ui form inverted">
              <div className="three fields">
                <div class="field">
                  <label>First Name</label>
                  <p><input ref={e => refinput.name = e} type="text" placeholder=" First Name" name="name" required /></p>
                </div>
                <div class="field">
                  <label>Last Name</label>
                  <p>  <input ref={e => refinput.LastName = e} type="text" placeholder="Last Name" required /></p>
                </div>
                <div class="field">
                  <label>Email</label>
                  <p> <input ref={e => refinput.Email = e} type="email" placeholder="Email"  required /></p>
                </div>
              </div>
              <div class="two fields">
                <div class="field">
                  <label>Password</label>
                  <p> <input ref={e => refinput.pass = e} type="text" placeholder="Email" required /></p>
                </div>
                <div class="field">
                  <label>image</label>
                  <p>  <input ref={e => refinput.image = e} type="text" placeholder="URL IMAGE" /></p>
                </div>
              </div>




              <div className="three fields">
                <div class="field">
                  <label>Post ocupee</label>
                  <p> <input ref={e => refinput.Post = e} type="text" placeholder="Post Ocupee" required /></p>
                </div>
                <div class="field" >
                  <label>Role</label>
                  <p>  <select  ref={e => refinput.role = e} name="role" >
                    <option  className='role' value="admin ">admin</option>
                    <option className='role' value="moderateur">Moderateur</option>
                    <option className='role' value="Autre">Autre</option>
                  </select></p>
                </div>
              </div>
              <div class="field">
                <br></br>
                <p> <button className="ui brown button" onClick={() => show()}>Add user</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
const stateup = (state) => ({
  users: state.users

})
export default connect(stateup, { Adduser })(AddUsers);

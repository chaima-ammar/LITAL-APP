import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatestate, deleteUser } from '../../action/useraction'
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
class Useritem extends Component {
  state = {
    changetype: true,
    show: false
  }

  handleClose = () => {
    this.setState({ show: false })
  }
  show = () => {
    this.setState({ show: true })
  }
  render() {
    const { donner, delet, update } = this.props;

    return (

      <>
        <tr>
          <td width="7%"> 👱 id- {donner.id} </td>
          <td class="collapsing" width="8%">
            {donner.first_name}
          </td>
          <td width="10%"> {donner.last_name}</td>
          <td width="20%" > ✉  {donner.email}</td>
          <td width="25%" className="dispalyflex"><input className="gestionuser-password" type={this.state.changetype ? "password" : "text"} value={donner.password}></input>
            <span className=" ui submit button miniwidthbtn widthw10" onClick={() => this.setState({ changetype: !this.state.changetype })}>{this.state.changetype ? "👁" : "🧐"} </span>
          </td>
          <td width="5%"> <img src={donner.image} width="50px" /></td>
          <td width="20%"> <div className="flex-bettwen"><button  onClick={() => delet(donner.id)} class="bagroundcolortransparent red"><i class="trash icon"></i></button>{" "}
            <NavLink to='/update-user'> <button  onClick={() => update(donner.id)} class="bagroundcolortransparent yellow" ><i class="edit icon">
            </i></button> </NavLink>  <button   onClick={this.show} class="bagroundcolortransparent vert"><i class="eye icon"></i></button></div> </td>
        </tr>



        <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title" size="xl">
          <Modal.Header closeButton>
            <Modal.Title>pressone Matricule  {donner.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table">
              <thead>
                <tr><th>id</th>
                  <th>First_name</th>
                  <th>Last_name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Image</th>
                  <th>Role</th>
                  <th>PosteOcuper</th>
                  <th>Date d'ajout</th>
                </tr></thead><tbody>
                <tr>
                  <td>{donner.id}</td>
                  <td>{donner.first_name}</td>
                  <td>{donner.last_name}</td>
                  <td>{donner.email}</td>
                  <td>{donner.password}</td>
                  <td> <img src={donner.image} alt={"image"+donner.first_name} width="40px"></img></td>
                  <td>{donner.role}</td>
                  <td>{donner.posteOcuper}</td>
                  <td>{donner.dateInscription}</td></tr>
              </tbody>
            </table>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  delet: (iduser) => dispatch(deleteUser(iduser)),
  update: (updateuser) => dispatch(updatestate(updateuser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Useritem)
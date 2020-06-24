import React, { useEffect, Component } from 'react'
import { getusersFromApi, updatedate } from '../../action/useraction'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { Navbar } from "../composant";
import { Background } from "../composant";
import { Sidebar } from "../composant";
import '../componenet.css'
class Updateuser extends Component {
    state = {
        isOpened: false,
        image: 'https://semantic-ui.com/images/avatar/large/steve.jpg',
    }
    componentDidMount() {
        //  this.props.getusersFromApi()

        let id = this.props.users.iduser;
        let x = this.props.users.user
        let user = x.filter(el => el.id == id)
        if (user.length > 0) {
            this.setState(({ first_name: user[0].first_name, last_name: user[0].last_name, email: user[0].email, password: user[0].password, image: user[0].image, id: id }))
            console.log(user, this.state.first_name)
        }

    }


    changer = (x) => {
        this.setState({ isOpened: x })
    }
    render() {
        const { update } = this.props;
        const { first_name, last_name, email, password, image, id } = this.state;
        console.log(id)
        return (
            <>
                <Navbar toggleMenu={(x) => this.changer(x)} />
                <Background setIsOpened={this.state.isOpened} show={this.state.isOpened} />
                <Sidebar show={this.state.isOpened} setIsOpened={(x) => this.changer(x)} />
                <div className="Content">
                    <h3 className="centre-item"> update user with id {this.state.id}</h3>
                    <div className="contenaire ">
                        <div className=" ui inverted segment">
                        <div className="ui form inverted">
                        <div className="three fields">
                        <div class="field">
                            <label >Name</label>
                            <input type="text" value={this.state.first_name} onChange={(e) =>   this.setState({ first_name: e.target.value })}></input>
                        </div>
                        <div class="field">
                            <label>Last Name  </label>
                            <input  type="text" value={this.state.last_name} onChange={(e) =>  this.setState({ last_name: e.target.value })}></input>
                        </div>
                        <div class="field">
                            <label >Email</label>
                            <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
                        </div>
                        </div>
                        <div class="two fields">
                        <div class="field">
                            <label >Post</label>
                            <input  type="text" value={this.state.role} onChange={(e) => this.setState({ post: e.target.value })}></input><br /><br />
                        </div>
                        <div class="field">
                            <label >Role</label>
                            <select id="role" name="role" onChange={(e) => this.setState({ role: e.target.value})}> 
                                <option className='role'  value="admin">admin</option>
                                <option className='role' value="moderateur">Moderateur</option>
                                <option className='role' value="Autre">Autre</option>
                            </select>
                        </div>
                        </div>
                        <div class="fields">
                            <label class="field" >Password</label>
                            <input class="field" type="text" value={this.state.password} onChange={(e) =>   this.setState({ password: e.target.value })}></input><br /><br />
                        </div>
                        <div class="fields">
                            <label class="field">Avatar</label>
                            <input class="field" type="text" value={this.state.image} ></input>
                        </div>
                        <NavLink to="/user" ><p> <button  className="ui brown button centre-item " onClick={() => update(first_name, last_name, email, password, image, id)}>Update USER</button></p></NavLink>
                    </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }

}
const mapStateToProps = (state) => ({
    users: state.users
})
const mapDispatchToProps = (dispatch) => ({
    getusersFromApi: () => dispatch(getusersFromApi()),
    update: (first_name, last_name, email, password, image, id) => dispatch(updatedate(first_name, last_name, email, password, image, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Updateuser);
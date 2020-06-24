import React, { Component ,useEffect} from 'react'
import { connect } from 'react-redux'
import Useritem from './useritem'
import {getusersFromApi,changestateuser} from '../../action/useraction'
import {Navbar} from "../composant";
import {Background} from "../composant";
import {Sidebar} from "../composant";
import { Pagination } from "../composant";
export class User extends Component  {
    state = {
        isOpened : false,
        totalRecords: "",
        totalPages: "",
        pageLimit: "",
        currentPage: "",
        startIndex: "",
        endIndex: "",
        input:"",
        
    }
    componentDidMount() {
        this.props.getusersFromApi()
    }
    changer = (x) => {
        this.setState({ isOpened : x})
    }
   recherche(){
    if(this.state.input !=="")
    {
    console.log(this.state.input)
        this.props.changestateuser(this.state.input)
    }
        else 

          this.props.getusersFromApi()
        
         }
   onchange(e){
           this.setState({input : e.target.value})
         }
 showUseritem = (rowsPerPage) => {
           var result = null;
                 if (rowsPerPage.length > 0)
             result = rowsPerPage.map((el, i) => {
               return <Useritem  key ={i} donner={el}></Useritem>;
             });
           
           return result;
         };
onChangePage = data => {
           this.setState({
             pageLimit: data.pageLimit,
             totalPages: data.totalPages,
             currentPage: data.page,
             startIndex: data.startIndex,
             endIndex: data.endIndex
           });
         };
      
      
    render() {
        let { user } = this.props.users;
        var {
            totalPages,
            currentPage,
            pageLimit,
            startIndex,
            endIndex
        } = this.state;
   
        let rowsPerPage = [];
        rowsPerPage = user.slice(startIndex,endIndex + 1);

    return (
        <div>
          <>
          <Navbar toggleMenu={(x) => this.changer(x)} />
  <Background setIsOpened={this.state.isOpened} show={this.state.isOpened} />
  <Sidebar show={this.state.isOpened} setIsOpened={(x) => this.changer(x)} />
   <div className="Content">
   <h3 className='title'>Gestion des users</h3>
   <div className="row">
    <div className="col-xs-12 box_change_pagelimit select">
      select filter
           <select
        className="form-control"
        value={pageLimit}
        onChange={e =>this.setState({ pageLimit: parseInt(e.target.value) })
        }
      className='title'>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  </div>
  <div class="ui input">
  <input type="text" placeholder="name,email,role ou poste  ocuper" onChange={(e) => this.onchange(e)}></input><button className="ui brown button " onClick={() => this.recherche()}>Recherche</button>
     </div>
       <table className="table  ">
           <thead>
               <tr><th   className="bagroundcolorred " colspan="7">
                  Liste User
                   </th>
                   </tr>
                   <tr><th>id User</th><th>Name</th><th>Last Name</th><th>Email</th><th>Password</th> <th>Avatar</th><th>Action</th></tr>
               </thead>
           <tbody>
            { /* this.props.users.user.map(el => <Useritem  donner={el}/> ) */ 
            
            this.showUseritem(rowsPerPage)
            }
           </tbody>
       </table>
       <div className="col-xs-12 box_pagination_info text-right">
  <p className='title'>
    {user.length}  items  actuelle : {currentPage}/{totalPages}
  </p>
   </div>
   <div className="col-xs-12 dispalyflexbettwen">

    <Pagination
      totalRecords={user.length}
      pageLimit={pageLimit || 5}
      initialPage={1}
      pagesToShow={5}
      onChangePage={this.onChangePage}
    />

  <a href="/Adduser">  <button className="ui  brown button">Add new user</button></a>
  </div>

   </div>
 
   </>
        </div>
    )}
}

const mapStateToProps = (state) => ({
    users : state.users
})

const mapDispatchToProps = (dispatch) => ({
    getusersFromApi: () => dispatch(getusersFromApi()),
    changestateuser:(x) => dispatch(changestateuser(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(User)

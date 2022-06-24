import React, { Component } from 'react';
import axios from 'axios';

export class LoginPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name : "" , 
        email : "" ,  
        passwd : "" ,
      }
    }

    handleName = (e) =>{
        console.log("handleName click !")
        this.setState({
            name : e.target.value ,
        })
    }

    handleEmail = (e) =>{
        console.log("handleEmail click !")
        this.setState({
            email : e.target.value ,
        })
    }

    handlePasswd = (e) =>{
        console.log("handlepasswd click !")
        this.setState({
            passwd : e.target.value ,
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const obj = {
            name : this.state.name ,
            email : this.state.email ,
            passwd : this.state.passwd ,
        }
        axios.post('http://localhost:5000/', {title: "Hello World!",body: "This is a new post."})
        .then((response) => {
          console.log(response);
        });
    }

  render() {
    return (
      <>
        <center>
        <form>
            <label>Name</label>
            <input type="text" value={this.state.name}  onChange={(e)=>{this.handleName(e)}} /><br />
            <label>Email</label>
            <input type="email" value={this.state.email}  onChange={(e)=>{this.handleEmail(e)}}/><br/>
            <label>password</label>
            <input type="password" value={this.state.passwd} onChange={(e)=>{this.handlePasswd(e)}} /><br/>
            <button onClick={(e)=>{this.handleSubmit(e)}}>Submit</button>
        </form>
        </center>
      </>
    )
  }
}

export default LoginPage
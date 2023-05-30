import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../assets/personally-logo.png"
import axios from 'axios'

function Navbar() {

  const token = JSON.parse(localStorage.getItem("token"))

  const handleDelete = () =>{
    let ask = window.confirm("Are You Sure You Want To Delete?")
    if (ask === true){
      axios.delete("http://localhost:8000/account/delete", {
        headers:{
          "Authorization": "Bearer " + token.access
        }
      })
      .then((res) => alert(res.data))
      .catch((err) => console.log(err))
    }
  }
  return (
    <div><nav class="navbar navbar-expand-md bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="">
        <img src={logo} alt=""/>
      </Link>
      <Link class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </Link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="#">Daily Digest</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">Design Tool</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">Tutorial</Link>
          </li>
          <li>
            <Link class="nav-link" to="./Signup">Signup</Link>
          </li>
          <li>
            <Link className='nav-link' to="./Login">Login</Link>
          </li>
          <li>
            <Link className='nav-link' to="./Post">Post</Link>
          </li>
          <li>
            <Link className='nav-link' to="./update">Update</Link>
          </li>
          <li className='nav-item'>
            <button onClick={handleDelete} className= "btn btn-danger">Delete</button>
          </li>
        </ul>
        <button className='btn btn-dark'>Subscribe</button>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar
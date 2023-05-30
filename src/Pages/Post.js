import React from 'react'
import axios from 'axios'

function Post() {

  const token = JSON.parse(localStorage.getItem("token"))

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    axios.post("http://localhost:8000/post/upload", form, {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    })
    .then((res) => {
      if(res.data.message === "success"){
        alert("success")
      }
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="posts w-50 m-auto">
    <form onSubmit={(e) => handleSubmit(e)}>

    <div className="col-md-24 col-12">
      <label htmlFor="" className='form-label' >Title</label>
      <input type="text" className='form-control' name="title" />
    </div>

    <div className="">
      <label htmlFor="" className='form-label' >Body</label>
      <textarea type="text" class="form-control" id="Body-Textarea" rows="5" name="body" ></textarea>
    </div>

    <div className="col-md-6 col-12">
        <label htmlFor="" className='form-label' >Image</label>
        <input type='file' name='image' className='form-control'/>
    </div>

    <button type="submit" className="btn btn-primary mt-4" >Submit</button>
    </form></div>
  )
}

export default Post
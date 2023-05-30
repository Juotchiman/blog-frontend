import React, { useEffect } from 'react'
import "./Home.css"
import Blogcard from '../components/Blogcard'
// import img1 from './../assets/unsplash_-6zFVL4YuaM.png'
// import img2 from './../assets/unsplash_37Hk9D4Ig_4.png'
// import img3 from './../assets/unsplash_-6zFVL4YuaM.png'
import axios from "axios"
import { useState } from 'react'
function Home() {

  const [datas, setDatas] = useState([])

  useEffect(() => {

  axios.get("http://localhost:8000/post/getarticles/")
  .then((res) => setDatas(res.data))
  .catch((err) => console.log(err))

  }, [])

  console.log(datas)
  
  return (
    <div className='home'>
        <div className='Banner'>
            <h2>Minimal blog Template for Creative Expression</h2>
            <p>100% customisable and SEO-friendly blog template for personal and commercial purposes.</p>
        </div>
  
    <div className='articles p-5'>
      <div className='d-flex justify-content-between align-items-center w-50 m-auto'>
        <p>Daily Digest</p>
        <button className='btn p-1'>View All</button>
      </div>

      <div className="article">
        {datas?.map(data =>(
          <Blogcard title={data.title} pic={`http://localhost:8000/${data.image}`}/>
        ))}
      </div>
    </div>
    </div>
  )
}


export default Home
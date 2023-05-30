import React from 'react'
import './Footer.css'

function Footer() {
  return (
    
    <div className='foot justify-contents-center align-items-center'>        
    <h2 className='f-header'>Personally Footer</h2>
    <p className='descript'>A bi-weekly newsletter of design inspiration, resources and anything related to career development.</p>
    <input className='box' type="text" placeholder='Email Address'/>
    <button className="btn2 btn-dark">Subscribe</button>
    </div>

  )
}

export default Footer
import React from 'react'

function Blogcard({pic , title}) {
  return (
    <div className="blogcard w-75 m-auto">
        <div className="card">
            <div className="card-body">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 col-12">
                        <small className=''>{new Date().toLocaleDateString()}</small>
                        <h6 className='my-2'>{title}</h6>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='col-md-4 col-12'>
                        <img src={pic} alt="card" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogcard
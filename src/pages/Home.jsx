import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {

    



  return (
    <>
        <Navbar />
        
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary mr-5">Edit</button>
                    <button className="btn btn-primary">Delete</button>
                  </div>
            </div>
        </div>
    </>
  )
}

export default Home
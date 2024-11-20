import React, { useRef } from 'react'

const Dashboard = () => {

  const titleInput = useRef(" ");
  const descriptionInput = useRef(" ");



  const UploadBlog = ()=> {
    console.log("Let's", titleInput.current.value);
    console.log("Let's", descriptionInput.current.value);
    titleInput.current.value = "";
    descriptionInput.current.value = "";

  }
  return (
    <>
        <div className="p-5 bg-slate-50">
            <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>
        <div className='shadow-lg mx-40 my-20 p-10'>
        <div className='flex flex-col gap-10'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full" ref={titleInput}  />
        <textarea className="textarea h-36 input input-bordered" placeholder="Whats In Your Mind" ref={descriptionInput}></textarea>
        </div>
        <button className="btn btn-success mt-5" onClick={UploadBlog}>Publish Blog</button>
        </div>
        <div className="p-5 bg-slate-50">
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
        </div>
    </>
  )
}

export default Dashboard

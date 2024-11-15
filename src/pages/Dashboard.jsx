import React from 'react'

const Dashboard = () => {
  return (
    <>
        <div className="p-5 bg-slate-50">
            <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>
        <div className='shadow-lg mx-40 my-20'>
        <div className='py-10 px-10 flex flex-col gap-10'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        <textarea className="textarea h-36 input input-bordered" placeholder="Whats In Your Mind"></textarea>
        </div>
        </div>
    </>
  )
}

export default Dashboard

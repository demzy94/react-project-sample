import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="">
      <section className="">
          <div className="flex flex-col justify-center items-center h-72">
              <h1 className="text-2xl font-sans font-black text-[#334155]">User Login</h1>
              <form action="#" method="">       
                  <div className="py-4">
                      <input type="email" name="email" placeholder="Name@email.com" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-red-600 rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div>        
                  <div>
                      <input type="password" name="password" placeholder="Password" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-red-600 rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div>
                  <div className="flex justify-center items-center font-sans text-lg pt-2 pb-1">
                      <button className="p-2 bg-red-600 w-1/2 text-white hover:bg-[#334155]">Login</button>
                  </div>
                  
                  <div className="flex justify-center items-center font-sans text-lg py-2">
                      <Link to="/signup" className="text-primary text-sm hover:underline hover:text-blue-500">Don't have an account? Click to signup</Link>
                  </div>
              </form> 
          </div>  
      </section>
  </div>
  )
}

export default Login
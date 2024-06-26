import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  
  let showAvatars = () => {

  }

  return (
    <div>
      <section>
          <div className="flex flex-col justify-center items-center h-auto">
              <h1 className="text-2xl font-sans font-black text-[#334155]">Sign Up</h1>
              <form method="post" onsubmit="processSignUp(event)">
                  <div className="py-4">
                      <input type="text" name="username" placeholder="Username" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-red-600 rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div>

                  <div className="py-4">
                      <input type="text" name="fullname" placeholder="Full Name" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-red-600 rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div>
                  
                  <div className="py-4">
                      <input type="email" name="email" placeholder="name@email.com" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-red-600 rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div >
                                  
                  <div className="py-4">
                      <input type="password" name="password" placeholder="Password" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-red-600 rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div>
                  <div className="py-2 relative">
                      <input type="text" onFocus={showAvatars} name="avatar" id="avatar" placeholder="avatar URL" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-red-600 rounded-md active:border-[#334155] hover:border-[#334155]" />
                      <div id="avatar-container" className="absolute max-h-32 overflow-y-auto w-full bg-white hidden">
                          <section className="w-full py-1 px-2 grid grid-cols-4"></section>
                      </div>
                  </div>
      
                  <div className="py-4 flex justify-center items-center font-sans text-lg pt-2 pb-1">
                      <button className="p-2 bg-red-600 w-1/2 text-white hover:bg-[#334155]">Signup</button>
                  </div>
                  <div className="flex justify-center items-center font-sans text-lg py-2">
                      <Link to="/login" className="text-primary text-sm hover:underline hover:text-blue-500">Already have an account? Click to Login</Link>
                  </div>
              </form>
          </div>       
      </section>
  </div>
  )
}

export default Register
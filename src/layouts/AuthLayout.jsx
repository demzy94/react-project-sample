import { Link, Outlet } from "react-router-dom"
import Favicon from "@/assets/react.svg"

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center px-4">
        <section className="w-full max-w-md">

          <div className="my-10 text-center">
            <Link to="/">
              <img src={Favicon} alt="" className="w-16 mx-auto" />
            </Link>
          </div>

          <aside className="w-full min-h-32  bg-slate-100 my-10 rounded-md">
            <Outlet />
          </aside>
        </section>
    </div>
  )
}

export default AuthLayout
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
        <Header />

        <main className="min-h-screen bg-slate-100">
            <Outlet />
        </main>

        <Footer />
    </>
  )
}

export default BaseLayout
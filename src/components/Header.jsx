import { FaUserLock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="min-h-16 bg-white text-[#0a1e27] sticky top-0">
            <div className="max-w-6xl mx-auto ">
                <div className="flex justify-between items-center py-4 font-sans">
                    <div className="text-2xl font-bold">
                        <Link to="/" className="">MNTN</Link>
                    </div>
                    <div>
                        <ul className="md:flex justify-between gap-6 hidden font-bold">
                            <li>
                                <Link to="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link to="/equipment">Equipment</Link>
                            </li>
                            <li>
                                <Link to="/blog-articles">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="font-bold">
                        <Link to="/login" className="flex items-center gap-2 py-1 px-3 rounded-md bg-primary text-white">
                            <FaUserLock /> Account
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
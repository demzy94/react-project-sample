const Header = () => {
    return (
        <header className="min-h-16 bg-white text-[#0a1e27] sticky top-0">
            <div className="max-w-6xl mx-auto ">
                <div className="flex justify-between items-center py-4 font-sans">
                    <div className="text-2xl font-bold">
                        <a href="#" className="">MNTN</a>
                    </div>
                    <div>
                        <ul className="md:flex justify-between gap-6 hidden font-bold">
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Equipment</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="font-bold">
                        <a href="#" className="">Account</a>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
export default function Footer() {
    return (
        <footer className="min-h-96 bg-slate-800 text-white">
            <div className="max-w-6xl mx-auto py-20">
                <div className="bg-gray-300 h-52  py-14 ">
                    <div className="flex gap-4 pb-4 justify-center ">
                        <i class="fa-brands fa-react text-3xl text-red-500"></i>
                       
                        <h1 className="text-black font-bold text-2xl">ReactClass</h1>
                    </div>
                    <div className="pb-6 text-gray-400  ">
                        <h1 className="justify-center flex">
                            © Jan 2024- July 2024 ReactClass v1. All Rights Reserved. 
                        </h1>
                        <h1 className="justify-center flex">Built By josiah emmanuel .</h1>
                    </div>
                    
                    <div className="flex gap-4 text-black justify-center">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-globe"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}


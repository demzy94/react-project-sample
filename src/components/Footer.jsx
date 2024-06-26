import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faReact, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="min-h-96 bg-slate-800 text-white">
            <div className="max-w-6xl mx-auto py-20">
                <div className="bg-gray-300 h-52  py-14 ">
                    <div className="flex gap-4 pb-4 justify-center ">
                        <FontAwesomeIcon icon={faReact} className="text-3xl text-red-500" />
                       
                        <h1 className="text-black font-bold text-2xl">ReactClass</h1>
                    </div>
                    <div className="pb-6 text-gray-400  ">
                        <h1 className="justify-center flex">
                            © Jan 2024- July 2024 ReactClass v1. All Rights Reserved. 
                        </h1>
                        <h1 className="justify-center flex">Built By josiah emmanuel .</h1>
                    </div>
                    
                    <div className="flex gap-4 text-black justify-center">
                        <FontAwesomeIcon icon={faFacebookF} /> 
                        <FontAwesomeIcon icon={faInstagram} /> 
                        <FontAwesomeIcon icon={faTwitter} /> 
                        <FontAwesomeIcon icon={faGithub} /> 
                        <FontAwesomeIcon icon={faGlobe} /> 
                    </div>
                </div>
            </div>
        </footer>
    )
}


import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Demzy from "./assets/photo/demzy.png";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[70dvh]  text-white bg-[url('assets/photo/bg.jpg')]  bg-cover  bg-no-repeat static">
        <section className="min-h-[70dvh]  text-white bg-[#030303b7] ">
            <div className="max-w-6xl mx-auto flex justify-between items-center flex-col md:flex-row">
                <div className="font-mono font-black flex flex-col justify-center">
                    <h1 className="text-red-500 text-5xl">Video Software <span className="text-white text-5xl">for</span> </h1>
                    <h1 className="text-white text-4xl my-3">the video-loving business </h1>
                    <button className="py-2 px-5 w-48 bg-white text-black text-lg my-5 hover:bg-red-500 hover:text-white">Watch Video</button>
                </div>
                <div>
                    <div>
                        <img src={Demzy} alt="" />
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Hero />
      <Footer />
    </>
  );
}

export default App

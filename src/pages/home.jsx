import { useNavigate, NavLink } from "react-router-dom";
import { images } from "../assets/assets";
import { useState } from "react";

const Home = () => {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const slides = [images.hero1, images.hero2, images.hero3]

    return (
        <>
            <div className="relative w-full h-screen flex items-center justify-center select-none">
                <div className="w-full h-full">
                    <img className="w-full h-full object-top object-cover brightness-70" src={images.hero1} alt="" />
                </div>


                <div className="absolute z-20 w-80 h-auto text-center">
                    <h1 className="text-white font-mont font-medium text-2xl mb-3">SOLACE</h1>
                    <NavLink to={"/shop"}
                    className="w-auto h-auto text-white underline cursor-pointer text-sm hover:text-neutral-400 transition-colors duration-150">SHOP</NavLink>
                </div>

                <div className="absolute z-20 bottom-10 w-auto flex items-center justify-center gap-3">
                    {slides.map((item) => (
                        <button className="bg-white w-6 h-6 rounded-full cursor-pointer"></button>
                    ))}
                    
                </div>

            </div>
        </>
    )
}

export default Home;
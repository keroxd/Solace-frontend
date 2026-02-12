import { useNavigate, NavLink } from "react-router-dom";
import { images } from "../assets/assets";
import { useState } from "react";

const Home = () => {

    return (
        <>
            <div className="relative w-full h-screen flex items-center justify-center select-none">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img src={images.hero1} alt="display" className="w-full h-full object-cover brightness-65"/>
                </div>


                <div className="absolute z-20 w-80 h-auto text-center">
                    <h1 className="text-white font-mont font-medium text-2xl mt-10 mb-3">SOLACE</h1>
                    <NavLink to={"/shop"}
                        className="w-auto h-auto text-white underline cursor-pointer text-sm hover:text-neutral-400 transition-colors duration-150">SHOP</NavLink>
                </div>

            </div>
        </>
    )
}

export default Home;
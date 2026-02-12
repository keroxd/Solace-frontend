import { NavLink } from "react-router-dom"
import { MdShoppingCart } from "react-icons/md";

const NavBar = () => {
    const activeStyle = "text-neutral-100 transition-colors duration-200"
    const inactiveStyle = "text-neutral-500 hover:text-neutral-100 transition-colors duration-200"

    return (
        <>
            <div className="bg-black text-neutral-100 w-full h-12 z-50 fixed flex justify-center items-center">
                <section className="w-90 sm:w-135 lg:w-275 flex items-center justify-between">
                    <h1 className="font-mont text-sm">SOLACE</h1>
                    <div className="text-neutral-500 w-80 flex justify-between text-sm font-light">
                        <NavLink to={"/"}
                            className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink>
                        <NavLink to={"/shop"}
                            className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Shop</NavLink>
                        <NavLink to={"/shop"}
                            className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>About</NavLink>
                    </div>
                    <button className="cursor-pointer">
                        <MdShoppingCart size={22} />
                    </button>
                </section>

            </div>
        </>
    )
}

export default NavBar
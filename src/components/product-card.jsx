import { useNavigate } from "react-router-dom";


const ProductCard = () => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate("/product")} className="bg-transparent w-auto h-100 group cursor-pointer">
                <div className="w-full h-80 overflow-clip">
                    <img src="https://static.msscdn.net/global/static/promotion/showcase2509_mutandardw/assets/look3_02_web.jpg" alt="preview"
                    className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-250" />
                </div>

                <div className="w-full h-20 pt-3 px-2 text-center">
                    <h1 className="text-center text-xs font-light group-hover:underline">Sleek Black Jacket</h1>
                    <p className="text-sm font-semibold mt-1">79,000 MMK</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard;
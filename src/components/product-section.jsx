import { images } from "../assets/assets"
import ProductCard from "./product-card"


const ShopHeroSection = () => {
    const data = [1, 2, 3, 4, 5, 6]
    return(
        <>
        <div className="bg-transparent w-auto py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5">
            {data.map((item) => (
                <ProductCard key={item}/>
            ))}
        </div>
        
        </>
    )
}

export default ShopHeroSection
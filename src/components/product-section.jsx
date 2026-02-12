import { useState } from "react"
import { images } from "../assets/assets"
import ProductCard from "./product-card"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const ProductSection = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 7;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(data.length / itemsPerPage)
    return (
        <>
            <div className="bg-transparent w-285 mb-10">
                <section className="w-auto pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 px-5">
                    {currentItems.map((item) => (
                    <ProductCard key={item} />
                ))}
                </section>
                
                <section className="bg-transparent w-full h-30 flex items-center justify-center gap-3">
                    <button disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev-1)}
                    className="bg-neutral-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-neutral-600"><MdChevronLeft size={20}/></button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-10 h-10 rounded-full cursor-pointer transition-colors duration-200 ${currentPage === i + 1
                                    ? 'bg-black text-white'
                                    : 'bg-neutral-200 text-neutral-600'
                                }`}>
                            {i + 1}
                        </button>
                    ))}
                    <button disabled={currentPage === totalPages}
                     onClick={() => setCurrentPage(prev => prev+1)} 
                    className="bg-neutral-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-neutral-600"><MdChevronRight size={20}/></button>
                </section>
            </div>

        </>
    )
}

export default ProductSection
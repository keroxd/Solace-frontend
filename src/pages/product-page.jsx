import Footer from "../components/footer";

const ProductPage = () => {
    return (
        <>
            <div className="flex justify-center pt-20 mb-24">
                <section className="bg-transparent h-auto w-100 md:w-150 lg:w-200 xl:w-275 grid grid-rows-1 lg:grid-cols-2 gap-8">
                    <img className="w-full object-cover object-top"
                        src="https://static.msscdn.net/global/static/promotion/showcase2509_mutandardw/assets/look3_02_web.jpg" alt="display" />



                    <div className="bg-transparent w-full mt-0 lg:mt-20 xl:mt-40">
                        <h1 className="font-medium text-lg">Sleek Black Jacket</h1>
                        <p className="font-bold text-xl mt-1">79,000 MMK</p>
                        <p className="font-medium text-lg mt-5">Size</p>
                        <div className="max-w-100 grid grid-cols-4 gap-3 text-sm mt-3">
                            <button className="bg-neutral-300 text-neutral-600 font-semibold h-10 rounded-sm cursor-pointer">S</button>
                            <button className="bg-neutral-300 text-neutral-600 font-semibold h-10 rounded-sm cursor-pointer">M</button>
                            <button className="bg-neutral-300 text-neutral-600 font-semibold h-10 rounded-sm cursor-pointer">L</button>
                            <button className="bg-neutral-300 text-neutral-600 font-semibold h-10 rounded-sm cursor-pointer">XL</button>
                        </div>
                        <button className="bg-black text-white text-xs font-medium w-100 py-3 cursor-pointer rounded-sm mt-3 hover:underline">ADD TO CART</button>
                    </div>
                </section>
            </div>
            <Footer></Footer>

        </>
    )
}

export default ProductPage;
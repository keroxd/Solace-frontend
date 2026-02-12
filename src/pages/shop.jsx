import ShopHeroSection from "../components/product-section";
import FilterSection from "../components/filter-section";
import Footer from "../components/footer";

const Shop = () => {
    return(
        <>
        <div className="flex justify-center pt-12">
            <ShopHeroSection></ShopHeroSection>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Shop;
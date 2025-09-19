import Banner from "./banner/Banner"
import PopulorVennue from "./populorVennue/PopulorVennue"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import PopularSearches from "./popularSearches/PopularSearches";
import WeddingCategory from "./weddingCategory/WeddingCategory";


const HomeMain = () => {
    return (
        <>
            <Banner />
            <PopulorVennue />
            <PopularSearches />
            <WeddingCategory />
        </>
    )
}

export default HomeMain
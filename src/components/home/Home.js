import Banner from "./banner/Banner";
import PopulorVennue from "./populorVennue/PopulorVennue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import PopularSearches from "./popularSearches/PopularSearches";
import WeddingCategory from "./weddingCategory/WeddingCategory";
import InhouseServices from "./inhouseServices/InhouseServices";
import RealWeddingStories from "./realWeddingStories/RealWeddingStories";
import GalleryLook from "./galleryLook/GalleryLook";
import LatestBlog from "./latestBlog/LatestBlog";
import { allCategories } from "../../data/weddingCategoriesData";


const HomeMain = () => {
  return (
    <>
      <Banner />
      <PopulorVennue />
      <PopularSearches />
      <WeddingCategory
        categories={allCategories.slice(0, 5)}
        showHeader={true}
        showLink={true}
      />      <RealWeddingStories />
      <GalleryLook />
      <LatestBlog />
    </>
  );
};

export default HomeMain;

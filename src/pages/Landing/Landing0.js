import Popup from "./Components/PopUp/Popup";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousel/Carousel";
import SlideMenu from "./Components/SlideMenu/SlideMenu";
import "./Landing.css";
import Navbar from "../../components/Navbar";
const Landing = () => {
  return (
    <div>
      <Navbar />
      {/* <Popup popupType="call" onClose={() => console.log("Closed")} /> */}
      <Banner />
      <Carousel />
      <SlideMenu />
      <Footer />
    </div>
  );
};

export default Landing;

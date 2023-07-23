import About from "../About us/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact us/Contact";
import Gallery from "../Gallery/Gallery";
import Collages from "../Our collages/Collages";
import Services from "../services/Services";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Collages/>
            <Services/>
            <Gallery/>
            <Contact/>
        </div>
    );
};

export default Home;
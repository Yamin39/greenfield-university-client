import SharedBanner from "../../shared/SharedBanner";
import AboutStatistics from "./AboutStatistics";
import Coach from "./Coach";
import Gallery from "./Gallery";
import History from "./History";
import MissionValues from "./MissionValues";


const About = () => {
    return (
        <div>
            <SharedBanner title={'University About'}></SharedBanner>
            <Gallery></Gallery>
            <AboutStatistics></AboutStatistics>
            <MissionValues></MissionValues>
            <History></History>
            <Coach></Coach>
        </div>
    );
};

export default About;
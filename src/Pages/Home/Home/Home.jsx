import Banner from "../Banner/Banner";
import Exclusive from "../ExclusiveSection/Exclusive";
import Feature from "../FeatureSection/Feature";
import HistoryBlock from "../HistoryBlock/HistoryBlock";
import LatestCollection from "../LatestCollection/LatestCollection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Exclusive />
      <LatestCollection />
      <HistoryBlock />
      <Feature />
    </div>
  );
};

export default Home;

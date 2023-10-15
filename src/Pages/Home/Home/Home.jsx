import Banner from "../Banner/Banner";
import Exclusive from "../ExclusiveSection/Exclusive";
import HistoryBlock from "../HistoryBlock/HistoryBlock";
import LatestCollection from "../LatestCollection/LatestCollection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Exclusive />
      <LatestCollection />
      <HistoryBlock />
    </div>
  );
};

export default Home;

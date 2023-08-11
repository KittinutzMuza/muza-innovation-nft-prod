import Header from "../components/Header";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="py-4 gap-y-11">
      <Header />
      <div className="px-8 mt-9">
        <h3 className="text-3sm font-bold">MUZWhat’s innovator </h3>
        <p className="text-3sm  text-neutral-500">
          Lorem ipsum dolor sit amet consectetur. Fermentum ut lectus augue orci
          eu a sed facilisis. Phasellus odio placerat ornare urna id nullam. Ac
          nunc praesent feugiat ut sapien varius et. Eu nisi quam suspendisse
          sed dignissim
        </p>
      </div>
      <div className="mt-12 px-8 width-full">
        <Link to="/quiz">
          <button className="bg-[#9B74DA] px-4 py-6 w-full m-auto text-white rounded-full text-3sm font-bold">
            Play now
          </button>
        </Link>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  // propName: PropTypes.string,
};

export default LandingPage;

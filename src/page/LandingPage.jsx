import { Web3Button } from "@web3modal/react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

const LandingPage = () => {
  const { address, ...props } = useAccount();
  console.log({
    props,
  });
  return (
    <div className="py-4">
      <Header />
      <div className="px-6 mt-9">
        <div className="text-[18px] font-bold">What’s innovator </div>
        <div className="mt-[15px] pl-2">
          <p className="text-[14px] leading-5 font-[300] text-[#808080]">
            Lorem ipsum dolor sit amet consectetur. Fermentum ut lectus augue
            orci eu a sed facilisis. Phasellus odio placerat ornare urna id
            nullam. Ac nunc praesent feugiat ut sapien varius et. Eu nisi quam
            suspendisse sed dignissim
          </p>
        </div>
      </div>
      {!address && (
        <div className="flex justify-center mt-[10em]">
          <Web3Button className="width-full" />
        </div>
      )}
      {address && (
        <div className="mt-12 px-8 fmd:flex md:w-[300px] justify-center m-auto w-full">
          <Link to="/quiz">
            <button className="bg-[#9B74DA] px-4 py-5 w-full m-auto text-white rounded-full text-3sm font-bold">
              Play now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

LandingPage.propTypes = {
  // propName: PropTypes.string,
};

export default LandingPage;

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verify } from "../service";

const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const [isPlayed, setIsPlayed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("authToken") && !searchParams.get("walletAddress")) {
      navigate("/download-muza");
    } else {
      (async () => {
        try {
          const res = await verify({
            walletAddress: searchParams.get("walletAddress"),
          });
          setIsPlayed(res.data.isExist);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [searchParams, navigate]);
  const handleNavigateToQuiz = () => {
    if (!isPlayed) {
      navigate(
        `/quiz?walletAddress=${searchParams.get(
          "walletAddress"
        )}&authToken=${searchParams.get("authToken")}`
      );
    }
  };
  return (
    <div className="py-4">
      <div className="text-right pr-6 text-[12px] text-[#80808060]">
        Wallet address: {searchParams.get("walletAddress")}
      </div>
      <Header isMain />
      <div className="text-center mt-9">
        <div className="text-[18px] font-bold">
          What types of innovator you are ?
        </div>
        {/* <div className="mt-[15px] pl-2">
          <p className="text-[14px] leading-5 font-[300] text-[#808080]">
            Lorem ipsum dolor sit amet consectetur. Fermentum ut lectus augue
            orci eu a sed facilisis. Phasellus odio placerat ornare urna id
            nullam. Ac nunc praesent feugiat ut sapien varius et. Eu nisi quam
            suspendisse sed dignissim
          </p>
        </div> */}
      </div>
      <div className="mt-12 px-8 fmd:flex md:w-[300px] justify-center m-auto w-full">
        <button
          onClick={handleNavigateToQuiz}
          className={`${
            isPlayed ? "bg-[#80808060]" : "bg-[#9B74DA]"
          } px-4 py-5 w-full m-auto text-white rounded-full text-3sm font-bold`}
        >
          {isPlayed ? "Already Played" : "Play now"}
        </button>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  // propName: PropTypes.string,
};

export default LandingPage;

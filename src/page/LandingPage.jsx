import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verify } from "../service";

const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const [isPlayed, setIsPlayed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("walletAddress")) {
      navigate("/unauthorized");
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
      navigate(`/quiz?walletAddress=${searchParams.get("walletAddress")}`);
    }
  };
  return (
    <div className="py-4">
      <Header isMain />
      <div className="flex justify-center mt-9">
        <div>
          <div className="text-[18px] font-bold">
            What types of innovator you are ?
          </div>
          <div className="mt-2 text-[12px] text-[#808080] font-[300]">
            Find out your innovator type through our quiz
          </div>
        </div>
      </div>
      <div className="mt-3 px-8 fmd:flex md:w-[300px] justify-center m-auto w-full">
        <button
          onClick={handleNavigateToQuiz}
          className={`${
            isPlayed ? "bg-[#80808060]" : "bg-[#9B74DA]"
          } px-4 py-5 w-full m-auto text-white rounded-full text-3sm font-bold`}
        >
          {isPlayed ? "Already Played" : "Play now"}
        </button>
      </div>
      {searchParams.get("walletAddress") && (
        <div className="text-center mt-2 text-[8px] text-[#80808060]">
          {searchParams.get("walletAddress")}
        </div>
      )}
    </div>
  );
};

LandingPage.propTypes = {
  // propName: PropTypes.string,
};

export default LandingPage;

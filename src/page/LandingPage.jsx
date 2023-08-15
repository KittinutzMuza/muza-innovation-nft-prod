import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchUserWallet, verify } from "../service";
import jwt_decode from "jwt-decode";

const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const [isPlayed, setIsPlayed] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();
  const token = searchParams.get("authToken");
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!searchParams.get("authToken")) {
      navigate("/unauthorized");
    } else {
      (async () => {
        try {
          const res = await verify({
            walletAddress: walletAddress,
          });
          setIsPlayed(res.data.isExist);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [searchParams, navigate, walletAddress]);
  const handleNavigateToQuiz = () => {
    if (!isPlayed) {
      navigate(`/quiz?walletAddress=${walletAddress}`);
    }
  };
  useEffect(() => {
    async function fetchWalletAddress() {
      const decodedJWT = jwt_decode(token);

      const data = await fetchUserWallet(token, decodedJWT?.userId);
      const walletAddress = data.data.user.wallet.address;
      setWalletAddress(walletAddress);
    }
    fetchWalletAddress();
  }, [token]);
  return (
    <div className="py-4">
      <Header isMain />
      <div className="flex justify-center mt-9">
        <div>
          <div
            className="text-[18px] font-bold"
            onClick={() => setCount((v) => v + 1)}
          >
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
      {token && count > 10 && (
        <div className="text-center mt-2 text-[8px] text-[#80808060]">
          {token}
        </div>
      )}
    </div>
  );
};

LandingPage.propTypes = {
  // propName: PropTypes.string,
};

export default LandingPage;

import Lottie from "react-lottie";
import firework from "../assets/lotties/animation_firework2.json";
import { innovatorScreenTheme } from "../config";

import specialistNFT from "../assets/images/specialist.png";
import visionaryNFT from "../assets/images/visionary.png";
import explorerNFT from "../assets/images/explorer.png";
import advocateNFT from "../assets/images/advocate.png";
import builderNFT from "../assets/images/builder.png";

import { useMemo } from "react";
import { useParams } from "react-router-dom";
const ResultPage = () => {
  let { innovatorType } = useParams();
  const THEME = innovatorScreenTheme[innovatorType];
  const innovatorNFT = useMemo(() => {
    const mapBanner = {
      SPECIALIST: specialistNFT,
      EXPLORER: explorerNFT,
      VISIONARY: visionaryNFT,
      ADVOCATE: advocateNFT,
      BUILDER: builderNFT,
    };
    return mapBanner[innovatorType];
  }, [innovatorType]);
  const fireworkOptions = {
    loop: true,
    autoplay: true,
    animationData: firework,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCloseWebView = () => {
    location.href = "muza://";
  };
  return (
    <div
      style={{
        backgroundColor: THEME.background,
      }}
      className="py-[2em] overflow-hidden"
    >
      <div className="px-6 font-bold text-[24px] text-white">THE {innovatorType}</div>
      <div className="relative h-[340px]">
        <Lottie
          className="absolute"
          options={fireworkOptions}
          height={300}
          width={300}
        />
        <div className="absolute top-[50px] left-0 right-0 text-center">
          <img
            className="h-[250px] ml-auto mr-auto"
            src={innovatorNFT}
            alt={`${innovatorType} NFT`}
          />
        </div>
      </div>
      <div className="px-8">
        <div>
          <span className="text-[16px] text-white">
            Your innovator types is
          </span>
          <span className="font-[600] text-[18px] text-white">
            {" "}
            THE {innovatorType}
          </span>
        </div>
        <div className="mt-4">
          <span className="text-white text-[13px] leading-[18px]">
            {THEME.description}
          </span>
        </div>
        <div className="text-white mt-6 text-[13px]">
          Key traits of an {innovatorType} innovator type include:
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: THEME.descriptionKey }}
          className="text-white mt-2 text-[13px] leading-[20px]"
        ></div>
        <div className="mt-4 text-white leading-[20px] text-[13px]">
          {THEME.descriptionEnd}
        </div>
      </div>
      <div
        onClick={handleCloseWebView}
        className="mt-10 bg-white px-8 mx-5 text-center py-4 rounded-full text-3sm font-bold"
      >
        Get NFT
      </div>
    </div>
  );
};

export default ResultPage;

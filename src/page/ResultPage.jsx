import Lottie from "react-lottie";
import firework from "../assets/lotties/animation_firework2.json";
import { innovatorScreenTheme } from "../config";

import specialistBanner from "../assets/images/banner/specialist.png";
import visionaryBanner from "../assets/images/banner/visionary.png";
import explorerBanner from "../assets/images/banner/explorer.png";
import advocateBanner from "../assets/images/banner/advocate.png";
import builderBanner from "../assets/images/banner/builder.png";
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
  const innovatorBanner = useMemo(() => {
    const mapBanner = {
      SPECIALIST: specialistBanner,
      EXPLORER: explorerBanner,
      VISIONARY: visionaryBanner,
      ADVOCATE: advocateBanner,
      BUILDER: builderBanner,
    };
    return mapBanner[innovatorType];
  }, [innovatorType]);
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

  return (
    <div
      style={{
        backgroundColor: THEME.background,
      }}
      className="py-4"
    >
      <div className="md:h-[500px] flex justify-center mt-11">
        <img
          className=""
          src={innovatorBanner}
          alt={`${innovatorType} Banner`}
        />
      </div>
      <div className="px-6 mt-5 overflow-hidden">
        <div>
          <span className="font-[600] text-[18px] text-white">
            Your innovator type is {innovatorType}
          </span>
        </div>
        <div className="mt-2">
          <span className="text-white text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Fermentum ut lectus augue
            orci eu a sed facilisis. Phasellus odio placerat ornare urna id
            nullam. Ac nunc praesent feugiat ut sapien varius et. Eu nisi quam
            suspendisse sed dignissim
          </span>
        </div>
        <div className="relative py-[10vh]">
          <Lottie
            className="absolute"
            options={fireworkOptions}
            height={250}
            width={250}
          />
          <div className="absolute transform rotate-[340deg] top-[150px] left-0 right-0 text-center">
            <img
              className="h-[150px] ml-auto mr-auto"
              height={10}
              src={innovatorNFT}
              alt={`${innovatorType} NFT`}
            />
          </div>
          {/* <Lottie
            className="absolute"
            options={congratsOptions}
            height={500}
            width={200}
          /> */}
        </div>
        {/* <div className="my-8 px-8 md:w-[400px] m-auto w-full">
          <button className="bg-white px-[6em] py-5 w-full m-auto rounded-full text-3sm font-bold">
            Get NFT
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ResultPage;

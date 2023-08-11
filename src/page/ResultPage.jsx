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

  return (
    <div
      style={{
        backgroundColor: THEME.background,
      }}
      className="py-4 pt-[4em] h-[100vh] overflow-hidden"
    >
      <div className="relative">
        <Lottie
          className="absolute"
          options={fireworkOptions}
          height={250}
          width={250}
        />
        <div className="absolute top-[50px] transform rotate-[340deg] left-0 right-0 text-center">
          <img
            className="h-[150px] ml-auto mr-auto"
            height={10}
            src={innovatorNFT}
            alt={`${innovatorType} NFT`}
          />
        </div>
      </div>
      <div className="px-6 mt-[2em]">
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

        <div className="text-center my-8 px-8 mt-[5em]">
          <a
            href="muza://"
            className="bg-white px-[6em] py-5 w-full m-auto rounded-full text-3sm font-bold"
          >
            Get NFT
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

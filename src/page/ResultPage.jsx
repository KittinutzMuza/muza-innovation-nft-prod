import { innovatorScreenTheme } from "../config";
import specialistBanner from "../assets/images/banner/specialist.png";
import visionaryBanner from "../assets/images/banner/visionary.png";
import explorerBanner from "../assets/images/banner/explorer.png";
import advocate from "../assets/images/banner/advocate.png";
import builderBanner from "../assets/images/banner/builder.png";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
const ResultPage = () => {
  let { innovatorType } = useParams();
  const THEME = innovatorScreenTheme[innovatorType.toUpperCase()];
  const innovatorBanner = useMemo(() => {
    const mapBanner = {
      specialist: specialistBanner,
      explorer: explorerBanner,
      visionary: visionaryBanner,
      advocate: advocate,
      builder: builderBanner,
    };
    return mapBanner[innovatorType];
  }, [innovatorType]);
  return (
    <div
      style={{
        backgroundColor: THEME.background,
      }}
      className="py-4 gap-y-11 h-[100vh]"
    >
      <div className="width-full flex justify-center mt-11">
        <img className="w-full" src={innovatorBanner} alt="Innovator Banner" />
      </div>
      <div className="px-6 mt-5">
        <div>
          <span className="font-[600] text-white">
            Your innovator type is {innovatorType.toUpperCase()}
          </span>
        </div>
        <div className="mt-2">
          <span className="text-white text-[12px]">
            Lorem ipsum dolor sit amet consectetur. Fermentum ut lectus augue
            orci eu a sed facilisis. Phasellus odio placerat ornare urna id
            nullam. Ac nunc praesent feugiat ut sapien varius et. Eu nisi quam
            suspendisse sed dignissim
          </span>
        </div>
        <div className="mt-10">
          <button className="px-4 py-5 w-full m-auto text-black rounded-full text-3sm font-bold bg-white">
            Get NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

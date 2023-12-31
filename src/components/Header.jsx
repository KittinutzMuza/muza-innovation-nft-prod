import PropTypes from "prop-types";
import Logo from "../assets/muza-logo.png";
import Present from "../assets/muza-tech-suace-present.svg";
import allInnovator from "../assets/muza-tech-sauce-innovator.png";
const Header = ({ isMain }) => {
  return (
    <div>
      <div className="flex items-center pl-6">
        <h1 className="text-3xl font-bold">MUZA Techsauce </h1>
        <div>
          <img className="ml-2" width={50} src={Logo} alt="Your SVG" />
        </div>
      </div>
      <div className="w-full md:rounded-[20px] flex justify-center mt-2">
        <img
          className="w-full"
          src={isMain ? allInnovator : Present}
          alt="Your SVG"
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  isMain: PropTypes.bool,
};

export default Header;

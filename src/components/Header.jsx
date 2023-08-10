import PropTypes from "prop-types";
import Logo from "../assets/muza-logo.svg";
import Present from "../assets/muza-tech-suace-present.svg";
const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">MUZA Techsauce </h1>
        <img className="ml-2" src={Logo} alt="Your SVG" />
      </div>
      <div className="width-full flex justify-center mt-11">
        <img className="w-full" src={Present} alt="Your SVG" />
      </div>
    </div>
  );
};

Header.propTypes = {
  // propName: PropTypes.string,
};

export default Header;

import Logo from "../assets/muza-logo.svg";
import Present from "../assets/muza-tech-suace-present.svg";
const Header = () => {
  return (
    <div>
      <div className="flex pl-6">
        <h1 className="text-3xl font-bold">MUZA Techsauce </h1>
        <img className="ml-2" width={40} src={Logo} alt="Your SVG" />
      </div>
      <div className="w-full md:h-[500px] md:rounded-[20px] flex justify-center mt-2">
        <img className="w-full" src={Present} alt="Your SVG" />
      </div>
    </div>
  );
};

Header.propTypes = {
  // propName: PropTypes.string,
};

export default Header;

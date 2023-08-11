import Logo from "../assets/muza-logo.png";
import Present from "../assets/muza-tech-suace-present.svg";
const Header = () => {
  return (
    <div>
      <div className="flex items-center pl-6">
        <h1 className="text-3xl font-bold">MUZA Techsauce </h1>
        <div>
          <img
            className="ml-2"
            width={50}
            src={Logo}
            alt="Your SVG"
          />
        </div>
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

import Logo from "./assets/muza-logo.svg";
import Present from "./assets/muza-tech-suace-present.svg";
function App() {
  return (
    <div className="py-4 gap-y-11">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">MUZA Techsauce</h1>
        <img className="ml-2" src={Logo} alt="Your SVG" />
      </div>
      <div className="width-full flex justify-center mt-11">
        <img className="w-full" src={Present} alt="Your SVG" />
      </div>
      <div className="px-8 mt-9">
        <h3 className="text-3sm font-bold">MUZWhat’s innovator </h3>
        <p className="text-3sm  text-neutral-500">
          Lorem ipsum dolor sit amet consectetur. Fermentum ut lectus augue orci
          eu a sed facilisis. Phasellus odio placerat ornare urna id nullam. Ac
          nunc praesent feugiat ut sapien varius et. Eu nisi quam suspendisse
          sed dignissim
        </p>
      </div>
      <div className="mt-12 px-8 width-full">
        <button className="bg-[#9B74DA] px-4 py-6 w-full m-auto text-white rounded-full text-3sm font-bold">
          Play now
        </button>
      </div>
    </div>
  );
}

export default App;

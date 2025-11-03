import manImage from "../assets/man.png";
import { useScreenSize } from "../hooks/useScreenSize";
const AudioGear = () => {
  const screen = useScreenSize();
  return (
    <div className="flex flex-col max-w-82 md:max-w-full lg:flex-row px-[10%] justify-between items-center my-30">
      <div
        className={`md:max-w-102 flex flex-col gap-10 ${screen === "mobile" ? "order-2" : ""}`}
      >
        <h2 style={{ fontSize: screen === "mobile" ? "28px" : "" }}>
          Bringing you the <span className="text-brown-1">best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={manImage} alt="Man Image" />
    </div>
  );
};

export default AudioGear;

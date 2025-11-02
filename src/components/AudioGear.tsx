import manImage from "../assets/man.png"
const AudioGear = () => {
  return (
    <div className="flex flex-row px-[10%] justify-between items-center mt-30">
      <div className="max-w-102 flex flex-col gap-10">
        <h2>
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
}

export default AudioGear
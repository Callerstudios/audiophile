import manImage from "../assets/man.png";

const AudioGear = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 px-[10%] my-30 max-w-full">
      <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">
          Bringing you the <span className="text-brown-1">best</span> audio gear
        </h2>
        <p className="text-gray-600">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <img
        src={manImage}
        alt="Man Image"
        className="w-full lg:w-1/2 rounded-xl"
      />
    </div>
  );
};

export default AudioGear;

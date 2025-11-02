import Button1 from "./Button1";
import NavBar from "./NavBar";
import styles from "./styles/Hero.module.css"

const Hero = () => {
  return (
    <div
      className={`${styles.hero} bg-cover bg-no-repeat w-full h-screen aspect-video`}
    >
      <NavBar />
      <div className="flex flex-col max-w-100 gap-3 text-white" style={{marginTop: "100px"}}>
        <p className="opacity-50">NEW PRODUCT</p>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button1 content="SEE PRODUCT" type="primary" onClick={()=>{}} />
      </div>
    </div>
  );
};

export default Hero;

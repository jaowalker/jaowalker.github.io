import "tachyons";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="sans-serif">
      <div className="cover bg-left bg-center-l hero">
        <div className="bg-black-80 pb7">
          <div className="tc-l pt5">
            <h1 className="mt0 pt5 white-90 f1">Hey, I'm Jorge Olivas</h1>
            <h2 className="mt3 mb4 pb4 fw1 f2 white-80">
              A developer from Idaho.
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

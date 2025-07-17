import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-gradient-to-b
      from-[#1b2651] to-[#166c96] flex xl:flex-row
      flex-col-reverse items-center justify-between
      lg:px-24 px-10 relative overflow-hidden"
    >
      {/* left section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.5,
            delay: 1.3,
          }}
          className="text-5xl md:text-7xl
          lg:text-8xl font-bold z-10 mb-6 text-[#edeae1]"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>
      </div>

      {/* Right Section */}
      <Spline scene="https://prod.spline.design/fDhGubD6ouhMcocF/scene.splinecode" />
    </section>
  );
};

export default HeroSection;

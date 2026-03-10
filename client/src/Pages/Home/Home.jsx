import { useState } from "react";
import style from "./Home.module.css";
import HeroPic from "../../assets/home imgs/HeroPic.png";
import AppPic from "../../assets/home imgs/AppPic.png";
import AppStore from "../../assets/home imgs/AppStore.png";
import GooglePlay from "../../assets/home imgs/GooglePlay.png";
import star1 from "../../assets/home imgs/Bstar.png";
import star2 from "../../assets/home imgs/Sstar.png";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";
import CalScheduler from "../../Components/Cal/CalScheduler";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const BRAND_NAMES = [
  "basiclook", "Organdy", "LILLY", "in your shoe", "Palma",
  "Eva", "Comfo", "MALA", "Braes", "Telofill",
  "Brava", "Be Native", "FAME", "Nuit", "Siwa"
];

const StatCounter = ({ end, suffix, label, customClass = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className={`${style.info} ${customClass} text-center mb-5 md:mb-0 w-full md:w-1/3`}>
      <h5>{inView ? <CountUp end={end} duration={2.5} separator="," /> : "0"}{suffix}</h5>
      <p>{label}</p>
    </div>
  );
};

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="overflow-hidden">
      <div className="px-10 md:px-24 pt-16">
        <div className="flex items-center md:justify-between flex-col xl:flex-row relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full xl:w-3/5 2xl:w-1/2 text-center md:text-start z-10"
          >
            <h2 className={`${style.heroTitle} mb-4 text-title-blue font-bold tracking-wider`}>
              Egyptian E-commerce
            </h2>
            <p className={`${style.heroDescription} mb-6 text-dark-grey text-md`}>
              Egypt&apos;s e-commerce sector has witnessed significant growth in
              recent years, fueled by increasing internet penetration, a large
              youthful population, and rising consumer demand for convenience
              and a wide range of products.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${style.btnMeeting} mb-16 py-3 px-8 rounded-3xl hover:bg-main-blue transition-all text-white bg-title-blue shadow-[0_0_20px_rgba(43,61,91,0.2)]`}
              onClick={openPopup}
            >
              Meeting now
            </motion.button>

            <div className="flex flex-col md:flex-row md:justify-between w-full">
              <StatCounter end={200} suffix="+" label="Local Brands" />
              <StatCounter
                end={2000}
                suffix="+"
                label="High-Quality Products"
                customClass="box-content md:border-x-2 md:px-10"
              />
              <StatCounter end={30000} suffix="+" label="Happy Customers" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-10 xl:mt-0 xl:w-2/5 self-center xl:self-end flex justify-end 2xl:w-fit"
          >
            {/* Light pattern behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-dark-grey/50 rounded-full blur-[80px] -z-10 animate-pulse"></div>

            <img className="relative z-10 object-contain max-h-[600px]" src={HeroPic} alt="couple Picture" />
            <motion.img
              initial={{ rotate: -45, scale: 0 }}
              animate={{ rotate: 0, scale: 1, y: [0, -15, 0] }}
              transition={{
                duration: 0.6,
                delay: 1,
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute z-20 md:top-0 -top-8 md:right-0 -right-7 drop-shadow-lg w-20 md:w-auto"
              src={star1}
              alt="star picture"
            />
            <motion.img
              initial={{ rotate: 45, scale: 0 }}
              animate={{ rotate: 0, scale: 1, y: [0, 20, 0] }}
              transition={{
                duration: 0.6,
                delay: 1.2,
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute z-20 top-20 md:top-44 lg:top-48 -left-9 md:-left-16 lg:-left-20 xl:-left-0 2xl:-left-20 drop-shadow-lg w-12 md:w-auto"
              src={star2}
              alt="star picture"
            />
            <motion.img
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1, y: [0, -25, 0] }}
              transition={{
                duration: 0.6,
                delay: 1.4,
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute z-20 top-[60%] -right-5 md:-right-12 drop-shadow-lg w-10 md:w-16 opacity-70"
              src={star2}
              alt="third star picture"
            />
          </motion.div>
        </div>
      </div>

      <div className="pb-20 bg-dark-blue">
        {/* Infinite Brand Slider */}
        <div className="py-12 border-b-2 border-white/10 relative overflow-hidden flex flex-col items-center">
          <h2 className={`${style.categoriesTitle} mb-12`}>Our Local Brands</h2>
          <div className={style.marqueeContainer}>
            <div className={style.marqueeTrack}>
              {[...BRAND_NAMES, ...BRAND_NAMES].map((brand, i) => (
                <div
                  key={i}
                  className="mx-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center min-w-[200px] border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <p className="text-white font-bold text-2xl font-inter uppercase tracking-widest">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-10 md:px-24">
          <h2 className={`${style.categoriesTitle} my-24`}>
            Find Your Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Clothes - Large Card */}
            <div className="group relative col-span-1 md:col-span-2 lg:col-span-2 h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://plus.unsplash.com/premium_photo-1673356302101-e69975f7109a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Clothes" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-white font-extrabold text-3xl md:text-5xl font-jaro tracking-wider translate-y-2 transition-transform duration-500 group-hover:-translate-y-2">Clothes</p>
                <div className="w-16 h-1 bg-white mt-4 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            </div>

            {/* Shoes - Standard Card */}
            <div className="group relative col-span-1 md:col-span-1 lg:col-span-1 h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-white font-extrabold text-3xl md:text-5xl font-jaro tracking-wider translate-y-2 transition-transform duration-500 group-hover:-translate-y-2">Shoes</p>
                <div className="w-16 h-1 bg-white mt-4 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            </div>

            {/* Bags - Standard Card */}
            <div className="group relative col-span-1 md:col-span-1 lg:col-span-1 h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1685945000440-2b7145b84b9c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bags" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-white font-extrabold text-3xl md:text-5xl font-jaro tracking-wider translate-y-2 transition-transform duration-500 group-hover:-translate-y-2">Bags</p>
                <div className="w-16 h-1 bg-white mt-4 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            </div>

            {/* Makeup - Large Card */}
            <div className="group relative col-span-1 md:col-span-1 lg:col-span-2 h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://media.istockphoto.com/id/2211471347/photo/beauty-products-on-blue-background.jpg?s=612x612&w=0&k=20&c=PIGT9iJMY3IEAbCT4xc7CGbLpa2knKaKmb5q8GC75R4=" alt="Makeup" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-white font-extrabold text-3xl md:text-5xl font-jaro tracking-wider translate-y-2 transition-transform duration-500 group-hover:-translate-y-2">Makeup</p>
                <div className="w-16 h-1 bg-white mt-4 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
        }}
        className="pb-20 px-10 lg:px-20 xl:px-24 flex flex-col justify-center lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-12 mt-20"
      >
        {/* Download App Section */}
        <div className={`${style.download} text-center lg:text-start w-full lg:w-1/2 mt-10 lg:mt-0`}>
          <h2 className="text-dark-blue mb-4">Download App Now</h2>
          <p className={`${style.heroDescription} mb-11`}>
            Discover and support Egypt’s best local brands all in one app! From
            fashion and accessories to handmade crafts and home essentials, shop
            original Egyptian products and enjoy exclusive offers, fast
            delivery, and secure payments.
          </p>
          <div className="flex justify-around lg:justify-start flex-wrap mb-16">
            <img className="md:me-7" src={GooglePlay} alt="GooglePlay Logo" />
            <img src={AppStore} alt="AppStore Logo" />
          </div>
          <div className="flex justify-around gap-5 xl:justify-between md:flex-row flex-col">
            <motion.div whileHover={{ scale: 1.05 }} className={`flex flex-col bg-title-blue text-white md:mb-0 mb-5 md:w-28 md:px-3 xl:w-44 ${style.ratings} rounded-xl py-5 2xl:px-1 box-content text-center items-center justify-between shadow-[0_10px_30px_rgba(43,61,91,0.3)] cursor-pointer`}>
              <PiDownloadSimpleBold className="text-4xl text-white" />
              <p>59865</p>
              <p>Download</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className={`flex flex-col bg-title-blue text-white md:mb-0 mb-5 md:w-28 md:px-3 xl:w-44 ${style.ratings} rounded-xl py-5 2xl:px-1 box-content text-center items-center justify-between shadow-[0_10px_30px_rgba(43,61,91,0.3)] cursor-pointer`}>
              <BiSolidLike className="text-4xl text-white" />
              <p>29852</p>
              <p>Like</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className={`flex flex-col bg-title-blue text-white md:mb-0 mb-5 md:w-28 md:px-3 xl:w-44 ${style.ratings} rounded-xl py-5 2xl:px-1 box-content text-center items-center justify-between shadow-[0_10px_30px_rgba(43,61,91,0.3)] cursor-pointer`}>
              <TiStarFullOutline className="text-4xl text-white" />
              <p>1500</p>
              <p>5 star rating</p>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-start relative">
          {/* Subtle orb behind the app picture */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-dark-grey/50 rounded-full blur-[60px] -z-10"></div>
          <motion.img whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }} className="relative z-10 max-h-[700px] object-contain" src={AppPic} alt="Application's picture" />
        </div>
      </motion.div>

      <CalScheduler isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default Home;
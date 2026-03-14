import team1 from "../../assets/About imgs/team1.jpeg";
import team2 from "../../assets/About imgs/team2.jpeg";
import Zeyad from "../../assets/About imgs/Zeyad.png";
import Sandy from "../../assets/About imgs/Sandy.png";
import Greg from "../../assets/About imgs/Greg.png";
import Reem from "../../assets/About imgs/Reem.png";
import Sara from "../../assets/About imgs/Sara.png";
import Negm from "../../assets/About imgs/Negm.png";
import Ali from "../../assets/About imgs/Ali.png";
import Siam from "../../assets/About imgs/Siam.png";
import style from "./AboutUs.module.css";
import { RiLinkedinLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Ahmed Algrgawy", role: "Backend Developer", image: Greg, fb: "https://www.facebook.com/ahmedalgrgawy10", gh: "https://github.com/ahmedalgrgawy", li: "https://www.linkedin.com/in/ahmed-algrgawy/" },
  { name: "Mohamed Hisham", role: "UI & UX Designer", image: Siam, fb: "https://www.facebook.com/mohamed.hisham.659961", gh: "https://github.com/MHS7777", li: "https://www.linkedin.com/in/mohamed-hisham-a13b14337/" },
  { name: "Mostafa Negm", role: "Mobile Developer", image: Negm, fb: "https://www.facebook.com/mostafanegmal132", gh: "https://github.com/MostafaNegm12/mostafanegm12", li: "https://www.linkedin.com/in/mostafa-negm-b73631223/" },
  { name: "Zeyad Elkhamary", role: "Frontend Developer", image: Zeyad, fb: "https://www.facebook.com/zeyad.elkhamary/", gh: "https://github.com/Zeyad-Elkhamary", li: "www.linkedin.com/in/zeyad-elkhamary" },
  { name: "Ali El-Beltagy", role: "Cyber Security", image: Ali, fb: "https://www.facebook.com/share/1MpqJox6ap/", gh: "https://github.com/aliayman010", li: "https://www.linkedin.com/in/ali-el-beltagy" },
  { name: "Sandreen Kotb", role:"Frontend Developer", image: Sandy, fb: "https://www.facebook.com/sandy.kotb.3", gh: "https://github.com/Sandreen-Kotb", li: "https://www.linkedin.com/in/sandreen-kotb/" },
  { name: "Sara Elkholy", role: "Mobile Developer", image: Sara, fb: "https://www.facebook.com/share/1Fs9N73L5Y/", gh: "https://github.com/Sarahelkholy", li: "https://www.linkedin.com/in/sara-elkholy-06189126b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Reem Ghareeb", role: "Backend Developer", image: Reem, fb: "https://www.facebook.com/reemghareeb25", gh: "https://github.com/reemghareeb25", li: "https://www.linkedin.com/in/reem-elsayed25/" }
];

const AboutUs = () => {
  return (
    <div className="bg-[#EFF2F6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 p-6 md:p-12 lg:p-18 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <img
            className="w-full rounded-2xl shadow-2xl"
            src={team2}
            alt="Who we are team work"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className={`${style.title} mb-5`}>Who We Are?</h2>
          <p className={`${style.description}`}>
            We are a passionate team of developers, designers, and testers
            committed to empowering local Egyptian businesses through
            technology. United by a shared vision, we aim to create innovative
            digital solutions that support local commerce and celebrate Egypt’s
            unique products and talents.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 p-6 md:p-12 lg:p-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className={`${style.title} mb-5 text-semibold text-main-text`}>What We Do ?</h2>
          <p className={`${style.description}`}>
            We are building a digital marketplace tailored for Egyptian brands
            and local stores. Our platform provides small and medium businesses
            with the tools they need to grow online, connect with more
            customers, and stand out in a competitive market. Whether it’s
            fashion, crafts, or local goods — we make them accessible to
            everyone, everywhere.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 flex justify-center w-full"
        >
          <img
            className="w-full rounded-2xl shadow-2xl"
            src={team1}
            alt="What we do team work"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center mt-10 mb-4"
      >
        <h2 className={`${style.title}`}>Meet Our Team</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-10 lg:px-16 pb-20 max-w-[1400px] mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-64 overflow-hidden bg-[#EFF2F6] flex justify-center items-end">
              <img
                className="w-full max-h-[90%] object-contain object-bottom transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                src={member.image}
                alt={member.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <a href={member.fb} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transform hover:scale-125 transition-all">
                    <CiFacebook className="text-3xl font-bold" />
                  </a>
                  <a href={member.gh} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transform hover:scale-125 transition-all">
                    <IoLogoGithub className="text-3xl font-bold" />
                  </a>
                  <a href={member.li} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transform hover:scale-125 transition-all">
                    <RiLinkedinLine className="text-3xl font-bold" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 text-center bg-white relative z-10">
              <h4 className={`${style.cardMember} text-lg font-bold text-gray-800`}>{member.name}</h4>
              <p className={`${style.cardDescription} text-sm text-gray-500 mt-1`}>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

import QR from "../../assets/Qrcode.png";
import googlePlay from "../../assets/GooglePlay.png";
import appStore from "../../assets/AppStore.png";
import style from "./footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={`${style.secondText} bg-bg-footer text-white`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16 py-10">
          <div className="w-full">
            <h2 className={[style.logoText]}>MISRIFY</h2>
            <p className="text-sm">
              Welcome to MISRIFY, your home for Egyptian brands.
              Join as a merchant to sell locally or shop our curated collection, delivered from Egypt to the world..
            </p>
          </div>

          <div className="w-full">
            <h6 className="font-bold mb-4">Pages</h6>
            <ul>
              <li className="my-3 ">
                <Link className="hover:text-dark-grey duration-300" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  className="hover:text-dark-grey duration-300"
                  to={"/aboutus"}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-3 ">
                <Link
                  className="hover:text-dark-grey duration-300"
                  to={"/contact"}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h6 className="font-bold mb-4">Account</h6>
            <ul>
              <li className="my-3">
                <Link
                  className=" hover:text-dark-grey duration-300"
                  to={"/profile"}
                >
                  My Account
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className=" hover:text-dark-grey duration-300"
                  to={"/signup"}
                >
                  signup
                </Link>
                <span> / </span>
                <Link
                  className=" hover:text-dark-grey duration-300"
                  to={"/login"}
                >
                  Login
                </Link>
              </li>
              <li className="my-3">
                <Link
                  className=" hover:text-dark-grey duration-300"
                  to={"/notifications"}
                >
                  Notifications
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h6 className="font-bold mb-4">Download App</h6>
            <div>
              {/* <p className="my-1.5">Save $3 with App New User Only</p> */}
              <div className="flex">
                <Link to={""}>
                  <img src={QR} alt="QR code" />
                </Link>
                <div className="ms-2 flex flex-col justify-evenly">
                  <Link to={""}>
                    <img src={googlePlay} alt="google play logo" />
                  </Link>
                  <Link to={""}>
                    <img src={appStore} alt="app store logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-2/5 md:w-3/5 my-5">
              <Link to={""}>
                <FaFacebook className="text-3xl font-bold hover:bg-white duration-500 hover:text-bg-footer p-1 rounded-full box-content" />
              </Link>
              <Link to={""}>
                <FaLinkedin className="text-3xl font-bold hover:bg-white duration-500 hover:text-bg-footer p-1 rounded-full box-content" />
              </Link>
              <Link to={""}>
                <FaTwitter className="text-3xl font-bold hover:bg-white duration-500 hover:text-bg-footer p-1 rounded-full box-content" />
              </Link>
              <Link to={""}>
                <FaInstagram className="text-3xl font-bold hover:bg-white duration-500 hover:text-bg-footer p-1 rounded-full box-content" />
              </Link>
            </div>
          </div>
        </div>

        <p className="px-16 py-4 text-center text-sm text-gray-400">
          © 2025 the creation.design | All rights reserved by Misrify
        </p>
      </footer>
    </>
  );
};

export default Footer;

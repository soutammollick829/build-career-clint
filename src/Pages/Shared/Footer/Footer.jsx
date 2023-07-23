import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo image/4395150.png";
import { FaFacebook, FaLinkedin, FaRegClock } from "react-icons/fa";
import moment from "moment/moment";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="w-60">
          <span className="flex text-2xl font-bold text-slate-700">
            <img className="w-10" src={logoImg} alt="img" />
            Education
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          </p>
        </div>
        <div>
          <span className="text-2xl font-bold text-slate-700">Main Links</span>
          <li className="hover:text-[#ee5253]"><Link>Colleges</Link></li>
          <li className="hover:text-[#ee5253]"><Link>Admission</Link></li>
          <li className="hover:text-[#ee5253]"><Link>My College</Link></li>
          <li className="hover:text-[#ee5253]"><Link to='/about'>About us</Link></li>
          <li className="hover:text-[#ee5253]"><Link to='/contact'>Contact us</Link></li>
        </div>
        <div>
          <span className="text-2xl font-bold text-slate-700">
            Opening Hours
          </span>
          <FaRegClock className="mx-auto text-2xl text-[#ee5253]"/>
          <p>{moment().format('dddd,-Fri-L')}</p>
          <p>{moment().format('LLLL')}</p>
          <p className="text-[#ee5253] font-bold">Sunday Closed</p>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#6f9a37] text-base-content border-base-300">
        <div className="items-center grid-flow-col mx-auto text-white inline-block">
            <div className="flex justify-center text-2xl gap-5">
            <FaFacebook className="hover:text-[#1877F2]"/> <FaLinkedin className="hover:text-blue-600"/>
            </div>
          <p>2016 Education. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import { Link, Outlet } from "react-router-dom";
import logoImg from "../../../assets/logo image/4395150.png";
import { FaEnvelopeOpenText, FaKey, FaMapMarkerAlt, FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handelLogOut = () =>{
    logOut()
    .then()
    .catch()
  }
  return (
    <>
      <div className="lg:h-10 bg-[#6f9a37] lg:flex justify-around items-center text-white text-center">
        <p className="inline-flex items-center gap-2">
          <FaPhoneAlt className="text-[#ee5253]" /> (+7) 811-234-5678
        </p>
        <p className="inline-flex items-center gap-2">
          <FaEnvelopeOpenText className="text-[#ee5253]" /> info@mail.com
        </p>
        <p className="inline-flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#ee5253]" /> 199 Park Ave, San Jose,
          CA 95110, United States
        </p>
      </div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <img className="w-16" src={logoImg} alt="img" />
              <h1 className="text-4xl font-bold">
                Build <span className="text-[#ee5253]">Career</span>
              </h1>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li className="font-semibold">
                  <Link to='/'>Home</Link>
                </li>
                <li className="font-semibold">
                  <Link to='/colleges'>Colleges</Link>
                </li>
                <li className="font-semibold">
                  <Link to='/admission'>Admission</Link>
                </li>
                <li className="font-semibold">
                  <Link to='/my-college'>My College</Link>
                </li>
                <li className="font-semibold">
                  <Link to='/about'>About</Link>
                </li>
                <li className="font-semibold">
                  <Link to='/contact'>Contact us</Link>
                </li>
                {
                  user? <><button onClick={handelLogOut} className="font-semibold btn btn-sm">
                 <FaKey/> Logout
                </button></>:
                  <><li className="font-semibold">
                  <Link to='/login'><FaUserCircle/> Login</Link>
                </li></>
                }
              </ul>
            </div>
          </div>
          <Marquee className="text-[#ee5253] text-lg mb-5 mt-5">
          This website used for education, courses, school, online learning and training.
          </Marquee>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/colleges'>Colleges</Link>
            </li>
            <li><Link to='/admission'>Admission</Link></li>
            <li> <Link to='/my-college'>My College</Link></li>
            <li> <Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
            {
                  user? <><button onClick={handelLogOut} className="font-semibold btn btn-sm">
                 <FaKey/> Logout
                </button></>:
                  <><li className="font-semibold">
                  <Link to='/login'><FaUserCircle/> Login</Link>
                </li></>
                }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

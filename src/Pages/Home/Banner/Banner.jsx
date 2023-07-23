import { Bounce } from "react-awesome-reveal";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://as1.ftcdn.net/v2/jpg/05/00/80/72/1000_F_500807217_Jbd9X8Hc24BRKEc5Vfl3XkxC2hjIV4IF.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content lg:mx-20">
          <div className="">
            <Bounce>
              <h1 className="mb-5 text-2xl lg:text-5xl font-bold">
                We Are Right Person For <br /> Your Educations Teaching
              </h1>
            </Bounce>
            <p className="mb-5">
              There are many variations of passages of by injected humour, or
              randomised words which do not look even slightly believable. If
              you are going to use a passage of Lorem Ipsum, you need to be sure
              there is not anything embarrassing hidden in the middle of text
              amr songr balga ami toami valo lasi ciri din akr dali
            </p>
            <button className="btn bg-[#ee5253] border-0 mr-5 text-white hover:text-slate-700">
              admission
            </button>
            <button className="btn btn-outline border-[#ee5253] text-white hover:text-[#ee5253]">
              Contact us <FaPhoneAlt/>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 bg-base-300  border-r-4 border-[#ee5253] p-5">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#ee5253] text-center lg:text-start">
            Welcome to <br /> Build Your Career website
          </h1>
        </div>
        <div className="grid flex-grow h-36 lg:h-32 bg-base-300 place-items-center lg:w-1/2 p-5">
          <p>
            Hello ! This Build Your Career website. This is responsive template
            and no coding required.Vel illum dolore eu feugiat{" "}
            <span className="text-[#ee5253] font-bold">Build Career</span> at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum .
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;

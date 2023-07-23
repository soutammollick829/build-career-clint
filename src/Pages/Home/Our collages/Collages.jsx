import { Zoom } from "react-awesome-reveal";
import images1 from "../../../assets/other/kenny-eliason-zFSo6bnZJTw-unsplash.jpg";
import images2 from "../../../assets/other/leon-wu-LLfRMRT-9AY-unsplash.jpg";
import images3 from "../../../assets/other/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import { FaAngleRight } from "react-icons/fa";

const Collages = () => {
  return (
    <>
    <h1 className="text-center font-bold text-4xl lg:mt-32 mb-16 text-slate-700">Top Colloges & Admission </h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-10 gap-12 mb-20">
      <Zoom>
        <div className="card-compact lg:w-72 bg-base-100 shadow-xl">
          <figure>
            <img className="h-52" src={images3} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#ee5253] underline">
              Top 10 Collages Here!
            </h2>
            <p>
              Participants are interconnected via audio and video, enabling them
              to interact both with the instructor and fellow classmates. They
              can talk to the trainer at any time
            </p>
            <div className="mt-5 w-32 mx-auto">
              <button className="btn btn-sm hover:bg-[#ee5253] hover:text-white border-[#ee5253]">visit here <FaAngleRight/></button>
            </div>
          </div>
        </div>
        <div className="card-compact lg:w-72 bg-base-100 shadow-xl">
          <figure>
            <img className="h-52" src={images1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#ee5253] underline">
              Your Favourite Collages
            </h2>
            <p>
              Participants are interconnected via audio and video, enabling them
              to interact both with the instructor and fellow classmates. They
              can talk to the trainer at any time
            </p>
            <div className="w-32 mx-auto">
              <button className="btn btn-sm mt-5 hover:bg-[#ee5253] hover:text-white border-[#ee5253]">visit here <FaAngleRight/></button>
            </div>
          </div>
        </div>
        <div className="card-compact lg:w-72 bg-base-100 shadow-xl">
          <figure>
            <img className="h-52 w-full" src={images2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#ee5253] underline">
              Admission Your Collages
            </h2>
            <p>
              Participants are interconnected via audio and video, enabling them
              to interact both with the instructor and fellow classmates. They
              can talk to the trainer at any time
            </p>
            <div className="w-32 mx-auto">
              <button className="btn btn-sm mt-5 hover:bg-[#ee5253] hover:text-white border-[#ee5253]">visit here <FaAngleRight/></button>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
    </>
  );
};

export default Collages;

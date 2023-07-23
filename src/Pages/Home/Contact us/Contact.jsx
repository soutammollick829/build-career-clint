import { FaEnvelopeOpenText, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="-mt-2 lg:mx-9 mb-32">
      <div
        className="hero lg:min-h-screen ml-2 bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1658235081452-c2ded30b8d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=814&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="lg:flex items-center gap-8 text-center lg:text-start">
          <div className="lg:w-1/2">
            <h1 className="mb-5 text-5xl font-bold text-white ml-10 mt-5">
              Contact us
            </h1>
            <div>
              <div className="">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="text-white">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name..."
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email..."
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="text-white">Subject</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered"
                    />
                  </div>
                  <label className="label">
                    <span className="text-white">Your message</span>
                  </label>
                  <textarea
                    placeholder="Fell free message me"
                    className="textarea textarea-bordered textarea-md w-full"
                  ></textarea>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#ee5253] border-0 text-white hover:text-slate-700">
                      send massage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-lg space-y-3 mt-10 text-white">
            <p className="inline-flex items-center font-bold gap-2">
              <FaPhoneAlt className="text-[#ee5253] text-4xl" /> (+7)
              811-234-5678
            </p>
            <br />
            <p className="inline-flex items-center font-bold gap-2">
              <FaEnvelopeOpenText className="text-4xl text-[#ee5253]" />{" "}
              info@mail.com
            </p>
            <p className="inline-flex items-center  font-bold">
              <FaMapMarkerAlt className="text-4xl text-[#ee5253]" /> 199 Park
              Ave, San Jose, CA 95110, United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

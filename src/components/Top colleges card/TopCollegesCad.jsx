import { FaAngleRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const TopCollegesCad = ({ college }) => {
  const {
    college_image,
    college_name,
    college_rating,
    number_of_research,
    admission_date,
  } = college;
  return (
    <div>
      <div className="lg:w-72 bg-base-100 shadow-xl mb-5">
        <figure>
          <img className="h-56" src={college_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#ee5253]">{college_name}</h2>
          <p>Admission Date: {admission_date}</p>
          <p>Number of research: {number_of_research}</p>
          <p className="text-[#ee5253] text-xl">
          <Rating
            placeholderRating={college_rating}
            readonly
            emptySymbol={<FaRegStar/>}
            placeholderSymbol={<FaStar/>}
            fullSymbol={<FaStar/>}
          />
          </p>
          <div className="card-actions">
            <div className="btn btn-sm">Details <FaAngleRight/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollegesCad;

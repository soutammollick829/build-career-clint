const TopCollegesCad = ({ college }) => {
  const { college_image, college_name, college_rating, number_of_research, admission_date } = college;
  return (
    <div>
      <div className="lg:w-72 bg-base-100 shadow-xl">
        <figure>
          <img className="h-56" src={college_image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{college_name}</h2>
          <p>Admission Date: {admission_date}</p>
          <p>Number of research: {number_of_research}</p>
          <div className="card-actions">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollegesCad;

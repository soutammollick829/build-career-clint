import useColleges from "../../Hooks/Hooks";
import TopCollegesCad from "../../components/Top colleges card/TopCollegesCad";

const Colleges = () => {
    const [colleges] = useColleges();
    console.log(colleges);
    return (
        <div>
            <h1>Top colleges page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mx-10">
                {
                    colleges.map(college => <TopCollegesCad
                    key={college._id}
                    college={college}
                    ></TopCollegesCad>)
                }
            </div>
        </div>
    );
};

export default Colleges;
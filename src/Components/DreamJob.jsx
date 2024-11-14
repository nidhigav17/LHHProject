import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";



const DreamJob = () => {
  return (
    <>
      <div className=" bg-[#F8F8F9] pb-12 ">
        <div className="text-center pt-12 mb-5 ">
          <h1 className="text-3xl text-[#1C304B]">Find your dream job</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 lg:flex-row">
          {/* <CiSearch className=""/> */}
          <input
            className="border border-black rounded-lg max-w-50 px-10 py-2"
            type="text"
            placeholder="Search for job tittle or keyword"
          />
          {/* <FiMapPin /> */}
          <input
            className="border  border-black rounded-lg max-w-50 px-10 py-2"
            type="text"
            placeholder="Search for City State and Zip code"
          />

          <button className="bg-[#1C304B] text-white px-3 py-2 rounded-lg hover:bg-black">
            Search Jobs
          </button>
        </div>
      </div>
     
     
   

      {/* We're here to work for you */}
      
      {/* partner section */}
      

      {/* Global Workforce section */}
     

      {/* Driving global impact for you */}
      
    </>
  );
};
export default DreamJob;

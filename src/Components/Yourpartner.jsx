import { Link
    
 } from "react-router-dom";
const Yourpartner=()=>{
    return(
        <>
        <div className="mt-10 mx-12">
        <h1 className="text-3xl  text-[#1C304B]">
          Your partner in career and workforce<br></br> transformation
        </h1>
        <p className="text-xl mt-2">
          With a personalized, empathetic approach and proven track record, we
          are<br></br>
          here for you to achieve your career and business goals.
        </p>
        <div className="mx-12 mt-4 flex flex-col justify-center items-center gap-6 lg:flex-row">
          <div className=" border shadow-xl rounded-lg py-7  w-full text-center">
            <h1 className="text-xl font-semibold">Find your dream job</h1>
            <Link>
              <h3 className="text-red-700 text-sm hover:underline mt-3">
                SEARCH JOBS
              </h3>
            </Link>
          </div>
          <div className="border shadow-lg rounded-lg py-7  w-full text-center">
            <h1 className="text-xl font-semibold">
              Find & attract great hires
            </h1>
            <Link>
              <h3 className="text-red-700 text-sm hover:underline mt-3">
                RECRUITMENT SOLUTIONS
              </h3>
            </Link>
          </div>
          <div className="border shadow-lg rounded-lg py-7  w-full text-center">
            <h1 className="text-xl font-semibold">Search for top talent</h1>
            <h3 className="text-red-700 text-sm hover:underline mt-3">
              CANDIDATE SEARCH
            </h3>
          </div>
        </div>
        <div className="mx-12 mt-4 flex flex-col justify-center items-center gap-6 lg:flex-row">
          <div className=" border shadow-xl rounded-lg py-7  w-full text-center">
            <h1 className="text-xl font-semibold">
              Future proof your workforce
            </h1>
            <Link>
              <h3 className="text-red-700 text-sm hover:underline mt-3">
                CAREER MOBILITY SOLUTIONS
              </h3>
            </Link>
          </div>
          <div className="border shadow-lg rounded-lg py-7  w-full text-center">
            <h1 className="text-xl font-semibold">
              Develop your leadership team
            </h1>
            <Link>
              <h3 className="text-red-700 text-sm hover:underline mt-3">
                LEADERSHIP DEVELOPMENT
              </h3>
            </Link>
          </div>
          <div className="border shadow-lg rounded-lg py-7  w-full text-center">
            <h1 className="text-xl font-semibold">
              Empower transitioning talent
            </h1>
            <h3 className="text-red-700 text-sm hover:underline mt-3">
              EMPATHETIC OUTPLACEMENT
            </h3>
          </div>
        </div>
      </div>
        </>
    )
}
export default Yourpartner;
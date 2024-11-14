import { Link } from "react-router-dom";

const QuickLink=()=>{
    return(
        <>
         <div className="mt-10 mx-12">
        <h1 className="text-3xl  text-[#1C304B]">Quick links</h1>
        <div className="mx-12 mt-4 flex flex-col justify-center items-center gap-3 lg:flex-row">
          <div className="border shadow-lg rounded-lg py-5  w-full text-center">
            <h1>Attract & secure top talent</h1>
            <Link>
              <h3 className="text-red-700 hover:underline">
                RECRUITMENT SOLUTIONS
              </h3>
            </Link>
          </div>
          <div className="border shadow-lg rounded-lg py-5  w-full text-center">
            <h1>Develop your leaders</h1>
            <Link>
              <h3 className="text-red-700 hover:underline">
                LEADERSHIP DEVELOPMENT
              </h3>
            </Link>
          </div>
          <div className="border shadow-lg rounded-lg py-5  w-full text-center">
            <h1>Empower transitioning talent</h1>
            <Link>
              <h3 className="text-red-700 hover:underline">OUTPLACEMENT</h3>
            </Link>
          </div>
          <div className="border shadow-lg rounded-lg py-5   w-full text-center">
            <h1>Elevate executive careers</h1>
            <Link>
              <h3 className="text-red-700 hover:underline ">
                BESPOKE ICEO SOLUTIONS
              </h3>
            </Link>
          </div>
        </div>
      </div>

        </>
    )
}
export default QuickLink;
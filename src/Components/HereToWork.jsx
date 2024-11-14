import firstImg from "../assets/image1.png";
import secondImg from "../assets/image2.png";
import thirdImg from "../assets/image3.png";

const HereToWork=()=>{
    return(
        <>
        <div className="mt-16 mx-12">
        <h1 className="text-3xl text-[#1C304B]">We're here to work for you</h1>
        <p className="text-xl mt-2">
          Whether you're an individual looking to take charge of your career, an
          <br></br>
          organization seeking top talent solutions, or an executive in need of
          tailored <br></br>support, our team specializes in empowering
          individuals, creating<br></br> comprehensive talent solutions, and
          supporting transformative leaders.
        </p>
      </div>

      <div className=" mt-10 mx-12 flex flex-col justify-between items-center gap-7  md:flex-row lg:flex-row">
        <div className="border rounded-lg shadow w-full  ">
          <img className="w-full" src={firstImg} alt="img" />
          <h2 className="text-2xl text-[#1C304B] font-semibold ml-10 my-4">
            Individuals
          </h2>
          <p className=" text-md ml-10">
            Take charge of your career with the help of<br></br>{" "}
            experiencedrecruiters and career advisors <br></br>ready to help you
            find your next<br></br> opportunity, evolve your skills, or take
            your<br></br> career to the next level
          </p>
          <h4 className="text-red-800 text-end my-7 mr-5 hover:underline cursor-pointer">
            GET STARTED{" "}
          </h4>
        </div>
        <div className="border rounded-lg shadow w-full  ">
          <img className="w-full" src={secondImg} alt="img" />
          <h2 className="text-2xl text-[#1C304B] font-semibold ml-10 my-4">
            Organizations
          </h2>
          <p className=" text-md ml-10">
            Amid economic uncertainty, evolving<br></br> business needs and
            competing priorities,<br></br>stay competitive by aligning workforce
            <br></br> capabilities and talent strategy with our<br></br>proven
            solutions and expert guidance.
          </p>
          <h4 className="text-red-800 text-end my-7 mr-5 hover:underline cursor-pointer">
            ORGANIZATIONAL SOLUTIONS{" "}
          </h4>
        </div>
        <div className="border rounded-lg shadow w-full  ">
          <img className="w-full" src={thirdImg} alt="img" />
          <h2 className="text-2xl text-[#1C304B] font-semibold ml-10 my-4">
            Executives
          </h2>
          <p className=" text-md ml-10">
            Great leadership drives success. Our <br></br>seasoned experts
            specialize in developing <br></br>transformative leaders, and
            supporting <br></br>executive search, placement, coaching or{" "}
            <br></br>advisory opportunities.
          </p>
          <h4 className="text-red-800 text-end my-7 mr-5 hover:underline cursor-pointer">
            GET STARTED{" "}
          </h4>
        </div>
      </div>

        </>
    )
}
export default HereToWork;
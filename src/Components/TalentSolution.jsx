import solutionImg from "../assets/solutionImg.jpg";

const TalentSolution=()=>{
    return(
        <>
        <div className="mt-10 mx-12">
        <h1 className="text-3xl text-[#1C304B]">
          Talent solutions built for the evolving world of<br></br> work
        </h1>
        <p className="text-xl mt-2">
          In today's rapidly shifting landscape, success depends on having the
          right talent with the right<br></br> skills at the right time. As part
          of The Adecco Group, we <br></br>empower you to navigate constant
          change with comprehensive solutions <br></br>built to drive results.
        </p>
        <img className="rounded-lg mt-1" src={solutionImg} alt="banner" />
        <div className="flex justify-center items-center mt-5 ">
          <button className=" mb-5 text-xl border border-black px-4 py-2 rounded-lg hover:border-blue-900 hover:underline">
            About Us
          </button>
        </div>
      </div>
        </>
    )
}
export default TalentSolution;
import globalImg from "../assets/globalImg.jpg";
const GlobalWorkforce=()=>{
    return(
        <>
         <div className="mx-12 mt-12 flex flex-col justify-center items-center gap-5 lg:flex-row">
        <div className="w-full">
          <h1 className="text-4xl mb-6 pl-10">
            Global Workforce 2.0: How to<br></br> build a Winning Talent
            Strategy<br></br> for the Future
          </h1>
          <p className="text-xl mb-5 pl-10">
            Get Ready for Next with the latest workplace trends. Learn<br></br> how to
            attract and, most importantly, retain top talent.
          </p>
          <button className="bg-[#F29B59] text-[#1C304B] px-3 py-2 ml-10 rounded-lg font-semibold">Download Now</button>
        </div>
        <div className="w-full ">
            <img className="rounded-lg" src={globalImg} alt="img" />
        </div>
      </div>
        </>
    )
}
export default GlobalWorkforce;
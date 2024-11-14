import bannerImg from "../assets/Background.jpg";
import DreamJob from "../Components/DreamJob";
import DrivingGlobal from "../Components/Drivingglobal";
import GlobalWorkforce from "../Components/GlobalWorkforce";
import HereToWork from "../Components/HereToWork";
import QuickLink from "../Components/QuickLink";
import TalentSolution from "../Components/TalentSolution";
import Yourpartner from "../Components/Yourpartner";
const Home = () => {
  return (
    <div>
      <div className="relative">
        <img className=" object-contain w-fit" src={bannerImg} alt="bgImage" />
      </div>
      <div className="absolute mt-16 ml-5 top-32 left-16 text-[#4F185A] text-4xl ">We Help You <br></br>Prepare and Thrive<br></br> in the Future of Work</div>
    <DreamJob/>
    <QuickLink/>
    <TalentSolution/>
    <HereToWork/>
    <Yourpartner/>
    <GlobalWorkforce/>
    <DrivingGlobal/>
    </div>
     
  );
};
export default Home;

import { Link } from "react-router-dom";
import aboutStore from "../assets/app store.png";
import googleStore from "../assets/google play.png";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="bg-[#290C2F] text-white py-8">
      <div className="mx-12 ">
        <h1 className="text-4xl">Are you Ready for Next?</h1>
        <p className="text-xl mt-3">
          LHH helps individuals, teams, and organizations find and <br></br>prepare for
          what's next in the world of work. We support<br></br> clients needs throughout
          the talent journey, from recruitment<br></br> to career transitions and
          leadership development. We <br></br>empower organizations to expand their
          capabilities and<br></br> workers to build brighter futures.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center mx-12 mt-6 lg:flex-row">
        <div className="w-full my-2">
            <h2 className=" text-xl   mb-2 font-semibold">Find a job</h2>
            <p className="mb-2">We can help you find your next career <br></br>
            opportunity, browse thousands of jobs.</p>
            <Link className="text-[#D56A9F] hover:underline">Find Job</Link>
        </div>
        <div className="w-full my-2">
        <h2 className=" text-xl   mb-2 font-semibold">Request information</h2>
            <p className="mb-2">Let us know how we can help and we’ll get<br></br> back to you as soon as possible.</p>
            <Link className="text-[#D56A9F] hover:underline">CONTACT US</Link>
        </div>
        <div className="w-full my-2">
        <h2 className=" text-xl   mb-2 font-semibold">Our locations</h2>
            <p className="mb-2">With locations around the world we’re <br></br>perfectly positioned to help you.</p>
            <Link className="text-[#D56A9F] hover:underline">FIND A LOCATION</Link>
        </div>
      </div>

      <div className=" mx-12 mt-16 flex flex-col justify-center  items-center lg:flex-row">
         <div className="w-full ">
         <Link className="text-white text-5xl font-bold mx-3">LHH</Link> 
         <p className="py-2 ml-2">Download the LHH App</p>
         <div className="flex justify-center items-center gap-3 ">
         <img src={aboutStore} alt="about" />
         <img src={googleStore} alt="google" />
         </div>
        
         </div>
         <div className="w-full lg:ml-8 ">
            <h2 className="text-2xl font-semibold mb-2">Individuals</h2>
            <ul>
                <li><Link className="text-xs hover:underline">REGISTER FOR CAREER SUPPORT</Link></li>
                <li><Link className="text-xs hover:underline">JOIN OUR CANDIDATE DATABASE</Link></li>
                <li><Link className="text-xs hover:underline">MY INFO (ASSOCIATE PORTAL)</Link></li>
                <li><Link className="text-xs hover:underline">SALARY CALCULATOR</Link></li>
                <li><Link className="text-xs hover:underline">CONTINUE YOUR OUTPLACEMENT</Link></li>
            </ul>
         </div>

         <div className="w-full ">
         <h2 className="text-2xl font-semibold mb-2">Organizations</h2>
            <ul>
                <li><Link className="text-xs hover:underline">FIND GREAT TALENT</Link></li>
                <li><Link className="text-xs hover:underline">EMPOWER TRANSITIONING TALENT</Link></li>
                <li><Link className="text-xs hover:underline">MOBILIZE YOUR WORKFORCE</Link></li>
                <li><Link className="text-xs hover:underline">DEVELOP YOUR LEADERS</Link></li>
                <li><Link className="text-xs hover:underline">CLIENT RESOURCE CENTER</Link></li>
            </ul>
         </div>
         <div className="w-full ">
         <h2 className="text-2xl font-semibold mb-2">Company</h2>
            <ul>
                <li><Link className="text-xs hover:underline">CONTACT US</Link></li>
                <li><Link className="text-xs hover:underline">PRESS ROOM</Link></li>
                <li><Link className="text-xs hover:underline">CAREERS</Link></li>
                <li><Link className="text-xs hover:underline">ABOUT US</Link></li>
                <li><Link className="text-xs hover:underline">OUR LOCATIONS</Link></li>
                <li><Link className="text-xs hover:underline">INVESTOR RELATIONS</Link></li>
                <li><Link className="text-xs hover:underline">THE ADECCO GROUP</Link></li>
            </ul>
         </div>
      </div>
      <hr className="my-10 mx-16  text-center"/>
      <div className="mx-12 flex flex-col justify-center items-center gap-4 lg:flex-row">
       <h4 className="text-[#8BA8AD] text-sm">© LHH 2024</h4>
       <p className="text-sm hover:underline cursor-pointer">Cookie Settings</p>
       <p className="text-sm hover:underline cursor-pointer">Cookie Policy</p>
       <p className="text-sm hover:underline cursor-pointer">Diversity and Inclusion</p>
       <p className="text-sm hover:underline cursor-pointer">EEO Statement and Legal Notices</p>
       <p className="text-sm hover:underline cursor-pointer">Privacy Policy</p>
       <p className="text-sm hover:underline cursor-pointer">Terms and Condition</p>
       <div className="  flex justify-center items-center gap-2 lg:ml-16 ">
       <FaLinkedin className="rounded w-5 h-5" />
       <FaTwitter className="rounded w-5 h-5" />
       </div>
      </div>
      <p className="text-sm hover:underline cursor-pointer text-center my-5">Your Privacy Choices</p>
      </div>
    </>
  );
};
export default Footer;

import { useContext } from "react";
import userContext from "../Context/userContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser } = useContext(userContext);
  return (
    <div>
      <ul className="flex flex-col justify-center gap-8 pr-10 py-2 lg:flex-row lg:justify-end">
        <li>
          <Link>Login </Link>
        </li>
       
        <li>
          <Link>
            {" "}
            <select name="" id="">
              <option value="">ABOUT US</option>
              <option value="">Our Brnads</option>
              <option value="">Careers</option>
              <option value="">Our locations</option>
            </select>
          </Link>
        </li>
         <li>
          <Link>CONACT US</Link>
        </li>
        <li>
          <Link>USA-EN </Link>
        </li>
      </ul>
      {/* <h2>{currentUser}</h2> */}

      <div>
        <div className=" flex flex-col  mx-12 items-center justify-center md:flex-row lg:flex-row lg:justify-center">
          <Link className="text-[#4F185A] text-5xl font-bold mx-3">LHH</Link> 
          <Link>
            {" "}
            <select name="" id="">
              <option value="">INDIVIDUALS</option>
              <option value="">Search open jobs</option>
              <option value="">Join our career database</option>
              <option value="">Register for career support</option>
              <option value="">Job Seeker Hub</option>
              <option value="">Upskill your capabilities</option>
            </select>
          </Link>
          <Link>
            {" "}
            <select name="" id="">
              <option value="">ORGANIZATIONS</option>
              <option value="">Find great talent</option>
              <option value="">Empower transitioning talent</option>
              <option value="">Mobilize your workforce</option>
              <option value="">Develop your leaders</option>
              <option value="">Hiring Hub</option>
            </select>
          </Link>
          <Link>
            {" "}
            <select name="" id="">
              <option value="">EXECUTIVES</option>
              <option value="">Find your next leadership role</option>
              <option value="">Executive career advisory</option>
            </select>
          </Link>
          <Link>
            {" "}
            <select name="" id="">
              <option value="">SOLUTIONS</option>
              <option value="">Recruitment Solutions</option>
              <option value="">Outplacement</option>
              <option value="">Leadership Development</option>
              <option value="">Career Mobility</option>
              <option value="">Executive Career Advisory</option>
              <option value="">Digital Solutions</option>
            </select>
          </Link>
          <Link>
            {" "}
            <select name="" id="">
              <option value="">INSIGHTS</option>
              <option value="">Diversity Equity and Inclusion</option>
              <option value="">Layoff hub</option>
              <option value="">Executive conversations</option>
              <option value="">Salary Guide</option>
            </select>
          </Link>
          <Link>
            {" "}
            <select name="" id="">
              <option value="">OUR EXPERTISE</option>
              <option value="">Industries</option>
              <option value="">Practices</option>
            </select>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;

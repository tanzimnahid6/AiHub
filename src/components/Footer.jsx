import FooterLogo from "../assets/logo5.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
     
      <footer className="footer px-10 py-4 border-t text-base-content border-base-300 bg-teal-500 font-semibold ">
        <aside className="items-center grid-flow-col">
          <img src={FooterLogo} className="w-16 mr-4" alt="" />
          <p>
            BiznestAi LTD <br />
            Providing reliable tech since 2023
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/biznestai/">
              <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a href="https://github.com/proAIrokibul">
              {" "}
              <FaSquareGithub size={30}></FaSquareGithub>
            </a>
            <a href="https://www.facebook.com/BizNestAI">
              <FaFacebookSquare size={30}></FaFacebookSquare>
            </a>
            <a href="https://www.instagram.com/biz_nest_ai/">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.youtube.com/@BiznestAI">
              <FaYoutube size={30}></FaYoutube>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;




 import "./Footer.css"

 import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
 function Footer()  {
 
    return (
      <div className="footer">
         <div className="contactDiv">
                <span className="socialIcon">
                                    <a  target="-blank"
                                    href="https://www.linkedin.com/in/rediet-gashaw/">
                                        <FaLinkedin/>
                                    </a>
                                </span>
                    <span className="socialIcon">
                                    <a  target="-blank"
                                    href="https://t.me/redietgash21">
                                        <FaTelegram/>
                                    </a>
                                </span>
                    <span className="socialIcon">
                                    <a  target="-blank"
                                    href="#">
                                        <FaGithub/>
                                    </a>
                                </span>
                    <span className="socialIcon">
                        <a  target="-blank"
                        href="#">
                            <CgMail/>
                        </a>
                    </span>
                    <span className="socialIcon">
                        <a  target="-blank"
                        href="#">
                            <FaPhoneAlt/>
                        </a>
                    </span>
                    <span className="socialIcon">
                        <a  target="-blank"
                        href="#">
                            <FaTiktok/>
                        </a>
                    </span>
                </div>
      </div>
    )
  
}
export default Footer;






import { Link } from "react-router-dom"

import "./Header.css"
function Header() {
 
    return (
        <>
        <div className="header">
            <div className="left">
                <span>Home</span>
                <span>Design</span>        
            </div>
            <div className="right">
                <button className="headerBtn">
                    <Link to="./login">LOGIN</Link>
                </button>
                <button className="headerBtn">
                   <Link to="signup">SIGNUP</Link> 
                </button>
            
            </div>
        </div>
      </>
    )
  
}

export default Header
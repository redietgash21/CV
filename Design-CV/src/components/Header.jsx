







import "./Header.css"
function Header() {
 
    return (
        <>
        <div className="header">
            <div className="left">
                <span href="#about">Home</span>
                <span>Design</span>        
            </div>
            <div className="right">
                <button className="headerBtn">LOGIN</button>
                <button className="headerBtn">SIGNUP</button>
            
            </div>
        </div>
      </>
    )
  
}

export default Header
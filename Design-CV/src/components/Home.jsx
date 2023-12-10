



import "./Home.css"
import {Link} from "react-router-dom"
function Home() {

    return (
     <>
        <div className="home">
            <div className="div1">DESIGN</div>
            <div className="div2">YOUR CV</div>
            <button className="start">
                <Link to="/design">Get Started</Link>
            </button>
        </div>
     </>

    )
  
}
export default Home;

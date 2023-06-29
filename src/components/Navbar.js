import "./Navbar.css"
import{Link} from "react-router-dom"
export default function Navbar(){
    return (
      <div className='navbar'>
        <ul>
          <li><Link to="/">G-NEWS</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/science">science</Link></li>
          <li><Link to="/sports">sports</Link></li>
          <li><Link to="/technology">technology</Link></li>
          <li><Link to="/business">business</Link></li>
        </ul>
      </div>
    )
  }

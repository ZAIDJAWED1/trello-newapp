import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { TbBellRinging2Filled } from 'react-icons/tb';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">
        <h4 className="m-0">Trello</h4>
      </Link>
      <ul className="navbar-nav me-auto mx-2 mb-2 mb-lg-0">
        <li></li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="#">
            Workspace<IoIosArrowDown/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="#">
            Recent<IoIosArrowDown/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="#">
            Starred<IoIosArrowDown/>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="#">
            More<IoIosArrowDown/>
          </Link>
        </li>
        <li>
          <button className="btn btn-primary">+</button>
        </li>
        
        <li>  
        <TbBellRinging2Filled />
        </li>
      </ul>
        
      <div>
      <input type="text" class="form-control bg-secondary" placeholder="Search"/>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
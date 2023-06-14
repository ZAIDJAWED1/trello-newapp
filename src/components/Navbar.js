import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { TbBellRinging2Filled } from 'react-icons/tb';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <h4 className="m-0">Trello</h4>
      </a>
      <ul className="navbar-nav me-auto mx-2 mb-2 mb-lg-0">
        <li></li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Workspace<IoIosArrowDown/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Recent<IoIosArrowDown/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Starred<IoIosArrowDown/>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            More<IoIosArrowDown/>
          </a>
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
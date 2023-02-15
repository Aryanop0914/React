import React from 'react'
import { NavLink } from 'react-router-dom'

const Header2 = () => {
  return (
    
    <div className="header2">
     <div className="container">
        <div className="row">
            <div className="col">
                <div className="part1">
                    <NavLink to="/form2" className="btn">Add Your Own Property</NavLink>
                </div>
            </div>
            <div className="col">
                <div className="part2">
                <NavLink to="/pdisplay" className="btn">Display My Property</NavLink>
                </div>
            </div>
        </div>
     </div>
    </div>
    
  )
}

export default Header2

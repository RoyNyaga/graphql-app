import React from 'react'
import navStyle from '../styles/navbar.module.css'
import { Link } from 'gatsby'

const Navbar = () => {
	return(
		<div>
			<Link to="/"><div id={navStyle.navDiv} className="container-fluid text-center">Roy's Mini Github Portfolio</div></Link>
		</div>
		)
}	

export default Navbar

import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = (props) => {
	return(
		<div>
			{props.children}
		</div>
		)
}

export default Layout
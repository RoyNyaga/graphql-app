import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/index.css'

const NotFound = () => {
	return (
		<Layout>
			<div id="page-not-found">
				<h1 className="text-white text-center">The page you are trying to access does not exist</h1>
				<p className="text-center page-not-found-link"><Link to="/">Click here to head home</Link></p>
			</div>
		</Layout>
	)
}

export default NotFound
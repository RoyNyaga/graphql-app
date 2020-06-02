import React from 'react'
import { graphql, Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/githubCard.css'
import Layout from "../components/layout"
 


const Show = (props) => {
	console.log(props.pageContext)
	const {name, url, issues, createDate} = props.pageContext
	return(
		<Layout>
			<div id="github-show-page" className="container">
				<div id="github-show-page-row-div" className="row">
					<div className="col-md-5 mx-auto my-auto text-center text-white">
						<h1>{name}</h1>
						<p>This Project was created on {createDate}</p>
						<a href={url}>Follow this link to view it on github</a>
					</div>
				</div>
			</div>
		</Layout>
		)
}

export default Show  
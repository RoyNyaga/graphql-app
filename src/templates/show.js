import React from 'react'
import { graphql, Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/githubCard.css'
import Layout from "../components/layout"
import Moment from 'react-moment';
 


const Show = (props) => {
	const {name, url, issues, createDate} = props.pageContext
	return(
		<Layout>
			<div id="github-show-page" className="container">
				<div id="github-show-page-row-div" className="row">
					<div className="col-md-6 mx-auto my-auto text-center text-white">
						<h1 className="show-page-heading">{name}</h1>
						<p className="show-page-paragraph">This repository was created <Moment fromNow>{createDate}</Moment></p>
						<a className="github-link" href={url} target="_blank">Follow this link to view it on github</a>
					</div>
				</div>
			</div>
		</Layout>
		)
}

export default Show  

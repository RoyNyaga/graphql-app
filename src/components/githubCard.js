import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import '../styles/githubCard.css'

const GithubCard = (props) => {
	return(
		<div className="col-md-3 mx-3 my-3 card">
			<h3 className="text-white">{props.repoName}</h3>
			<h4><Link className="gitLink" to={`/repository/${props.repoName}`}>See More</Link></h4>
		</div>
		)
}

export default GithubCard
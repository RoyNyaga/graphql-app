import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/index.css'

import Layout from '../components/layout'
import GithubCard from '../components/githubCard'


const IndexPage = () => {
  const resource = useStaticQuery(graphql`
    query{
      allGithubData{
        nodes{
          rawResult{
            data{
              repositoryOwner{
                repositories{
                  totalCount
                  edges{
                    node{
                      name
                      url
                      hasIssuesEnabled
                      createdAt
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  `)


  const numOfRepo = resource.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.totalCount
  const edges = resource.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.edges

  return(
    <Layout>
      <div className="container">
        <div id="row-wrapper" className="row text-center pt-5">
          {edges.map((edge) => {
            return (<GithubCard repoName={edge.node.name}/>)
          }) }
        </div>
      </div>
    </Layout>     

  )
}

export default IndexPage

     
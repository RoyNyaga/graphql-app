import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import '../styles/index.css'

import Layout from '../components/layout'


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


  console.log(resource.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.totalCount)
  return(
    <Layout>
      {resource.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.edges.map((edge) => {
      return (<p key={edge.node.name}><Link to={`/repository/${edge.node.name}`}>{edge.node.name}</Link></p>)
    }) }
    </Layout>     

  )
}

export default IndexPage


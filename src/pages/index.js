import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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

  // {data.allGithubData.nodes.rawResult.data.repositoryOwner.repositories.edges.map((edge) => {
  //       return (<h2>{edge.node.name}</h2>)
  //     }) }
  console.log(resource.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.totalCount)
  return(
    <div>
      {resource.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.edges.map((edge) => {
        return (<p><a href="#">{edge.node.name}</a></p>)
      }) }
    </div>
  )
}

export default IndexPage


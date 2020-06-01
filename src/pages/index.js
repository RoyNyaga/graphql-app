import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


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
    <div>
      {resource.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.edges.map((edge) => {
        return (<p key={edge.node.name}><Link to={`/repository/${edge.node.name}`}>{edge.node.name}</Link></p>)
      }) }
    </div>
  )
}

export default IndexPage


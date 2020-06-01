const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const gitTemplate = path.resolve('./src/templates/show.js')
	const res = await graphql(`
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

	res.data.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.edges.forEach((edge) => {
		createPage({
			component: gitTemplate,
			path: `/repository/${edge.node.name}`,
			constext: {
				name: edge.node.name
			}
		})
	})
}
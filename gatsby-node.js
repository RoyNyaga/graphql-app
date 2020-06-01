const path = require('path')

module.exports.createPages = async ({ graphql  actions }) => {
	const { createPage } = actions
	const displayTemplate = path.resolve('./src/templates/show.js')
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
}
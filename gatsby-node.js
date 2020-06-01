const path = require('path')

module.exports.createPages = async ({ graphql  actions }) => {
	const { createPage } = actions
	const displayTemplate = path.resolve('./src/template/show.js')
}
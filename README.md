 {resource.allGithubData.nodes[0].rawResult.data.repositoryOwner.repositories.edges.map((edge) => {
      return (<p key={edge.node.name}><Link to={`/repository/${edge.node.name}`}>{edge.node.name}</Link></p>)
    }) }
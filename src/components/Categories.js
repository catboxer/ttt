import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const query = graphql `
{
  allMdx {
    distinct(field: frontmatter___category)
  }
}
`
const Categories = () => {
  const {allMdx:{distinct}} = useStaticQuery(query)
  return <ul className="categories">
    {distinct.map((category,index)=> <li key={index}><h3>
    <Link to={`/${category}`} className="category">
    {category}</Link></h3></li>)}
  </ul>
}

export default Categories

import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomeDetail = ({ pageContext }) => {
  const { home_detail } = pageContext
  console.log(home_detail)
  return (
    <Layout>
      <Seo title="Home detail" />
    </Layout>
  )
}
export default HomeDetail

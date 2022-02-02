import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const HomeDetail = ({ pageContext }) => {
  const { home_detail } = pageContext
  console.log(home_detail)
  return (
    <Layout>
      <Seo title="Home detail" />
      <h2>Home Detail Page</h2>
      <hr />
      <br />

      <h3>
        <strong>City: </strong>
        <i>
          <u>{home_detail?.CITY}</u>
        </i>
      </h3>
      <hr />
      <h3>
        <strong>HouseNumber: </strong>
        <i>
          <u>{home_detail?.HOUSENUM}</u>
        </i>
      </h3>
      <hr />
      <h3>
        <strong>Address: </strong>
        <i>
          <u>{home_detail?.FULLADDRESS}</u>
        </i>
      </h3>
      <hr />

      <h3>
        <strong>PostalCode: </strong>
        <i>
          <u>{home_detail?.POSTALCODE}</u>
        </i>
      </h3>
      <hr />
      <br />
      <strong>...</strong>
    </Layout>
  )
}
export default HomeDetail

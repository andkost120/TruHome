import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title="Home" />

      <h1>Welcome to your new Gatsby site.</h1>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiAccountNumber {
      nodes {
        data {
          attributes {
            Lon
            Lat
            RemainingMyPropertyLookups
            TAXROLLNUMBER
            MASTERTAXROLLNUMBER
            PROPERTYTYPE
            EFFECTIVEBUILDYEAR
            NETAREA
            HASGARAGE
            ASSESSEDVALUE
            HOUSENUM
            STREETNAME
            POSTALCODE
            CITY
            FULLADDRESS
            NEIGHBOURHOOD
            LOTSIZE
            VALUATION_GROUP
            DISPLAY_TYPE
            TOT_GROSS_AREA_DESCRIPTION
            ACTUAL_ZONE
            ACTUAL_ZONE_DESC
            EFFECTIVE_ZONE
            EFFECTIVE_ZONE_DESC
            MAIL_DATE
            TAXABLE_STATUS
            ASSESSMENT_YEAR
            LEGAL_DESCRIPTION
            RESULTCODE
            RESULTMESSAGE
            RESULTDESCRIPTION
            GEOMETRY {
              coordinates
              type
            }
          }
        }
        meta {
          pagination {
            page
            pageSize
            pageCount
            total
          }
        }
      }
    }
  }
`

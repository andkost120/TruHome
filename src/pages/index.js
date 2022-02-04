import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { linkResolver, linkResolver2 } from "../utils/linkResolver"

const IndexPage = ({ data }) => {
  // const homeList = data?.allStrapiAccountNumber.nodes[0].data
  // console.log(homeList)

  const homeList = data?.allTruhome.nodes
  console.log(homeList)

  return (
    <Layout>
      <Seo title="Home" />

      <h1>Welcome to your new Gatsby site.</h1>

      {homeList.map((item, idx) => {
        return (
          (item?.HOUSENUM || item?.STREETNAME || item?.POSTALCODE) && (
            <div key={idx}>
              <Link to={linkResolver2(item)}>{item.FULLADDRESS}</Link>
              <br />
            </div>
          )
        )
      })}

      {/* {homeList.map((item, idx) => {
        let linkData = item?.attributes
        return (
          (linkData?.HOUSENUM ||
            linkData?.STREETNAME ||
            linkData?.POSTALCODE) && (
            <div key={idx}>
              <Link to={linkResolver(item)}>{linkData.FULLADDRESS}</Link>
              <br />
            </div>
          )
        )
      })} */}
    </Layout>
  )
}

export default IndexPage

/**  Get Data from JSON files  **/

export const pageQuery = graphql`
  query MyQuery {
    allTruhome {
      nodes {
        ACTUAL_ZONE
        ACTUAL_ZONE_DESC
        ASSESSEDVALUE
        ASSESSMENT_YEAR
        CITY
        DISPLAY_TYPE
        EFFECTIVEBUILDYEAR
        EFFECTIVE_ZONE
        EFFECTIVE_ZONE_DESC
        FULLADDRESS
        GEOMETRY
        HASGARAGE
        HOUSENUM
        LEGAL_DESCRIPTION
        LOTSIZE
        Lat
        Lon
        MAIL_DATE
        MASTERTAXROLLNUMBER
        NEIGHBOURHOOD
        NETAREA
        POSTALCODE
        PROPERTYTYPE
        RESULTCODE
        RESULTDESCRIPTION
        RESULTMESSAGE
        STREETNAME
        TAXABLE_STATUS
        TAXROLLNUMBER
        TOT_GROSS_AREA_DESCRIPTION
        VALUATION_GROUP
        id
      }
    }
  }
`

/**  Get Data from Strapi  **/

// export const pageQuery = graphql`
//   query IndexQuery {
//     allStrapiAccountNumber {
//       nodes {
//         data {
//           attributes {
//             Lon
//             Lat
//             RemainingMyPropertyLookups
//             TAXROLLNUMBER
//             MASTERTAXROLLNUMBER
//             PROPERTYTYPE
//             EFFECTIVEBUILDYEAR
//             NETAREA
//             HASGARAGE
//             ASSESSEDVALUE
//             HOUSENUM
//             STREETNAME
//             POSTALCODE
//             CITY
//             FULLADDRESS
//             NEIGHBOURHOOD
//             LOTSIZE
//             VALUATION_GROUP
//             DISPLAY_TYPE
//             TOT_GROSS_AREA_DESCRIPTION
//             ACTUAL_ZONE
//             ACTUAL_ZONE_DESC
//             EFFECTIVE_ZONE
//             EFFECTIVE_ZONE_DESC
//             MAIL_DATE
//             TAXABLE_STATUS
//             ASSESSMENT_YEAR
//             LEGAL_DESCRIPTION
//             RESULTCODE
//             RESULTMESSAGE
//             RESULTDESCRIPTION
//           }
//           id
//         }
//       }
//     }
//   }
// `

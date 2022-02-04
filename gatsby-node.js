const path = require(`path`)
const { linkResolver, linkResolver2 } = require("./src/utils/linkResolver")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      // allStrapiAccountNumber: { nodes: allHomes },
      allTruhome: { nodes: allTruHomes },
    },
  } = await graphql(`
    query {
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
  `)

  const homeTemplate = path.resolve(`./src/templates/home-detail.js`)

  /**   Get the homelisting data from JSON files   **/

  const truHomeData = allTruHomes
  truHomeData.forEach(node => {
    createPage({
      path: linkResolver2(node),
      component: homeTemplate,
      context: {
        home_detail: node,
      },
    })
  })

  /**   Get the homelisting data from Strapi   **/

  // const homeData = allHomes[0].data
  // homeData.forEach(node => {
  //   createPage({
  //     path: linkResolver(node),
  //     component: homeTemplate,
  //     context: {
  //       home_detail: node.attributes,
  //     },
  //   })
  // })
}

// allStrapiAccountNumber {
//   nodes {
//     data {
//       attributes {
//         Lon
//         Lat
//         RemainingMyPropertyLookups
//         TAXROLLNUMBER
//         MASTERTAXROLLNUMBER
//         PROPERTYTYPE
//         EFFECTIVEBUILDYEAR
//         NETAREA
//         HASGARAGE
//         ASSESSEDVALUE
//         HOUSENUM
//         STREETNAME
//         POSTALCODE
//         CITY
//         FULLADDRESS
//         NEIGHBOURHOOD
//         LOTSIZE
//         VALUATION_GROUP
//         DISPLAY_TYPE
//         TOT_GROSS_AREA_DESCRIPTION
//         ACTUAL_ZONE
//         ACTUAL_ZONE_DESC
//         EFFECTIVE_ZONE
//         EFFECTIVE_ZONE_DESC
//         MAIL_DATE
//         TAXABLE_STATUS
//         ASSESSMENT_YEAR
//         LEGAL_DESCRIPTION
//         RESULTCODE
//         RESULTMESSAGE
//         RESULTDESCRIPTION
//       }
//       id
//     }
//   }
// }

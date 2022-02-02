const path = require(`path`)
const { linkResolver } = require("./src/utils/linkResolver")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      allStrapiAccountNumber: { nodes: allHomes },
    },
  } = await graphql(`
    query {
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
            }
            id
          }
        }
      }
    }
  `)

  //Get the homelisting data from Strapi
  const homeData = allHomes[0].data
  const homeTemplate = path.resolve(`./src/templates/home-detail.js`)

  //Generate the detail page of Home
  homeData.forEach(node => {
    createPage({
      path: linkResolver(node),
      component: homeTemplate,
      context: {
        home_detail: node.attributes,
      },
    })
  })
}

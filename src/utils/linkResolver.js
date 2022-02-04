exports.linkResolver = data => {
  let homeData = data?.attributes
  return homeData?.HOUSENUM || homeData?.STREETNAME || homeData?.POSTALCODE
    ? `/homedetails/${
        homeData?.HOUSENUM +
        "-" +
        homeData?.STREETNAME.replace(" ", "-") +
        "-AB-Edmonton-" +
        homeData?.POSTALCODE
      }`
    : `/homedetails/${data?.id}`
}

exports.linkResolver2 = data => {
  return data?.HOUSENUM || data?.STREETNAME || data?.POSTALCODE
    ? `/homedetails/${
        data?.HOUSENUM +
        "-" +
        data?.STREETNAME.replace(" ", "-") +
        "-AB-Edmonton-" +
        data?.POSTALCODE
      }`
    : `/homedetails/${data?.id}`
}

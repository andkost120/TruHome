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

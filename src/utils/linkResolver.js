exports.linkResolver = data => {
  return "/homedetails/" + data?.STREETNAME
    ? data?.STREETNAMEreplace(" ", "-") + "-AB-Edmonton-" + data?.POSTALCODE
    : "AB-Edmonton-" + data?.POSTALCODE
}

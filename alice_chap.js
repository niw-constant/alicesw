function chap(chapUrl) {
  const doc = Http.get(chapUrl).html();
  return doc.select("#htmlContent").html();
}
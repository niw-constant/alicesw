function detail(novelUrl) {
  const doc = Http.get(novelUrl).html();
  return {
    title: doc.select(".book-info h1 em").text(),
    author: doc.select(".book-info h1 span").text(),
    cover: doc.select(".book-img img").attr("src"),
    desc: doc.select(".book-intro").text()
  };
}
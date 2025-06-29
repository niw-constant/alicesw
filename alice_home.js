function home() {
  const doc = Http.get("https://www.alicesw.com").html();
  const list = [];
  doc.select(".book-img-text ul li").forEach(e => {
    list.push({
      title: e.select(".book-mid-info h4 a").text(),
      link: e.select(".book-mid-info h4 a").attr("href"),
      cover: e.select(".book-img-box img").attr("src")
    });
  });
  return list;
}
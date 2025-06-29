function toc(novelUrl) {
  const doc = Http.get(novelUrl).html();
  const chapters = [];
  doc.select("#chapterList li a").forEach(e => {
    chapters.push({
      title: e.text(),
      link: e.attr("href")
    });
  });
  return chapters;
}
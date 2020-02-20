const headers = $(".card-header");
headers.each((i, el) => {
  const listItems = $(el)
    .parent()
    .find(".list-group-item");
  $(el).append(` (${listItems.length})`);
});

const items = $(".list-group-item");
items.each((i, el) => {
  if (
    $(el)
      .text()
      .trim().length < 5
  ) {
    $(el).css("border", "1px solid red");
  }
});

$(".card-header").on("click", event => {
  const header = $(event.target);
  header.next().toggle();
});

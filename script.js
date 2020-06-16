$(document).ready(function () {
  var link = "https://sky-frontend.herokuapp.com/movies/";
  $.ajax({
    url: link,
    type: "GET",
    dataType: "json",
  })
    .done(function (data) {
      var foo = data.slice(0, 1);
      var bar;
      var images;
      var title;
      var type;
      var desc;

      foo.map(function (item) {
        bar = item.items;
        console.log(bar);
      });

      bar.map(function (movie) {
        title = movie.title;
        type = movie.programType;
        desc = movie.description;
        images = movie.images;

        $("#movie").append(
          `<li class="film">
            <strong id="strong">Title:</strong>
            <p class="info">${title}</p>

            <strong id="strong">Type:</strong>
            <p class="info">${type}</p>

            <strong id="strong">Description:</strong>
            <p class="info desc" id="desc">${desc}</p>
          </li>`,
        );

        $(".film").addClass("li");
        $("#strong").addClass("strong");
        $(".info").addClass("p");

        images.map(function (img) {
          $(".desc").append(
            `
            <img width="300px" src="${img.url}" alt="vtnc"/>
            `,
          );
        });
      });
    })
    .fail(function () {
      console.log("error");
    })
    .always(function () {
      console.log("complete");
    });
});

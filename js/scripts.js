// Gather the users' input values. Place them in an array.
$(document).ready(function () {
  $("#userInput").submit(function (event) {
    const fav1 = $("input#favorite1").val();
    const fav2 = $("input#favorite2").val();
    const fav3 = $("input#favorite3").val();

    $(".favorite1").text(fav1);
    $(".favorite2").text(fav2);
    $(".favorite3").text(fav3);

    event.preventDefault();
  });
});

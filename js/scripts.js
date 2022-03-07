// Gather the users' input values. Place them in an array.
$(document).ready(function () {
  $("#userInput").submit(function (event) {
    const fav1 = $("input#favorite1").val();
    const fav2 = $("input#favorite2").val();
    const fav3 = $("input#favorite3").val();
    const favArray = [fav1, fav2, fav3];

    // Practice targetting the elements in the array.
    $(".favorite1").text(favArray[0]);
    $(".favorite2").text(favArray[1]);
    $(".favorite3").text(favArray[2]);

    // Use "push()" to add only these elements to a brand new array.
    const newFavArray = [];
    newFavArray.push(favArray[0]);
    newFavArray.push(favArray[1]);
    newFavArray.push(favArray[2]);

    event.preventDefault();
  });
});

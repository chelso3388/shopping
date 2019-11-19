$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var FirstnameInput = $("input#Firstname").val();
    var LastnameInput = $("input#Lastname").val();
    var Email4Input= $("input#Email4").val();
    var Password4Input = $("input#Password4").val();
    var inputAddress = $("input#Address").val();
    var inputAddress2 = $("input#Address2").val();
    var inputCity = $("input#City").val();
    var inputState = $("input#State").val();
    var ZipInput = $("input#Zip").val();

    $(".inputFirstname").text(inputFirstname);
    $(".inputLastname").text(inputLastname);
    $(".inputEmail4").text(inputEmail4);
    $(".inputPassword4").text(inputPassword4);
    $(".inputAddress").text(inputAddress);
    $(".inputFirstname").text(inputAddress2);
    $(".inputCity").text(inputCity);
    $(".inputState").text(inputState);
    $(".zip").text(inputZip);

    $("#receipt").show();

    event.preventDefault();
  });
});

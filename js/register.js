$("#register-form").on("submit", function (e) {
  e.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    type: "POST",
    url: "../php/register.php",
    data: formData,
    success: function (response) {
      alert(response);
      if (response === "Registration successful") {
        window.location.href = "../login.html";
      }
    },
  });
});

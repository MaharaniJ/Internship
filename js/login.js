$("#login-form").on("submit", function (e) {
  e.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    type: "POST",
    url: "../php/login.php",
    data: formData,
    success: function (response) {
      if (response === "Login successful") {
        window.location.href = "../profile.html";
      } else {
        alert(response);
      }
    },
  });
});

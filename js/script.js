// Registration AJAX request
$("#register-form").on("submit", function (e) {
  e.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    type: "POST",
    url: "php/register.php",
    data: formData,
    success: function (response) {
      // Handle registration success or errors
    },
  });
});

// Login AJAX request
$("#login-form").on("submit", function (e) {
  e.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    type: "POST",
    url: "php/login.php",
    data: formData,
    success: function (response) {
      // Handle login success or errors
    },
  });
});

// Handle profile loading (similar AJAX requests for other profile operations)
function loadProfile() {
  $.ajax({
    type: "GET",
    url: "php/profile.php",
    success: function (data) {
      // Populate profile information on success
    },
  });
}

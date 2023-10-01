// Function to fetch and display user profile data
function fetchProfileData() {
  $.ajax({
    type: "GET",
    url: "../php/profile.php",
    dataType: "json",
    success: function (data) {
      $("#username").text(data.username);
      $("#age").text(data.age);
      $("#dob").text(data.dob);
      $("#contact").text(data.contact);
    },
  });
}

// Fetch and display profile data on page load
$(document).ready(function () {
  fetchProfileData();

  // Logout button click event
  $("#logout").on("click", function () {
    // Clear local storage and redirect to login page
    localStorage.clear();
    window.location.href = "../login.html";
  });
});

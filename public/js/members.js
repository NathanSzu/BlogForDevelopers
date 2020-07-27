$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    // "data" pulled from passport only contains email address and password. 
    $(".member-name").text(data.email);
    
    // Using the get request below, uses the id pulled from above, and finds the specific user's data. 
    $.get(`/api/user/${data.id}`).then(function (data) {
      console.log('This users data:', data)


    });



  })

})
$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    // "data" pulled from passport only contains email address and password. 
    $(".member-name").text(data.email);
    
    // Using the get request below, uses the id pulled from above, and finds the specific user's data. 
    $.get(`/api/user/${data.id}`).then(function (data) {
      console.log('This users data:', data)
      
      var {id, email, password, name, imgURL, bio, Posts} = data
      var {body, category, headerURL, summary, title} = Posts

      // Header
      $(".member-name").text(name);
      // Left side
      $("#bioImg").attr("src", imgURL);
      $("#email").text(email);
      $("#createdAt").text(`Account created: ${data.createdAt}`);
      // Right side
      $("#bioTxt").text(bio);
      // Current posts

      for (let i = 0; i < data.Posts.length; i++) {
        
        
        var {body, category, headerURL, title} = data.Posts[i]

        

        const card = $('<div class="card">').addClass('card, text-center');
        const cardBody = $('<div>').addClass('card-body');

        const titleinput = $('<h2>').text(title);
        const headerURLinput = $('<img>').attr(headerURL);
        // .style("width: 100%; height: auto;")
        const bodyinput = $('<pre>').text(body)
        bodyinput.addClass('body-format');
        const categoryinput = $('<p>').text(category);
        const editbutton = $('<button>').text('view/edit')
        editbutton.addClass('btn btn-primary text-center update-post')
        editbutton.attr('type','button')
        editbutton.attr('data-toggle','modal')
        editbutton.attr('data-target','#editPostModal')
        
        cardBody.append(titleinput, headerURLinput, bodyinput, categoryinput, editbutton)
        card.append(cardBody);
        $('#userPosts').prepend(card)
      }

    });



  })

  $("#save-post").on("click", function(){
    event.preventDefault();

    $.get("/api/user_data").then(function (data) {
      console.log("save data", data)

    const title = $("#post-title").val().trim();
    const summary = $("#post-summary").val().trim();
    const body = $("#post-body").val();
    const category = getRBN();
    const headerURL = $("#post-image").val().trim();
    const UserId = data.id

    $.post(`/api/posts`, {
      title,
      summary,
      body,
      category,
      headerURL,
      UserId
    })
    .then(function(data) {
      location.reload();
    })
    
    });
    
  })

  $(".update-post").on("click", function(){
    event.preventDefault();
    console.log(this);
    // $.get("/api/user_data").then(function (data) {
    //   console.log("save data", data)

    // const title = $("#post-title").val().trim();
    // const summary = $("#post-summary").val().trim();
    // const body = $("#post-body").val();
    // const category = getRBN();
    // const headerURL = $("#post-image").val().trim();
    // const UserId = data.id

    // $.post(`/api/posts`, {
    //   title,
    //   summary,
    //   body,
    //   category,
    //   headerURL,
    //   UserId
    // })
    // .then(function(data) {
    //   location.reload();
    // })
    
    });
    
  })
  
// Function to return the CHECKED radio button value ONLY
  function getRBN() {
    var radioButtons = $("input[name='category']");
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) return radioButtons[i].value;
    }
    return '';
}



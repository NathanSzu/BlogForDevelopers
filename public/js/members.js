$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    // "data" pulled from passport only contains email address and password. 
    $(".member-name").text(data.email);

    // Using the get request below, uses the id pulled from above, and finds the specific user's data. 
    $.get(`/api/user/${data.id}`).then(function (data) {
      // console.log('This users data:', data)

      var { id, email, password, name, imgURL, bio, Posts } = data
      var { body, category, headerURL, summary, title } = Posts

      // Header
      $(".member-name").text(name);
      // Left side
      $("#bioImg").attr("src", imgURL)
      $("#bioImg").addClass("imgCards");
      $("#email").text(email);
      $("#createdAt").text(`Account created: ${data.createdAt}`);
      // Right side
      $("#bioTxt").text(bio);
      // Current posts

      // Populating the modal for updating user information!
      $('#user-name').val(name)
      $('#user-imgURL').val(imgURL)
      $('#user-bio').val(bio)

      function updateUserInfo(userData) {
        $.ajax({
          method: "PUT",
          url: "/api/user",
          data: userData
        })
          .then(function () {
            location.reload();
          })
          .catch(err => console.log(err))
      }

      $('#edit-user').on('click', function () {
        event.preventDefault()
        var userData = {
          name: $('#user-name').val(),
          imgURL: $('#user-imgURL').val(),
          bio: $('#user-bio').val(),
          userId: id
        }
        console.log(userData)
        updateUserInfo(userData)
      })

      for (let i = 0; i < data.Posts.length; i++) {


        var { body, category, headerURL, title, id } = data.Posts[i];

        const card = $('<div class="card">').addClass('card, text-center');
        const cardBody = $('<div>').addClass('card-body');

        const titleinput = $('<h2>').text(title);
        const headerURLinput = $('<img>').attr(headerURL);
        headerURLinput
        // .style("width: 100%; height: auto;")
        const bodyinput = $('<pre>').text(body)
        bodyinput.addClass('body-format');
        const categoryinput = $('<p>').text(category);
        const editbutton = $('<button>').text('Edit Post')
        editbutton.addClass('btn btn-primary text-center update-existing-post')
        editbutton.attr('type', 'button')
        editbutton.attr('data-toggle', 'modal')
        editbutton.attr('data-target', '#editPostModal')
        editbutton.prop('value', id)

        cardBody.append(titleinput, headerURLinput, bodyinput, categoryinput, editbutton)
        card.append(cardBody);
        $('#userPosts').prepend(card)
      }

      $(".update-existing-post").on("click", function () {
        event.preventDefault();
        var postId = $(this).val()
        console.log(postId);

        $.get(`/api/posts/${postId}`).then(function (postData) {
          console.log(postData)
          var { title, summary, body, category, headerURL } = postData

          console.log(category)

          $('#edit-title').val(title)
          $('#edit-summary').val(summary)
          $('#edit-body').val(body)
          $('#edit-image').val(headerURL)

          $("#edit-post").on("click", function () {
            event.preventDefault();

            const title = $('#edit-title').val().trim()
            const summary = $('#edit-summary').val().trim()
            const body = $('#edit-body').val()
            const category = getRBN();
            const headerURL = $('#edit-image').val().trim()

            const updatedPost = {
              title,
              summary,
              body,
              category,
              headerURL,
              postId
            }

            updatePost(updatedPost)

            function updatePost(post) {
              $.ajax({
                method: "PUT",
                url: "/api/posts",
                data: post
              })
                .then(function () {
                  location.reload();
                });
            }






          })

          $("#delete-post").on("click", function () {
            event.preventDefault();
            function deletePost() {
              $.ajax({
                method: "DELETE",
                url: `/api/posts/${postId}`,
              })
                .then(function () {
                  location.reload();
                });
            }
            deletePost()

          })

        })


      })

    });



  })

  $("#save-post").on("click", function () {
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
        .then(function (data) {
          location.reload();
        })

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


})
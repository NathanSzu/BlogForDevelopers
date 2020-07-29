$(document).ready(function () {

  // GET all posts
  $.get('/api/posts/').then(response => {
    console.log(response)
    // $('#articles').empty()
    for (let i = 0; i < response.length; i++) {
      const { title, summary, body, category, id, headerURL } = response[i];
      // Creating card body and card to store the data

      const card = $('<div>').addClass('card col-md-3 homepageCard');
      card.prop("value", id)

      const hr = $('<hr>')
      const cardBody = $('<div>').addClass('card-body text-center');
      const imgDiv = $('<div>')
      imgDiv.addClass('imgDiv')
      const headerinputURL = $('<img>').attr("src", headerURL);
      headerinputURL.addClass('imgCards')
      imgDiv.append(headerinputURL)
      const textDiv = $('<div>')
      textDiv.addClass('textDiv')
      const titleinput = $('<h6>').text(title);
      const summaryinput = $('<p>').text(summary);
      const categoryinput = $('<p>').text(`Tags: ${category}`);

      textDiv.append(titleinput, hr, summaryinput, categoryinput)

      cardBody.append(imgDiv, textDiv)
      card.append(cardBody);
      $('#articles').prepend(card)
    } // END OF Render all posts

    // Filter by Tag
    $(".tag").on("click", function () {
      var tag = $(this).text()
      console.log(tag)
      $('#articles').empty()
      $('#clearFilter').removeClass("d-none")

      $.get(`/api/posts/category/${tag}`).then(function (response) {
        console.log(response)

        for (let i = 0; i < response.length; i++) {
          const { title, summary, body, category, id, headerURL } = response[i];
          // Creating card body and card to store the data
          const card = $('<div>').addClass('card col-md-3 homepageCard');
          console.log(id)
          card.prop("value", id)

          const hr = $('<hr>')
          const cardBody = $('<div>').addClass('card-body text-center');
          const imgDiv = $('<div>')
          imgDiv.addClass('imgDiv')
          const headerinputURL = $('<img>').attr("src", headerURL);
          headerinputURL.addClass('imgCards')
          imgDiv.append(headerinputURL)
          const textDiv = $('<div>')
          textDiv.addClass('textDiv')
          const titleinput = $('<h6>').text(title);
          const summaryinput = $('<p>').text(summary);
          const categoryinput = $('<p>').text(`Tags: ${category}`);

          textDiv.append(titleinput, hr, summaryinput, categoryinput)

          cardBody.append(imgDiv, textDiv)
          card.append(cardBody);
          $('#articles').prepend(card)
        }

        // ONE POST DISPLAY
    $(".homepageCard").on("click", function () {
      console.log("clicked")
      // event.preventDefault();
      var cardId = $(this).val()
      console.log(cardId)

      $('#articles').empty()

      $.get(`/api/posts/${cardId}`).then(function (postData) {
        const { body, category, title, headerURL } = postData

        const card = $('<div class="card">').addClass('card, text-center');
        const cardBody = $('<div>').addClass('card-body');

        const titleinput = $('<h2>').text(title);
        const headerURLinput = $('<img>').attr("src", headerURL);
        headerURLinput.addClass("imgCards")
        const bodyinput = $('<pre>').text(body)
        bodyinput.addClass('body-format');
        const categoryinput = $('<p>').text(category);


        cardBody.append(titleinput, headerURLinput, bodyinput, categoryinput)
        card.append(cardBody);
        $('#articles').append(card)

      })
    }) // END OF ONE POST DISPLAY

      })
    }) // END OF Filter by Tag


    // ONE POST DISPLAY
    $(".homepageCard").on("click", function () {
      console.log("clicked")
      // event.preventDefault();
      var cardId = $(this).val()
      console.log(cardId)

      $('#articles').empty()

      $.get(`/api/posts/${cardId}`).then(function (postData) {
        const { body, category, title, headerURL } = postData

        const card = $('<div class="card">').addClass('card, text-center');
        const cardBody = $('<div>').addClass('card-body');

        const titleinput = $('<h2>').text(title);
        const headerURLinput = $('<img>').attr("src", headerURL);
        headerURLinput.addClass("imgCards")
        const bodyinput = $('<pre>').text(body)
        bodyinput.addClass('body-format');
        const categoryinput = $('<p>').text(category);


        cardBody.append(titleinput, headerURLinput, bodyinput, categoryinput)
        card.append(cardBody);
        $('#articles').append(card)

      })
    }) // END OF ONE POST DISPLAY


    // Clear the filter and rerender all of the posts
    $("#clearFilter").on("click", function () {
      $('#articles').empty()
      $('#clearFilter').addClass("d-none")

      $.get('/api/posts/').then(response => {
        console.log(response)
        $('#articles').empty()
        for (let i = 0; i < response.length; i++) {
          const { title, summary, body, category, id, headerURL } = response[i];
          // Creating card body and card to store the data

          const card = $('<div>').addClass('card col-md-3 homepageCard');
          card.prop("value", id)

          const hr = $('<hr>')
          const cardBody = $('<div>').addClass('card-body text-center');
          const imgDiv = $('<div>')
          imgDiv.addClass('imgDiv')
          const headerinputURL = $('<img>').attr("src", headerURL);
          headerinputURL.addClass('imgCards')
          imgDiv.append(headerinputURL)
          const textDiv = $('<div>')
          textDiv.addClass('textDiv')
          const titleinput = $('<h6>').text(title);
          const summaryinput = $('<p>').text(summary);
          const categoryinput = $('<p>').text(`Tags: ${category}`);

          textDiv.append(titleinput, hr, summaryinput, categoryinput)

          cardBody.append(imgDiv, textDiv)
          card.append(cardBody);
          $('#articles').prepend(card)

        }

        // ONE POST DISPLAY
    $(".homepageCard").on("click", function () {
      console.log("clicked")
      // event.preventDefault();
      var cardId = $(this).val()
      console.log(cardId)

      $('#articles').empty()

      $.get(`/api/posts/${cardId}`).then(function (postData) {
        const { body, category, title, headerURL } = postData

        const card = $('<div class="card">').addClass('card, text-center');
        const cardBody = $('<div>').addClass('card-body');

        const titleinput = $('<h2>').text(title);
        const headerURLinput = $('<img>').attr("src", headerURL);
        headerURLinput.addClass("imgCards")
        const bodyinput = $('<pre>').text(body)
        bodyinput.addClass('body-format');
        const categoryinput = $('<p>').text(category);


        cardBody.append(titleinput, headerURLinput, bodyinput, categoryinput)
        card.append(cardBody);
        $('#articles').append(card)

      })
    }) // END OF ONE POST DISPLAY

      })
    }) // End of clear filter


  }) //End of get request


})  //End of document.ready


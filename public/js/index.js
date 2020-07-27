console.log("success")

$(document).ready(function(){

    $.get('/api/posts/').then(response => {
      console.log(response)
      for (let i = 0; i < response.length; i++) {
        const { title, summary, body, category, id, headerURL} = response[i];
        // Creating card body and card to store the data
        const card = $('<div class="card">').addClass('card, text-center, col-1, float-left, homepageCard');
        const cardBody = $('<div>').addClass('card-body, text-center');

        const headerinputURL = $('<img>').attr("src", headerURL);
        headerinputURL.addClass('imgCards')
        const titleinput = $('<h6>').text(title);
        const summaryinput = $('<p>').text(summary);
        // const bodyinput = $('<p>').text(`Body: ${body}`);
        const catagoryinput = $('<p>').text(`Tags: ${category}`);
        // const idinput = $('<p>').text(`id: ${id}`);

      

        cardBody.append(headerinputURL, titleinput, summaryinput, catagoryinput)
        card.append(cardBody);
        $('#articles').prepend(card)

      } 
    })
  })
console.log("success")

$(document).ready(function(){

    $.get('/api/posts/').then(response => {
      console.log(response)
      for (let i = 0; i < response.length; i++) {
        const { title, summary, body, catagory, id } = response[i];
        // Creating card body and card to store the data
        const card = $('<div class="card">').addClass('card, text-center');
        const cardBody = $('<div>').addClass('card-body');


        const titleinput = $('<p>').text(`Title: ${title}`);
        const summaryinput = $('<p>').text(`Summary: ${summary}`);
        const bodyinput = $('<p>').text(`Body: ${body}`);
        const catagoryinput = $('<p>').text(`Catagory: ${catagory}`);
        const idinput = $('<p>').text(`id: ${id}`);
        

        cardBody.append(titleinput, summaryinput, bodyinput, catagoryinput, idinput)
        card.append(cardBody);
        $('#notes').append(card)

      } 
    })
  })
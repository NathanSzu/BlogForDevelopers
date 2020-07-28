function readPost (Id) {
    
    console.log(Id)

    $.get(`/api/posts/${Id}`).then(function (postData) {
        const {UserID, body, category, id, summary, title, headerURL} = postData
        console.log(postData)

        const card = $('<div class="card">').addClass('card, text-center');
        const cardBody = $('<div>').addClass('card-body');

        const titleinput = $('<h2>').text(title);
        const headerURLinput = $('<img>').attr(headerURL);
        // .style("width: 100%; height: auto;")
        const bodyinput = $('<pre>').text(body)
        bodyinput.addClass('body-format');
        const categoryinput = $('<p>').text(category);


        cardBody.append(titleinput, headerURLinput, bodyinput, categoryinput)
        card.append(cardBody);
        $('#activePost').prepend(card)


        window.location.href = "/post";
      })



}
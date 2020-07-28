$(document).ready(function () {

  $.get('/api/posts/').then(response => {
    console.log(response)
    for (let i = 0; i < response.length; i++) {
      const { title, summary, body, category, id, headerURL } = response[i];
      // Creating card body and card to store the data
      const card = $('<div class="card">').addClass('card, text-center, col-1, float-left, homepageCard');
      card.prop("value", id)


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

    $(".homepageCard").on("click", function () {
      // event.preventDefault();
      var cardId = $(this).val()
      // console.log(cardId)

      $('#articles').empty()

      $.get(`/api/posts/${cardId}`).then(function (postData) {
        const {UserID, body, category, id, summary, title, headerURL} = postData

        const card = $('<div class="card">').addClass('card, text-center');
        const cardBody = $('<div>').addClass('card-body');

        const titleinput = $('<h2>').text(title);
        const headerURLinput = $('<img>').attr("src", headerURL);
        headerURLinput.addClass("imgCards")
        // .style("width: 100%; height: auto;")
        const bodyinput = $('<pre>').text(body)
        bodyinput.addClass('body-format');
        const categoryinput = $('<p>').text(category);


        cardBody.append(titleinput, headerURLinput, bodyinput, categoryinput)
        card.append(cardBody);
        $('#articles').append(card)

      })
    })
  })
})

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
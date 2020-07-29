$(document).ready(function () {

  $.get('/api/posts/').then(response => {
    console.log(response)
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
      // event.preventDefault();
      var cardId = $(this).val()
      // console.log(cardId)

      $('#articles').empty()

      $.get(`/api/posts/${cardId}`).then(function (postData) {
        const {body, category, title, headerURL} = postData

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

$(".tag").on("click", function () {
  var tag = $(this).text()
  console.log(tag)
  $('#articles').empty()

  $.get(`/api/posts/category/${tag}`).then(function (response) {
    console.log(response)

    console.log(response)
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


  })
})
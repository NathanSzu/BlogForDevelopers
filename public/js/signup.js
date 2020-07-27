
$(document).ready(() => {
    $('#signup-button').on('click', (event)=>{
      event.preventDefault()
      const email = $('#email-input').val().trim();
      const password = $('#password-input').val().trim()
      const name = "Anonymous"
      const imgURL = ""
      const bio = ""
  
      const newUser = {
        email,
        password,
        name,
        imgURL,
        bio
      }
  
      $.post('/api/user', newUser)
        .then(response => {
          console.log(response)
        
          window.location = "/members"
        })
        .catch(error => console.log(error))
    })
  })
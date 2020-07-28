
$(document).ready(() => {
    $('#signup-button').on('click', (event)=>{
      event.preventDefault()
      const email = $('#email-input').val().trim();
      const password = $('#password-input').val().trim()
      const name = "Anonymous"
      const imgURL = "https://memegenerator.net/img/instances/65173980/y-u-no-work-stupid-computer.jpg"
      const bio = "This is where your bio will go. You should really write something cooler than this. This is lame.."
  
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
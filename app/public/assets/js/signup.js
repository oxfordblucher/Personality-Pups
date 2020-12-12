$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form#signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    let unsavedResId = parseInt(sessionStorage.getItem('unsavedResultId'));

    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, unsavedResId);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, resultId) {
    $.post("/api/signup", {
      email: email,
      password: password,
      results: resultId
    })
      .then(function (newUser) {

        $.ajax({
          url: `/api/results`,
          method: 'PUT',
          data: {
            newId: newUser.id
          }
        })
        .then(function() {
          window.location.replace("/");
        })
      })

    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    };
  }}
)
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".answer-pup").on("click", function(event) {
    const id = $(this).data("id");
    const answerPup = {
      Doggy: true
    };

    // Send the PUT request.
    $.ajax("/api/quizzes/" + id, {
      type: "PUT",
      data: answerPup
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();

      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newQuestion = {
      name: $("#bg").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/quizzes", {
      type: "POST",
      data: newQuestion
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();

      }
    );
  });
});

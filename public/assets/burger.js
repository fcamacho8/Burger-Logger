$(function() {

  $(".devourBtn").on('click', function(event) {

    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("newsleep");

    var newDevState = {
      devoured: newDevoured
    };


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevState,
    }).then(
      function() {
        console.log("Updated Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

  })

  $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#bur").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


});
$(function() {

  $(".devourBtn").on('click', function(event) {

    
    var id = $(this).data("id");
    var newDevoured = $(this).data("devour");

    var newDevState = {devoured: 1}


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
  
      console.log("Button worked");
  
      let newBurger = {
        burger_name: $("#bur").val(),
        devoured: 0
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
$(function() {
  $(".eat-burger").on("click", function(event) {
    var burgerId = $(this).data("id");
      console.log(burgerId);
 
 $.ajax({
          url: 'api/burgers/' + burgerId,
          type: 'PUT',
          success: function(data){
              console.log("burger has been eaten" + data)
          }
      });

var newBurgerState = {
      devoured: false
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + burgerId, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("Changed to ", newEat);
        // Reload the page to get the updated list
        location.reload();
      });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $(".submit").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created a new burger");
        // Reload the page to get the updated list
        location.reload();
      });
 
    $.ajax("/api/burgers/" + burgerId, {
      type: "POST",
      data: newEatState
    }).then(
      function(data) {
        console.log("created a new burger" + data);
        // Reload the page to get the updated list
        location.reload();
      });

  });

});
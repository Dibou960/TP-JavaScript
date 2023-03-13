$(document).ready(function() {
    
    $(".btn").click(function() {
      
      var note = $(".container").first().clone();
      $(".text").last().after(note);
    });
  });
  
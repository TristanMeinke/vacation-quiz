var denmarkCounter = 0;
var hawaiiCounter = 0;
var indiaCounter = 0;
var canadaCounter = 0;
// Japan is the 'else' case.

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// jQuery follows.

$(document).ready(function() {

  // This function defines and handles the algorithm which sorts the users answers
  // and displays the destination they should travel to accordingly.
  function displayResults(hawaiiCounter, indiaCounter, denmarkCounter, canadaCounter) {

    $("#results").show();

    if (denmarkCounter > hawaiiCounter && denmarkCounter > indiaCounter && denmarkCounter > canadaCounter)
    {
      $("#results-denmark").show();

      event.preventDefault();
    }
    else if (hawaiiCounter > denmarkCounter && hawaiiCounter > indiaCounter && hawaiiCounter > canadaCounter)
    {
      $("#results-hawaii").show();
      event.preventDefault();
    }
    else if (indiaCounter > denmarkCounter && indiaCounter > hawaiiCounter && indiaCounter > canadaCounter)
    {
      $("#results-india").show();
      event.preventDefault();
    }
    else if (canadaCounter > denmarkCounter && canadaCounter > hawaiiCounter && canadaCounter > indiaCounter)
    {
      $("#results-canada").show();
      event.preventDefault();
    }
    else if (canadaCounter === denmarkCounter || canadaCounter === hawaiiCounter || canadaCounter === indiaCounter
            || denmarkCounter === hawaiiCounter || denmarkCounter === indiaCounter
            || hawaiiCounter === indiaCounter)
    {
      // This condition is to eliminate ties.
      $("#results-japan").show();
      event.preventDefault();
    }
    else
    {
      $("#results-japan").show();
      event.preventDefault();
    }
  };

  // The following block of code increments the counters for each destination
  // when their corresponding objects are clicked upon.

  $(".denmark").click(function() {
    denmarkCounter++;
  });
  $(".hawaii").click(function() {
    hawaiiCounter++;
  });
  $(".india").click(function() {
    indiaCounter++;
  });
  $(".canada").click(function() {
    canadaCounter++;
  });


  //The following code instructs the individual questions to hide themselves after they have been answered.  This section could probably benefit from being refactored with a loop of some sort.


  $("#question1").click(function() {
    $("#question1").hide();
  });

  $("#question2").click(function() {
    $("#question2").hide();
  });

  $("#question3").click(function() {
    $("#question3").hide();
  });

  $("#question4").click(function() {
    $("#question4").hide();
  });

  $("#question5").click(function() {
    $("#question5").hide();
  });

  $("#question6").click(function() {
    $("#question6").hide();
  });

  $("#question7").click(function() {
    $("#question7").hide();
  });

  $("#question8").click(function() {
    $("#question8").hide();
  });

  //Below is the code for the submit buttons.

  $("#vacation-quiz form").submit(function(event) {
      // The following line calls the fuction to calculate and display results,
      // and passes it the variables it needs.
    displayResults(hawaiiCounter, indiaCounter, denmarkCounter, canadaCounter);
    $("#quiz-submission").hide();
  });

  $("#user-info form").submit(function(event) {
    $("#user-info").hide();
    $("#vacation-quiz").show();
    event.preventDefault();
  });


});
